import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObservable()
    .subscribe(
      numero => console.log ('Subs ', numero),   // Estos son los 3 callback de los observadores 1 - el next
      error => console.log('Error en el obs', error ), // el 2 el error
      () => console.log ('El observador terminó! ') // el 3 cuando termina

    );

  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('la página se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any>{
    return new Observable(( observer: Subscriber<any>) =>{

      let contador = 0;

      const intervalo = setInterval( () => {

        contador ++;

        const salida = {
          valor: contador
        };

          observer.next( salida );




      }, 1000 );

    }).pipe(
      map( resp => resp.valor),
      filter( (valor, index) => {
          if( (valor % 2) === 1 ) {
              // impar
               return true;
          } else {
              // par
               return false;
         }

      })
    );


  }

}
