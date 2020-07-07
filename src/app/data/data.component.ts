import { Component, OnInit } from '@angular/core';
import { AppService } from '../appservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  isButtonDisabled: boolean;
  selectedAnswer: string;
  questionnaireData: any;
  questionNumber: number;
  questions: number;
  sum: number;
  condition: boolean;

  constructor(private appService: AppService, private router: Router) {
    this.isButtonDisabled = true;
    this.questionNumber = 0;
    this.sum = 0;
    this.condition = true;
  }

  ngOnInit() {
    this.appService.getQuestionnaireData().then((data) => {
      this.questionnaireData = Object.values(data);
      this.questions = Object.keys(this.questionnaireData).length;
    });
  }

  onAnswerSelected() {
    console.log(this.selectedAnswer);
    this.updateIsButtonDisabled();
  }

  handleClick() {
    if (
      this.selectedAnswer ===
      this.questionnaireData[this.questionNumber].correct_answers[0]
    ) {
      this.sum++;
    }
    if (this.questionNumber === this.questions - 2) {
      this.condition = !this.condition;
    }
    console.log(this.condition);
    this.questionNumber++;
    this.selectedAnswer = null;
    this.updateIsButtonDisabled();
    console.log(this.questionNumber);
    console.log(this.sum);
  }

  getResult() {
    this.router.navigate(['/result/sum/questions']);
  }

  updateIsButtonDisabled() {
    this.isButtonDisabled = this.selectedAnswer === null;
  }
}
