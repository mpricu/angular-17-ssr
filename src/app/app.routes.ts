import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondComponentComponent } from './first-module/second-component/second-component.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'first2',
        component: SecondComponentComponent
    },
    {
        path: 'second2',
        component: SecondComponentComponent
    },
    {
        path: 'pages',
        loadChildren: () => import('./first-module/first-module.module').then(m => m.FirstModuleModule)
    },
];
