import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch:'full'
    },
    {
        path: 'style', component: StyleGuideComponent
    },
    { 
        path: 'home', component: HomeComponent 
    }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
