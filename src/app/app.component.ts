import { Component } from '@angular/core';
import { AppService } from './appservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isButtonDisabled: boolean;
  selectedAnswer: string;
  questionnaireData: any;
  questionNumber: number;
  questions: number;

  constructor(private appService: AppService) {
    this.isButtonDisabled = true;
    this.questionNumber = 1;
  }

  ngOnInit() {
    this.appService.getQuestionnaireData().then((data) => {
      this.questionnaireData = data;
      this.questions = Object.keys(this.questionnaireData).length;
    });
  }

  data = {
    question_1: {
      question:
        'Як називається найбільш популярна снайперська гвинтівка у грі CS:GO?',
      answers: ['Fnatic', 'Na`Vi', 'Team Secret', 'OG'],
      correct_answers: ['OG'],
    },
  };

  handleClick() {
    console.log('hihi');
    console.log(this.questionnaireData.question_1.question);
    console.log(this.selectedAnswer);
  }

  onAnswerSelected() {
    console.log(this.selectedAnswer);
    this.updateIsButtonDisabled();
  }

  updateIsButtonDisabled() {
    this.isButtonDisabled = this.selectedAnswer === '';
  }
}
