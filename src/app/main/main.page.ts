import { Component, OnInit } from "@angular/core";

import { StorageService } from "@app/core/services";
import { environment } from "@environment/environment";
@Component({
  selector: "app-main",
  templateUrl: "./main.page.html",
  styleUrls: ["./main.page.scss"],
})
export class MainPage implements OnInit {
  avatar: string;
  userName: string;
  userEmail: string;
  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.storageService.getItem("clientData").then((response: any) => {
      const data = JSON.parse(response);
      this.userName = data?.name;
      this.userEmail = data?.email;
      this.avatar = `${environment.apiURL}/user/${data?.uuid}/avatar`;
    });
  }
}
