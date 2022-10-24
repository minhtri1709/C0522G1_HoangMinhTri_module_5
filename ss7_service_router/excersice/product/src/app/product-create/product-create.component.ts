import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryServiceService} from '../category-service.service';
import {Category} from '../category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[];

  constructor(private productService: ProductService,
              private categoryService: CategoryServiceService,
              private route: Router) {
  }

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });


  ngOnInit(): void {
    this.getAllCategory();
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(value => {
      this.productForm.reset();
      this.route.navigateByUrl('product/list');
    }, error => {
      console.log('Error');
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value;
    });
  }
}
