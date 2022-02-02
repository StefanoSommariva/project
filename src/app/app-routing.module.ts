import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMesiComponent } from './lista-mesi/lista-mesi.component';

const routes: Routes = [
 { path:'', component: ListaMesiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
