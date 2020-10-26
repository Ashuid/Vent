import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  questions;
  constructor(questionsService: QuestionsService) {
    this.questions = questionsService.getQuestions();
  }

  ngOnInit(): void {
  }

}
