import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  productForm: FormGroup;
  id: number;
  product: Product;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.productId);
    this.product = this.productService.findById(id);
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl()
    });
    this.productForm.patchValue(this.product);
  }

  deleteProduct() {
    const product = this.productForm.value;
    this.productService.deleteProduct(product.id);
    alert('Xoá thành công');
    this.router.navigate(['/product/list']);
  }
}
