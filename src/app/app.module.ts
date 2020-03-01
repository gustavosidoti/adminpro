
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';
import {SharedModule} from './shared/shared.module';

// Servicios
import { ServiceModule } from './services/service.module';

// Componentes principales
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';




/*import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';     ESTOS SE ENCUENTRAN EN shared.module.ts SEPARADOS
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
*/

/*import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';   ESTOS SE ENCUENTRAN EN pages.module.ts SEPARADOS
import { PagesComponent } from './pages/pages.component';
import { SettingsService } from './services/settings.service';

*/


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,


   // DashboardComponent,
    //ProgressComponent, ESTOS SE ENCUENTRAN EN pages.module.ts SEPARADOS
    //Graficas1Component,
    // PagesComponent,

   /* HeaderComponent,
    SidebarComponent,  ESTOS SE ENCUENTRAN EN shared.module.ts SEPARADOS
    BreadcrumsComponent,
    NopagefoundComponent,
   */
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
