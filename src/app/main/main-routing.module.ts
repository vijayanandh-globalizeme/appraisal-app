import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainPage } from "./main.page";

const routes: Routes = [
  {
    path: "",
    component: MainPage,
    children: [
      {
        path: "",
        redirectTo: "your-feedback",
        pathMatch: "full",
      },
      {
        path: "your-feedback",
        loadChildren: () =>
          import("./your-feedback/your-feedback.module").then(
            (m) => m.YourFeedbackPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
