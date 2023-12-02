import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModuleRoutingModule } from './first-module-routing.module';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ContainerComponent } from './container/container.component';
import { SecondComponentComponent } from './second-component/second-component.component';


@NgModule({
  declarations: [
    FirstComponentComponent,
    ContainerComponent,
    SecondComponentComponent
  ],
  imports: [
    CommonModule,
    FirstModuleRoutingModule
  ]
})
export class FirstModuleModule { }
