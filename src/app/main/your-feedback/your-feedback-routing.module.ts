import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourFeedbackPage } from './your-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: YourFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourFeedbackPageRoutingModule {}
