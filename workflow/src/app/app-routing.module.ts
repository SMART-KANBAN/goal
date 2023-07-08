import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalManagementComponent } from './goal-management/goal-management.component';

const routes: Routes = [
  {
    path: '*',
    component: GoalManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
