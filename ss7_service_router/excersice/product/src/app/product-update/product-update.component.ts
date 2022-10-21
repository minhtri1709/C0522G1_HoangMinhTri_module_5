import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../model/product';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productForm: FormGroup;

  product: Product;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.productId);
    this.product = this.productService.findById(id);
    console.log(this.product);
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl()
    });
    this.productForm.patchValue(this.product);
  }

  updateProduct() {
    const product = this.productForm.value;
    this.productService.updateProduct(product.id, product);
    alert('Cập nhật thành công');
    this.router.navigateByUrl('/product/list');
  }
}
