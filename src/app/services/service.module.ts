
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';





import {
  SettingsService,
  SidebarService,
  ShareService,
  UsuarioService,
  LoginGuardGuard
} from './service.index';




@NgModule({

  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
  SettingsService,
  SidebarService,
  ShareService,
  UsuarioService,
  LoginGuardGuard
  ],
  declarations: [],
})
export class ServiceModule { }
