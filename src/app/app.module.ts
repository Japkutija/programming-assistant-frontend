import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { PromptInputComponent } from './components/prompt-input/prompt-input.component'; // Adjust the path as necessary

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
  ],
})
export class AppModule { }

// Replace NgModule bootstrap with bootstrapApplication
bootstrapApplication(AppComponent);
