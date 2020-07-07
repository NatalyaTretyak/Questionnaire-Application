import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  { path: '', component: DataComponent },
  { path: 'result/:sum/:questions', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
