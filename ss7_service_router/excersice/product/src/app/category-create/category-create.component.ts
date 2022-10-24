import {Component, OnInit} from '@angular/core';
import {CategoryServiceService} from '../category-service.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  categoryForm: FormGroup = new FormGroup({
    name: new FormControl()
  });


  constructor(private service: CategoryServiceService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const category = this.categoryForm.value;
    this.service.saveCategory(category).subscribe(value => {
      this.categoryForm.reset();
      alert('Tao thanh cong');
    }, error => {
      console.log('error');
    });
  }
}
