import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerList} from '../customerList';
import {SavingServiceService} from '../saving-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Saving} from '../saving';

@Component({
  selector: 'app-saving-edit',
  templateUrl: './saving-edit.component.html',
  styleUrls: ['./saving-edit.component.css']
})
export class SavingEditComponent implements OnInit {

  savingFormGroup: FormGroup = new FormGroup({
    customerList: new FormGroup({
      id: new FormControl(''),
      customerName: new FormControl('', Validators.required)
    }),
    id: new FormControl(''),
    dayOfBegin: new FormControl('', Validators.required),
    openingDay: new FormControl('', Validators.required),
    period: new FormControl('', Validators.required),
    money: new FormControl('', Validators.required),
    interest: new FormControl('', Validators.required),
    promotion: new FormControl('', Validators.required)
  });
  savingId: number;
  customerList: CustomerList[];
  saving: Saving;

  minAge = (new Date().getFullYear() - 80) + '-01-01';
  maxAge = (new Date().getFullYear() - 18) + '-12-31';

  constructor(private savingService: SavingServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

    this.savingId = Number(this.activatedRoute.snapshot.params.id);

    this.savingService.getById(this.savingId).subscribe(customer => {
        this.saving = customer;
        this.savingFormGroup.patchValue(this.saving);
        console.log(customer);
      }
      ,
      error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      }
    )
    ;
  }

  updateCustomer(id: number) {
    const saving = this.savingFormGroup.value;
    this.savingService.updateSaving(id, saving).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Edit success!',
        showConfirmButton: false,
        timer: 2500
      });

      this.router.navigateByUrl('');
    }, error => {
      console.log(error);
    }, () => {
      console.log('Cập nhật khách hàng thành công!');
    });
  }

  checkTime(abstractControl: AbstractControl): any {
    const formYear = new Date(abstractControl.value).getFullYear();
    const curYear = new Date().getFullYear();
    return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : {invalid18_80: true};
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
