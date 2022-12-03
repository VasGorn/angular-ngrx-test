import {Injectable} from "@angular/core";

@Injectable()
export class PersistenceService {
  constructor() {}

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error("Error saving to localStorage", e);
    }
  }

  get(key: string): any {
    try {
      const json = localStorage.getItem(key);
      return json !== null ? JSON.parse(json) : null;
    } catch (e) {
      console.error("Error getting data from localStorage", e);
      return null;
    }
  }
}
