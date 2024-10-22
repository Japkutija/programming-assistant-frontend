import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssistantService {
  private baseUrl = 'http://localhost:8080/api/assistant';

  constructor(private http: HttpClient) {}

  chatWithChatGPT(prompt: string): Observable<string> {
    return this.http.post(`${this.baseUrl}/chatgpt`, prompt, { responseType: 'text' });
  }

  chatWithGemini(prompt: string): Observable<string> {
    return this.http.post(`${this.baseUrl}/gemini`, prompt, { responseType: 'text' });
  }
}
