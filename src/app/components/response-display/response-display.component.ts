import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-response-display',
  standalone: true,
  imports: [CommonModule],
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
