import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Team} from "../../model/team.model";
import {GetTeam} from "../actions/team.action";

export interface TeamStateModel {
  teams: Team[];
}

@State<TeamStateModel>({
  name: 'team',
  defaults: {
    teams: []
  }
})
@Injectable({
  providedIn: 'root'
})
export class TeamState {

  @Selector()
  static getTeamList(state: TeamStateModel) {
    console.log("inside getTeams selector")
    return state.teams;
  }

  @Action(GetTeam)
  getTeam({getState, setState}: StateContext<TeamStateModel>) {
    console.log("inside getTeams action")
    const state = getState();
    setState({
      ...state,
      teams: [
        {
          id: '1',
          name: 'Team - Edison',
          description: 'Team - Edison',
          members: ['Mem1 630', 'Mem1 630'],
          projects: ['eDesign SB', 'eDesign Resi']
        },
        {
          id: '2',
          name: 'Team - VEGA',
          description: 'Team - VEGA',
          members: ['Mem1 VEGA', 'Mem2 VEGA'],
          projects: ['VEGA-1', 'VEGA-2']
        }
      ]
    });
  }

}
