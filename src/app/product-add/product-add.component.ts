import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: any = {
    id: 0,
    title: '',
    price: '',
    desc: '',
    author: ''
  };
  constructor(
    private productService: ProductService,
    private router: Router
    ) {}

  ngOnInit(): void {
  }
  onAddProduct() {
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/product')
      
    })
  }
}
