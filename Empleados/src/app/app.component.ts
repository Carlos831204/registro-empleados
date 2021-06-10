import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  empleados:Empleado[]=[
    new Empleado("Carlos", "Pedraza", "Gerente", 2500000),
    new Empleado("Pedro", "Arias", "Subgerente", 2000000),
    new Empleado("Ana", "Suarez", "Contador", 1800000),
    new Empleado("Oscar", "Gutierrez", "Auditor", 1900000),

  ];

  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
