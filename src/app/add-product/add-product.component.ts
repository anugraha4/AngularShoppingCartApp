import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productimage=""
  producttitle=""
  description=""
  rate=""
  seller=""
  quantity=""

  addproduct=()=>
  {
    let add:any={"productimage":this.productimage,"producttitle":this.producttitle,"description":this.description,
    "rate":this.rate,"seller":this.seller,"quantity":this.quantity}
    console.log(add);
  }

}
