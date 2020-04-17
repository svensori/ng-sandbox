import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoResolverService {

  constructor() { }

  fetchUserData() {
    return {
      name: 'Steven',
      age: 19,
      hometown: 'Manila, Philippines'
    };
  }
}
