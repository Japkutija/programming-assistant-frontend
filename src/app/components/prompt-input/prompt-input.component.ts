import { Component, EventEmitter, Output } from '@angular/core';
import { AssistantService } from '../../services/assistant.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-prompt-input',
  standalone: true,
  templateUrl: './prompt-input.component.html',
  styleUrls: ['./prompt-input.component.css'],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    CommonModule
  ],
})
export class PromptInputComponent {
  prompt: string = '';
  selectedModel: string = 'chatgpt';
  isLoading: boolean = false;
  errorMessage: string = '';

  @Output() responseEvent = new EventEmitter<string>();

  constructor(private assistantService: AssistantService) {}

  submitPrompt() {
    if (!this.prompt.trim()) {
      this.errorMessage = 'Prompt cannot be empty.';
      return;
    }
    this.isLoading = true;
    this.errorMessage = '';

    const requestObservable = this.selectedModel === 'chatgpt'
      ? this.assistantService.chatWithChatGPT(this.prompt)
      : this.assistantService.chatWithGemini(this.prompt);

    requestObservable.subscribe({
      next: (res) => {
        this.isLoading = false;
        this.responseEvent.emit(res);
      },
      error: (err) => {
        console.error('Error:', err);
        this.errorMessage = 'An error occurred while fetching the response.';
        this.isLoading = false;
      },
    });
  }
}
