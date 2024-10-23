import { Component } from '@angular/core';
import { AssistantService } from '../../services/assistant.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prompt-input',
  standalone: true,
  templateUrl: './prompt-input.component.html',
  styleUrl: './prompt-input.component.css',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [AssistantService],
})
export class PromptInputComponent {
  prompt: string = '';
  selectedModel: string = 'chatgpt'; // Default selection
  response: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private assistantService: AssistantService) {}

  submitPrompt() {
    if (!this.prompt.trim()) {
      this.errorMessage = 'Prompt cannot be empty.';
      return;
    }
    this.isLoading = true;
    this.errorMessage = '';
    this.response = '';

    if (this.selectedModel === 'chatgpt') {
      this.assistantService.chatWithChatGPT(this.prompt).subscribe({
        next: (res) => {
          this.response = res;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error:', err);
          this.errorMessage = 'An error occurred while fetching the response.';
          this.isLoading = false;
        },
      });
    } else {
      this.assistantService.chatWithGemini(this.prompt).subscribe({
        next: (res) => {
          this.response = res;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error:', err);
          this.errorMessage = 'An error occurred while fetching the response.';
          this.isLoading = false;
        },
      });
    }
  }
}
