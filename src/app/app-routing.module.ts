import { NgModule } from "@angular/core";
import {
  PreloadAllModules,
  RouterModule,
  Routes,
  ExtraOptions,
} from "@angular/router";
import { GuestGuard, AppGuard } from "@app/core/guards";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./auth/login/login.module").then((m) => m.LoginModule),
    canActivate: [GuestGuard],
  },
  {
    path: "main",
    loadChildren: () =>
      import("./main/main.module").then((m) => m.MainPageModule),
    canActivate: [AppGuard],
  },
];

const config: ExtraOptions = {
  useHash: true,
  preloadingStrategy: PreloadAllModules,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
