
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService,
  SidebarService,
  ShareService
} from './service.index';



@NgModule({

  imports: [
    CommonModule
  ],
  providers: [
  SettingsService,
  SidebarService,
  ShareService
  ],
  declarations: [],
})
export class ServiceModule { }
