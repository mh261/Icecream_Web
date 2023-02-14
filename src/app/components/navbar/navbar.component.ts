import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router,public icecreamSrvc: ServiceService ){
  }

  showSubInfo() {
    let temp = document.getElementById('sub_info')
    if(temp?.style.display === "none"){
      temp.style.display = 'flex';
      temp.style.flexDirection = 'column';
    }else{
      temp!.style.display = 'none';
    }
  }

  navigateToIcecream() {
    this.router.navigate([`/icecream`]);
  }
  navigateToHome(){
    this.router.navigate([``]);
  }
  navigatetoCart(){
    this.router.navigate([`/cart`]);
  }

  ngOnInit(): void {
  }
    


}
