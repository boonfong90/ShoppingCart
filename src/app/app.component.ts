import { Component } from '@angular/core';

// interface cartList{
//   name: string
//   price: number
//   selectedquantity : number
//   image : string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingCart';
  logoSelected = false;
  cartSelected = false;
  productSelected = false;
  cartitemSelected = false;
  selectedListIndex = null;
  removeListIndex = null;
  selectedquantity = 0;
  totalAmount = 0;

  productLists = [
    {
      name: "Dell Inspiron Laptop",
      price: 1000,
      selectedquantitys : 0,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNRtygiKVw0v41Oj5ZD6rDkZqQ2jViOFWJUa-YDslcoZuEwJ47Q"
    },
    {
      name: "Dell XPS Laptop",
      price: 2000,
      selectedquantitys : 0,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNRtygiKVw0v41Oj5ZD6rDkZqQ2jViOFWJUa-YDslcoZuEwJ47Q"
    },
    {
      name: "Dell Alienware Laptop",
      price: 3000,
      selectedquantitys : 0,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNRtygiKVw0v41Oj5ZD6rDkZqQ2jViOFWJUa-YDslcoZuEwJ47Q"
    }
  ]

  cartLists = [];

  logoClick(boolean){
    if(this.logoSelected){
      this.logoSelected = !this.logoSelected
    }else{
      this.logoSelected = true
    }
  }

  cartClick(boolean){
    if(this.cartSelected){
      this.cartSelected = !this.cartSelected
    }else{
      this.cartSelected = true
    }
  }

  // productClick(boolean){
  //   if(this.productSelected){
  //     this.productSelected = !this.productSelected
  //   }else{
  //     this.productSelected = true
  //   }
  // }

  // cartproductClick(boolean){
  //   if(this.cartitemSelected){
  //     this.cartitemSelected = !this.cartitemSelected
  //   }else{
  //     this.cartitemSelected = true
  //   }
  // }

  getValue(index) {
    this.selectedListIndex = index;
    this.productSelected = true
  }

  removeValue(index) {
    this.removeListIndex = index;
    this.cartitemSelected = true
  }

  checkout(){
    this.productLists[this.selectedListIndex].selectedquantitys += this.selectedquantity
    this.cartLists.push(this.productLists[this.selectedListIndex])
    this.productLists.splice(this.selectedListIndex,1)
    this.selectedquantity = 0;
    this.totalAmount = 0;
    this.productSelected = false;

    if(this.cartLists.length > 0){
      for(let cartlist of this.cartLists){
        this.totalAmount += cartlist.price * cartlist.selectedquantitys 
      }
    }else{

    }
  }

  plus() {
    this.selectedquantity += 1;
  }

  minus(){
    if(this.selectedquantity !== 0){
      this.selectedquantity -= 1;
    }else{

    }
  }

  clearCart(){
    this.productLists.push(this.cartLists[this.removeListIndex]);
    this.totalAmount -= this.cartLists[this.removeListIndex].price * this.cartLists[this.removeListIndex].selectedquantitys;
    this.productLists[this.productLists.length-1].selectedquantitys = 0;
    this.cartLists.splice(this.removeListIndex,1)
    this.cartitemSelected = false
    // if(this.cartLists.length >0){
    //   for(let cartlist of this.cartLists){
    //     cartlist.selectedquantitys = 0
    //     this.productLists.push(cartlist)
    //   }
    // }
    // this.cartLists =[]
  }
}
