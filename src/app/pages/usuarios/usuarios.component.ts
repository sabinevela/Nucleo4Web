import { Component } from '@angular/core';
import { FormularioComponent } from "../formulario/formulario.component";

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

}
