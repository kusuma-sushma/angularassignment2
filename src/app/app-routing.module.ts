import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructuralComponent } from './structural/structural.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';


const routes: Routes = [ 
  {path: '',redirectTo: '/structural', pathMatch: 'full'},
  {path:'structural', component: StructuralComponent},
  {path:'template', component: TemplateComponent},
  {path:'reactive', component: ReactiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
