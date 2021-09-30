import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[]
  constructor(private productService: ProductService,){}
  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
  onHandleRemove(id: number) {
    const checkDelete = window.confirm("co chac muon xoa")
    if(checkDelete){
      this.productService.removeProduct(id).subscribe(data => {
        this.products = this.products.filter(item => item.id != data.id);
        this.getProduct();
      });
    }
     
  
  }

}
