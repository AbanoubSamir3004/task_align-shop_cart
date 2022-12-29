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
  imgPath: string = env.domainUrl + 'img/';
  showDetails:boolean = false;
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
      }
    );
  }
veiwCart(){
  this.showDetails= true
}

  AddToCart(product: Products) {
// for (let i = 0; i < this.productsInCart.length; i++) {
//   if (this.productsInCart[i].id == product.id) {

//   }
  
// }



    this.productsInCart.push(product);
    
  }
}
