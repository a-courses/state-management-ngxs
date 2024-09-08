import {Component, inject, OnInit} from '@angular/core';
import {GetTeam} from "../store/actions/team.action";
import {Select, Store} from "@ngxs/store";
import {Team} from "../model/team.model";
import {Observable} from "rxjs";
import {TeamState} from "../store/states/team.state";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {

  teams: Observable<Team[]> = inject(Store).select(TeamState.getTeamList);

  constructor(private store: Store) {
    console.log("On constructor")
    this.store = store;

  }

  ngOnInit() {
    console.log("On ng Init")
    this.store.dispatch(new GetTeam());
    this.teams.subscribe(value => {
      console.log("Teams: ", value);
    });

  }
}
