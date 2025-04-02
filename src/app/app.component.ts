import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '101420473-lab-test2-comp3133';
}
