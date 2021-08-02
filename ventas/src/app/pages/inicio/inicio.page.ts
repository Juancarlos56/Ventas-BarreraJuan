import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  productos: any;
  //constructor() { }
  constructor(private router: Router, 
    private productosService: ProductosService, 
    //private callNumber: CallNumber
    ) { }


  ngOnInit() {
    this.productos = this.productosService.getProductos();
  }

  verProducto(producto: any){
    //()
    let params: NavigationExtras ={
      queryParams: {
        producto: producto
      }
    }
    this.router.navigate(["/mostrar-producto"], params)
  }

}
