import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
  providers: [ApiService]
})
export class PlansComponent implements OnInit {
  plans = [];
  plan;

 // Instantiate Api Service
  constructor(
    private apiService: ApiService,
    private interService: InteractionService
  ) {
    this.getPlans();
  }

  getPlans() {
    this.apiService.getPlans().subscribe(
      data => { this.plans = data; },
      error => console.log(error)
    );
  }

  sendPlan(plan) {
    console.log(plan);
    this.interService.sendPlan(plan);
  }

  ngOnInit() {}
}
