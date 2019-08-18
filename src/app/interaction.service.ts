import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Plans } from './plans';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  // Creating  a Subject
  private planSource = new Subject<Plans>();

  // expose Subject as Observable
  // convension to declare a variable as Observable is append '$' sign
  pSource$ = this.planSource.asObservable();

  constructor() { }

  // Method to accept plan details from plans page and pushes to recharge page
  sendPlan(plan: Plans) {
    console.log('service: ' + plan.name);
    this.planSource.next(plan);
  }
}
