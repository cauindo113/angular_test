import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: any = {
    id: 0,
    title: '',
    img: '',
    price: '',
    desc: '',
    author: ''
  };
  constructor(
    private ProductService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo() {
    this.activatedRoute.params.subscribe(params => {
      this.ProductService.get(params.id).subscribe(data => {
        this.product = data;
      });
    });
  }
  onUpdateProduct() {
    this.ProductService.updateProduct(this.product).subscribe(data => {
      this.router.navigateByUrl("/product")
    });
  }
}
