import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor() {}

  async getItem(item: string): Promise<any> {
    return await localStorage.getItem(item);
  }
  async setItem(name: string, prop: string) {
    return await localStorage.setItem(name, prop);
  }
  async getStats(obj: any) {
    return await localStorage.getItem(obj);
  }
  async removeItem(name: string) {
    return await localStorage.removeItem(name);
  }
}
