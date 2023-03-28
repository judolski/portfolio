import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { CarrierComponent } from './carrier/carrier.component'; 
import { ProjectComponent } from './project/project.component'

const routes: Routes = [
  {path: 'overview', component:   OverviewComponent},
  {path: 'qualifications', component: QualificationsComponent},
  {path: 'carrier', component: CarrierComponent},
  {path: 'project', component: ProjectComponent},
  {path: '', redirectTo: '/overview', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
