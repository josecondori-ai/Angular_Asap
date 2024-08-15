import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})
export class HolaMundoComponent {
title:string="hola como estas"  
contador:number=10

incrementar(valor:number):void{
  this.contador+=valor
  // this.contador++
}
decrementar(valor:number):void{
  this.contador-=valor
}

resetContador():void{
  this.contador=0
}


}

//poo=>programacion orientado a objeto


