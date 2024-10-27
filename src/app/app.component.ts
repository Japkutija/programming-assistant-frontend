import { MatGridListModule } from '@angular/material/grid-list';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PromptInputComponent } from './components/prompt-input/prompt-input.component';
import { HttpClientModule } from '@angular/common/http';
import { ResponseDisplayComponent } from './components/response-display/response-display.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PromptInputComponent,
    ResponseDisplayComponent,
    HttpClientModule,
    MatToolbar,
    MatCardModule,
    MatGridListModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'programming-assistant-frontend';

  response: string = '';

  handleResponse(response: string) {
    this.response = response;
  }
}
