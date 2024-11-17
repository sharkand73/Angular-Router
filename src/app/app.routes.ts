import { Routes } from '@angular/router';
import { HomeComponent as Home}  from './home/home.component';
import { FirstComponent as First } from './first/first.component';
import { SecondComponent as Second } from './second/second.component';


export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: Home },
    { path: "first", component: First },
    { path: "second", component: Second }
];
