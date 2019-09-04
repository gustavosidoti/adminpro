import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  // tslint:disable-next-line: deprecation
  constructor(public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any) {
    this.aplicarcheck( link );

    this._ajustes.aplicarTema( tema);

  }

  aplicarcheck( link: any) {

    let selectores: any = document.getElementsByClassName('selector');

    for ( let ref of selectores ) {
      ref.classList.remove('working'); // este for reccorre el arreglo de selectores y borra el que esté seleccionado
    }

    link.classList.add('working');
  }

  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector');

    let tema = this._ajustes.ajustes.tema; // traemos el tema del servicio y lo asignamos a la variable tema

    for ( let ref of selectores ) {
      if( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working'); // recorremos el vector de temas y preguntamos cual es que tiene el tema seleccionado y le asignamos la clase working
        break;
      }
    }
  }

}
