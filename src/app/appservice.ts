import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Data } from './data';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getQuestionnaireData() {
    return this.http
      .get<any>('assets/data.json')
      .toPromise()
      .then((res) => <Data>res)
      .then((data) => {
        return data;
      });
  }
}
