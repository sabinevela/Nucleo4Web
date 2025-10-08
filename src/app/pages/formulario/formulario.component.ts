import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  constructor(private usuarioServicio:UsuarioService) {}

  nombre: string='';
  email:string='';
  username:string='';
  password:string='';

  guardarUsuario(formulario:any){
   this.usuarioServicio.postUsuario(formulario.value).subscribe(() => {
  window.location.reload();
})

  }


}
