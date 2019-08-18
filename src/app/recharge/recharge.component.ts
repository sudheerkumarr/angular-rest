import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Plans } from '../plans';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  plan: Plans;

  constructor(private interService: InteractionService) { }

  ngOnInit() {
    this.interService.pSource$.subscribe(
      plan => { (this.plan = plan); },
      error => console.log(error)
    );
  }
}
