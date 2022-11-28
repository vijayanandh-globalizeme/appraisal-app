import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Router, NavigationExtras } from "@angular/router";

import { UserService } from "@app/core/services";
import { Users, UserDetails } from "@app/core/interfaces";
import { environment } from "@environment/environment";
@Component({
  selector: "app-users",
  templateUrl: "./users.page.html",
  styleUrls: ["./users.page.scss"],
})
export class UsersPage implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  navigationExtra: NavigationExtras;
  menus: any = [{ name: "Users", class: "active" }];
  users: UserDetails;
  userData: any;
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.getUserList();
  }
  getUserList() {
    this.subscriptions.add(
      this.userService.getUsers().subscribe((resolve: Users) => {
        this.users = this.userData = resolve.data;
      })
    );
  }
  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.users = this.userData.filter(
      (d) =>
        d.name.toLowerCase().indexOf(query) > -1 ||
        d.email.toLowerCase().indexOf(query) > -1
    );
  }
  userAvatar(id) {
    return `${environment.apiURL}/user/${id}/avatar`;
  }
  navigateToUser(user) {
    this.navigationExtra = {
      state: user,
    };
    this.router.navigateByUrl("/main/users/" + user.name, this.navigationExtra);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
