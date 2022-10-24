import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryServiceService} from '../category-service.service';
import {Category} from '../category';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productForm: FormGroup;

  product: Product;
  id: number;
  categories: Category[];

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.productId);
    this.productService.findById(id).subscribe(value => {
      this.productForm.patchValue(value);
    });
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
    this.getAllCategory();
  }

  updateProduct() {
    const product = this.productForm.value;
    this.productService.updateProduct(product.id, product).subscribe(value => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('/product/list');
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value;
    });
  }

}
