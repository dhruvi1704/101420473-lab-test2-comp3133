import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { RouterModule, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  filteredMissions: Mission[] = [];

  launchYear: string = '';
  launchSuccess: boolean | null = null;
  landSuccess: boolean | null = null;

  constructor(private api: SpacexapiService, private router: Router) {}

  ngOnInit(): void {
    this.api.getAllMissions().subscribe(data => {
      this.missions = data;
      this.filteredMissions = []; 
    });
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

  filterMissions() {
    const allFilled =
      this.launchYear.trim() !== '' &&
      this.launchSuccess !== null &&
      this.landSuccess !== null;

    if (!allFilled) {
      this.filteredMissions = [];
      return;
    }

    this.filteredMissions = this.missions.filter(mission => {
      const matchYear = mission.date_utc.startsWith(this.launchYear);
      const matchLaunch = mission.launch_success === this.launchSuccess;
      const matchLanding =
        mission.rocket?.first_stage?.cores?.[0]?.land_success === this.landSuccess;

      return matchYear && matchLaunch && matchLanding;
    });
  }

  filterLaunch(value: boolean) {
    this.launchSuccess = value;
  }

  filterLanding(value: boolean) {
    this.landSuccess = value;
  }

  resetFilters() {
    this.launchYear = '';
    this.launchSuccess = null;
    this.landSuccess = null;

    // Manually clear selected radio buttons
    const radios = document.querySelectorAll('input[type=radio]');
    radios.forEach(radio => (radio as HTMLInputElement).checked = false);


    // Show all missions after reset
    this.filteredMissions = [...this.missions];
  }
}
