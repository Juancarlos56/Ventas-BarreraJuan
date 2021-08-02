import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Productos } from 'src/app/domain/Productos';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  
  productosCarrito: any;
  //constructor() { }
  constructor(private router: Router, 
              private productosService: ProductosService, 
    //private callNumber: CallNumber
    ) { }

  
  ngOnInit() {
    this.productosCarrito = this.productosService.getProductosSeleccionados();
  }
  
  
  vaciarCarrito(){
    this.productosCarrito = this.productosService.eliminarCarrito();
    this.router.navigate(["/inicio"])
    
  }


  
}
