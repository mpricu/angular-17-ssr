import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [

  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'first',
        component: FirstComponentComponent
      },
      {
        path: 'second',
        component: SecondComponentComponent
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModuleRoutingModule { }
