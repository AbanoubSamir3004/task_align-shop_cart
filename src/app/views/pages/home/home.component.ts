import { Component, OnInit } from '@angular/core';
import { environment as env } from '@env/environment.prod';
import { MainService } from '@modules/main.service';
import { ErrorInterface } from 'app/core/interceptor/error.interface';
import { Products } from 'app/core/models/home';
import { HomeService } from 'app/core/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Products[] = [];
  showDetails: boolean = false;
  productsInCart: Products[] = [];

  constructor(
    public mainService: MainService,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.mainService.titlePage = 'Home';
    // this.messageService.add(this.mainService.toastErrorHandler(this.test))
    this.getAllProducts();
  }
  getAllProducts() {
    this.homeService.GetAllProducts().subscribe(
      (res) => {
        this.products = res;
        console.log(res);
      },
      (error: ErrorInterface) => {
        this.mainService.handleError(error);
        error.errors.forEach((err: any) => {
          this.mainService.showErrorMSG(err);
        });
      },
      () => {
        console.log('getAllProducts');
        for (let i = 0; i < this.products.length; i++) {
           this.products[i].quantity = 0
          
        }
      }
    );
  }
  veiwCart() {
    this.showDetails = true;
  }

  AddToCart(product: Products) {
    product.quantity = 1;
    this.productsInCart.push(product);
  }
  clearCart() {
    this.productsInCart = [];
  }
  removeItem(index: number, id: number) {

    // const index = this.productsInCart.findIndex((e) => e.id == id);
    this.productsInCart.splice(index, 1);
const indexProduct =  this.products.findIndex((e) => e.id == id);
this.products[indexProduct].quantity = 0
  }
  plusOne(product: Products) {
    if (product.quantity) {
      product.quantity = product.quantity + 1;
    }
  }
  minusOne(product: Products) {
    if (product.quantity) {
      product.quantity = product.quantity - 1;
    }
    if (product.quantity == 0) {
      const indexProduct =  this.productsInCart.findIndex((e) => e.id == product.id);
      this.productsInCart.splice( indexProduct , 1)
    }
  }





}
