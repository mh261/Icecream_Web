import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(protected router: Router , public icecreamSrvc: ServiceService ) {
    console.log(this.icecreamSrvc.cart);
  }
  navigateToIcecream() {
    this.router.navigate([`/icecream`]);
  }
  navigateToBill(){
    this.router.navigate([`/bill`]);
  }

  ngOnInit(): void {
    
  }
}
