import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TioService } from '../tioService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class AppComponent {
  code: string = '';
  selectedLanguage: string = 'javascript';
  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  output: string = '';

  languages = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Python', value: 'python3' },
    { label: 'Java', value: 'java' },
    { label: 'C++', value: 'cpp' },
    { label: 'C', value: 'c' }
  ];

  constructor(private tioService: TioService) {}

  onLanguageChange() {
    this.editorOptions = { ...this.editorOptions, language: this.selectedLanguage };
  }

  runCode() {
    this.tioService.runCode(this.selectedLanguage, this.code).then(output => {
      this.output = output;
    });
  }
}
