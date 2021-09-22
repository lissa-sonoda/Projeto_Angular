import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-angular';

  menuPrincipal=false;
  opcoesSalvar=true;
  opcoesExcluir=true;
  opcoesBuscar=true;
  editar=true;

  novo(){
    this.menuPrincipal=true;
    this.opcoesSalvar=false;
    this.opcoesExcluir=true;
    this.opcoesBuscar=true;
    this.editar=false;
  }

  alterar(){
    this.menuPrincipal=true;
    this.opcoesSalvar=false;
    this.opcoesExcluir=true;
    this.opcoesBuscar=true;
    this.editar=false;
  }

  excluir(){
    this.menuPrincipal=true;
    this.opcoesSalvar=true;
    this.opcoesExcluir=false;
    this.opcoesBuscar=true;
    this.editar=true;
  }

  procurar(){
    this.menuPrincipal=true;
    this.opcoesSalvar=true;
    this.opcoesExcluir=true;
    this.opcoesBuscar=false;
    this.editar=true;
  }

  gravar(){
    this.menuPrincipal=false;
    this.opcoesSalvar=true;
    this.opcoesExcluir=true;
    this.opcoesBuscar=true;
    this.editar=true;
  }

  cancelar(){
    this.menuPrincipal=false;
    this.opcoesSalvar=true;
    this.opcoesExcluir=true;
    this.opcoesBuscar=true;
    this.editar=true;
  }
}
