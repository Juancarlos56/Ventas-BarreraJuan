import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/domain/Productos';
import { ProductosService } from 'src/app/services/productos.service';
@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.page.html',
  styleUrls: ['./mostrar-producto.page.scss'],
})
export class MostrarProductoPage implements OnInit {

  producto: Productos = new Productos();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productoService: ProductosService) { 
      
      
        route.queryParams.subscribe(params =>{
        console.log(params)
        //Para parametros constantes
        //this.contacto = params.contacto;
        
        //Para parametros de tipo objeto
        this.producto = new Productos();
        
        if(this.router.getCurrentNavigation().extras.queryParams){
          this.producto = this.router.getCurrentNavigation().extras.queryParams.producto;
          console.log(this.producto);
        }
      })
  }

  ngOnInit() {
  }

  agregarAlCarrito(producto: Productos){
    producto.carrito =  true
    this.productoService.agregarCarrito(this.producto);
    this.router.navigate(["/inicio"])
  }
}
