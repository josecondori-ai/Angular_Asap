import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-probando',
  standalone: true,
  
  templateUrl: './probando.component.html',
  styleUrl: './probando.component.css',
  imports:[CommonModule]
})
export class ProbandoComponent {
nombresHeroes:string[]=['Spiderman','Ironman','hulk','thor','flash']
heroeEliminado?:string;

nombre:string='Superman'
edad:number=25

get capitalizedNombre():string{
  return this.nombre.toUpperCase()
}

obtenerDescripcion():string{
  return `${this.nombre} - ${this.edad}`
}

cambiarHeroe():void{
this.nombre='Spiderman'
}

cambiarEdad():void{
 this.edad=19
}

removerHeroe():void{
  this.heroeEliminado = this.nombresHeroes.pop()
  
}

}
