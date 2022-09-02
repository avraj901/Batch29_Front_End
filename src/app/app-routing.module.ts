import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatebooksComponent } from './components/createbooks/createbooks.component';
import { SearchbooksComponent } from './components/searchbooks/searchbooks.component';

const routes: Routes = [{path:'create', component:CreatebooksComponent},
{path:"search", component:SearchbooksComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
