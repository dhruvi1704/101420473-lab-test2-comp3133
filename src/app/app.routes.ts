import { Routes } from '@angular/router';
import { MissionlistComponent } from '../app/missionlist/missionlist.component';
export const routes: Routes = [
  {
    path: '',
    component: MissionlistComponent,
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('../app/missiondetails/missiondetails.component').then(m => m.MissiondetailsComponent),
  }
];
