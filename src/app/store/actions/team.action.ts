import {Team} from "../../model/team.model";


export class AddTeam {
  static readonly type = '[Team] Add';

  constructor(public team: Team) {
  }
}

export class GetTeam {
  static readonly type = '[Team] Get';
}

export class DeleteTeam {
  static readonly type = '[Team] Delete';

  constructor(public id: string) {
  }
}
