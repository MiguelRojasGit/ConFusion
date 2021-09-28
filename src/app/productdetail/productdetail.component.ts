import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../menu/Shared/product';
import { ProductService } from '../Services/product.service';
import { ValidationService } from '../Services/validation.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

  product: Product = new Product;
  ContactType = ['Efectivo', 'Tarjeta credito', 'PSE'];
  hidden = false;
  public message:any=[];
  @Input() compra = { n_FECHA_DE_ENTREGA: 'Fecha Entrega :  30-10-2021', k_PRODUCTO:"Producto #  "+1, n_FECHA_COM:'Fecha Compra :  28-10-2021',q_CEDULA:"Cliente :  "+3,q_TOTAL_COM:'Total Pagado :  $'+4.99 }
  compra2:any=[];


  constructor(private http:HttpClient,private productService: ProductService,
    private validationService:ValidationService,
    private route: ActivatedRoute,
    private location: Location) { }


  toggleBadgeVisibility() {
      this.hidden = !this.hidden;

    }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(id);
    //this.compra=this.validationService.postPurchase()
    //this.getValidation();
  }
  goBack(): void {
    this.location.back();
  }
  //http://localhost:8080/123/efectivo'    link para pagos
  getValidation(){
    this.http.get('http://localhost:8080/123/efectivo').subscribe((mensajes: any) =>(this.message = mensajes))
    console.log(this.message);

  }
  addPurchase() {
    this.compra2=this.compra;
    this.validationService.createPurchase(this.compra).subscribe();
  }



}
