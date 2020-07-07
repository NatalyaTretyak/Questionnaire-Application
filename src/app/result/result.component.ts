import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  sum: number;
  questions: number;

  constructor(private activateRoute: ActivatedRoute) {
    this.sum = activateRoute.snapshot.params['sum'];
    this.questions = activateRoute.snapshot.params['questions'];
  }

  ngOnInit(): void {}
}
