import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StageOneComponent} from "./stage-one/stage-one.component";

const routes: Routes = [
  {path: 'stageOne', component: StageOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
