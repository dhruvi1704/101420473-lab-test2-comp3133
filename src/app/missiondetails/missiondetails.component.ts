import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: '../missiondetails/missiondetails.component.html',
  styleUrls: ['../missiondetails/missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission!: Mission;

  constructor(private route: ActivatedRoute,private router: Router, private api: SpacexapiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.api.getMissionById(Number(id)).subscribe(data => this.mission = data);
    }
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
