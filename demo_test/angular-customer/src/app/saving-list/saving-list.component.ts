import {Component, OnInit} from '@angular/core';
import {Saving} from '../saving';
import {SavingServiceService} from '../saving-service.service';
import Swal from 'sweetalert2';
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-saving-list',
  templateUrl: './saving-list.component.html',
  styleUrls: ['./saving-list.component.css']
})
export class SavingListComponent implements OnInit {

  savingNameSearch = '';
  savingList$: Observable<Saving[]>;
  numberRecord = 1;
  curPage = 1;
  totalPage: number;
  total$: Observable<number>;

  savingNameDelete: string;
  savingIdDelete: number;

  constructor(private savingService: SavingServiceService) {
  }

  ngOnInit(): void {
    this.savingService.findSavingSearchPaging(this.numberRecord, this.curPage).subscribe(value => {
        console.log(value);
        this.savingList$ = new BehaviorSubject<Saving[]>(value.content);
        this.total$ = new BehaviorSubject(value.totalElements);
      }
    );

    // this.savingService.findSavingSearchPaging(this.numberRecord, this.curPage).subscribe(value => {
    //   this.savingList$ = new BehaviorSubject(value.content);
    // });
  }

  next(): void {
    this.curPage++;
    this.ngOnInit();
  }

  previous(): void {
    this.curPage--;
    this.ngOnInit();
  }

  searchByMore(): void {
    console.log(this.savingNameSearch);
    this.curPage = 1;
    this.ngOnInit();
  }

  getInfoSavingDelete(savingName: string, savingId: number): void {
    this.savingNameDelete = savingName;
    this.savingIdDelete = savingId;
  }

  deleteCustomer(): void {
    this.savingService.deleteSaving(this.savingIdDelete).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Xóa thành công!',
        text: 'Khách hàng: ' + this.savingNameDelete,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

      this.curPage = 1;
      this.ngOnInit();
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa khách hàng thành công!');
    });
  }
}
