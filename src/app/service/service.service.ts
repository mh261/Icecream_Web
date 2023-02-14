import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { 
    console.log(this.cart.length)
  }

  cart:any = [];
  total = 0;
  subtotal = 0;


  add(product: any){
    if(this.cart.length == 0){
      this.cart.push(product);
      product.quantity++;
      product.inStock--;
      console.log(this.cart);
      return;
    }
    else{
      for(let i =0; i < this.cart.length; i++){
        if(this.cart[i].id === product.id){
          this.cart[i].quantity++;
          product.inStock--;
          console.log(this.cart)
          return
        }
      }
      this.cart.push(product);
      console.log(this.cart);
        // else{
        //   this.cart.push(product)
        //   prdt.quantity++
        //   product.inStock--;
        //   console.log(this.cart)
        //   return;
        }
      }
    
    // product.quantity++;
    // console.log(this.cart);
    // this.subtotal += (product.price*product.quantity)
    // this.total = this.subtotal;
    // console.log("total: " + this.total);
    // // return;
  

  purchase(){
    let total = 0;
    for(let i = 0; i< this.cart.length; i ++){
            this.subtotal+=((parseInt(this.cart[i].price))*this.cart[i].quantity);
    }
    this.total = this.subtotal;
  }
  


  product =[

 
    {
     id: 1,
     name: "Kem Vani",
     img : "https://kemmiennhietdoi.com/timthumb.php?src=upload/product/kem-vani1603442818_300x300.png&w=300&h=300&zc=2&q=85",
     sub : "Kem vani có vị ngọt của sữa",
     price : 35000,
     inStock: 5,
     quantity: 0,
    },
    {
      id: 2,
      name: "Kem Matcha",
      img : "https://kemmiennhietdoi.com/timthumb.php?src=upload/product/kem-tra-xanh-matcha1603442708_300x300.png&w=300&h=300&zc=2&q=85",
      sub : "Matcha có vị đắng của trà xanh ",
      price : 35000,
      inStock: 3,
      quantity: 0,

     },
     {
      id: 3,
      name: "Kem Socola",
      img : "https://kemmiennhietdoi.com/timthumb.php?src=upload/product/kem-so-co-la1603442697_300x300.png&w=300&h=300&zc=2&q=85",
      sub : "Socola có vị đắng nhẹ, ngọt thanh",
      price : 35000,
      inStock: 4,
      quantity: 0,
     },
     {
      id: 4,
      name: "Kem Việt quất ",
      img : "https://kemmiennhietdoi.com/timthumb.php?src=upload/product/kem-viet-quat1603442552_300x300.png&w=300&h=300&zc=2&q=85",
      sub : "Việt quất ngọt thanh, hương thơm đậm đà ",
      price : 40000,
      inStock: 6,
      quantity: 0,
     },

     {
      id: 5,
      name: "Kem Nhãn",
      img : "https://kemmiennhietdoi.com/timthumb.php?src=upload/product/kem-nhan1603442631_300x300.png&w=300&h=300&zc=2&q=85",
      sub : "Vị ngọt ngào tan nơi đầu lưỡi",
      price : 35000,
      inStock: 8,
      quantity: 0,
     },
     {
      id: 6,
      name: "Kem Đào",
      img : "https://kemmiennhietdoi.com/timthumb.php?src=upload/product/kem-dao1653715865_300x300.png&w=300&h=300&zc=2&q=85",
      sub : "Vị đào ngọt ngào ngập tràn nơi đầu lưỡi",
      price : 35000,
      inStock: 2,
      quantity: 0,
     },
     {
      id: 7,
      name: "Kem Phúc bồn tử ",
      img : "https://kemmiennhietdoi.com/timthumb.php?src=upload/product/kem-phuc-bon-tu1603442566_300x300.png&w=300&h=300&zc=2&q=85",
      sub : "Hương vị bồn tử chua ngọt mới lạ ",
      price : 40000,
      inStock: 1,
      quantity: 0,
     },
     {
      id: 8,
      name: "Kem Unicorn",
      img : "https://kemmiennhietdoi.com/timthumb.php?src=upload/product/kem-ngan-ha1603443028_300x300.png&w=300&h=300&zc=2&q=85",
      sub : "Chua ngọt thơm mát của sữa chua ",
      price : 40000,
      inStock: 6,
      quantity: 0,
     },
     {
      id: 9,
      name: "Kem Trân châu đường đen ",
      img : "https://kemmiennhietdoi.com/timthumb.php?src=upload/product/kem-tran-chau-duong-den1603443016_300x300.png&w=300&h=300&zc=2&q=85",
      sub : "Tín đồ của team trà sữa đường đen",
      price : 35000,
      inStock: 0,
      quantity: 0,
     },
     {
      id: 10,
      name: "Kem Chocomint",
      img : "https://kemmiennhietdoi.com/timthumb.php?src=upload/product/kem-bac-ha-chip1603442845_300x300.png&w=300&h=300&zc=2&q=85",
      sub : "Sự kết hợp đắng choco và mát lạnh bạc hà",
      price:40000,
      inStock: 0,
      quantity: 0,
     },
     {
      id: 11 ,
      name: "Kem Chanh dây",
      img : "https://kemmiennhietdoi.com/timthumb.php?src=upload/product/kem-chanh-day1603442599_300x300.png&w=300&h=300&zc=2&q=85",
      sub : " Vị chua chua thanh mát ",
      price : 40000,
      inStock: 0,
      quantity: 0,
     },
     {
      id: 12 ,
      name: "Kem Kiwi",
      img : "https://kemmiennhietdoi.com/timthumb.php?src=upload/product/kem-kiwi1603442616_300x300.png&w=300&h=300&zc=2&q=85",
      sub : "Sự chua ngọt của kiwi lạ miệng nhưng đầy hấp dẫn",
      price : 35000,
      inStock: 0,
      quantity: 0,
     },
     
  ];
}
