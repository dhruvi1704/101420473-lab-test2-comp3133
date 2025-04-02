import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  year: string = '';

  @Output() filterByYear = new EventEmitter<string>();

  search() {
    this.filterByYear.emit(this.year);
  }
}
