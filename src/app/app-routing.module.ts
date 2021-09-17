import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleTableComponent } from './people-component/people-table/people-table.component';


const routes: Routes = [ {
  path: '',  component: PeopleTableComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
