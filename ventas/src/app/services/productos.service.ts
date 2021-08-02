import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Productos } from '../domain/Productos';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  constructor(public afs : AngularFirestore) { }

  saveProducto(producto: Productos){
    const refVehiculo = this.afs.collection("Productos");
    if(producto.pid == null){
      producto.pid = this.afs.createId();
      producto.activo = true;
      producto.carrito = false;
    }
    refVehiculo.doc(producto.pid).set(Object.assign({}, producto))
  }

  agregarCarrito(producto: Productos){
    const refVehiculo = this.afs.collection("Seleccionados");
    if(producto.pid == null){
      producto.pid = this.afs.createId();
      producto.activo = true;
      producto.carrito = true;
    }
    refVehiculo.doc(producto.pid).set(Object.assign({}, producto))
  }

  getProductos():Observable<any[]> {
    return this.afs.collection("Productos", 
                              ref => ref.where("activo", "==", true)).valueChanges();
  }

  getProductosSeleccionados():Observable<any[]>{
    return this.afs.collection("Seleccionados", 
                              ref => ref.where("carrito", "==", true)).valueChanges();
  }

  eliminarCarrito(){
    this.afs.collection("Seleccionados").doc("0oUtmqvjxTxd6vXz1bMl").delete();
  }


}
