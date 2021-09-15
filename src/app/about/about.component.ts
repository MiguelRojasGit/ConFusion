import { Component, OnInit } from '@angular/core';
import {Leader} from '../menu/Shared/leader'
import {LEADERS} from '../menu/Shared/leaders'
import { LeaderService } from '../Services/leader.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[] = [];

  constructor(private leaderService :LeaderService) { }

  ngOnInit(): void {
    this.leaders = this.leaderService.getLeaders()
  }

}
