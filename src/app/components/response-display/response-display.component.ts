import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-response-display',
  standalone: true,
  imports: [CommonModule, MatCardModule,
  ],
  templateUrl: './response-display.component.html',
  styleUrl: './response-display.component.css'
})
export class ResponseDisplayComponent {

  @Input() response: string = '';

  constructor() {}

  handleResponse(response: string) {
    this.response = response;
  }

}
