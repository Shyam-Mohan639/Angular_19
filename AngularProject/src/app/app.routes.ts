import { Routes } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    {
        path:'',
        component:DemoComponent,
        pathMatch:'full'
    },
    {
        path:'demo',
        component:DemoComponent
    },
    {
        path:'user',
        component:UserComponent
    }
    
];
