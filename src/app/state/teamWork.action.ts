import { Action } from "@ngrx/store";

export enum TeamWorkActionType {
  GET_ALL_PEOPLE = 'GET_ALL_PEOPLE',
  GET_ALL_PEOPLE_SUCCESS = 'GET_ALL_PEOPLE_SUCCESS',
  GET_ALL_PEOPLE_FAIL = 'GET_ALL_PEOPLE_FAIL',

  GET_PLANET_BYID = 'GET_PLANET_BYID',
  GET_PLANET_BYID_SUCCESS = 'GET_PLANET_BYID_SUCCESS',
  GET_PLANET_BYID_FAIL = 'GET_PLANET_BYID_FAIL',
}



export class GetAllPeoplesAction implements Action {
  readonly type = TeamWorkActionType.GET_ALL_PEOPLE;

  constructor(public payload: any) { }
}

export class GetAllPeoplesActionSuccess implements Action {
  readonly type = TeamWorkActionType.GET_ALL_PEOPLE_SUCCESS;

  constructor(public payload: any) { }

}
export class GetAllPeoplesActionFail implements Action {
  readonly type = TeamWorkActionType.GET_ALL_PEOPLE_FAIL;

  constructor(public payload: any) { }
}



export class GetPlanetAction implements Action {
  readonly type = TeamWorkActionType.GET_PLANET_BYID;

  constructor(public payload: any) { }
}

export class GetPlanetActionSuccess implements Action {
  readonly type = TeamWorkActionType.GET_PLANET_BYID_SUCCESS;

  constructor(public payload: any) { }

}
export class GetPlanetActionFail implements Action {
  readonly type = TeamWorkActionType.GET_PLANET_BYID_FAIL;

  constructor(public payload: any) { }
}
export type TeamWorkAction =
GetAllPeoplesAction | GetAllPeoplesActionSuccess | GetAllPeoplesActionFail |
GetPlanetAction | GetPlanetActionSuccess | GetPlanetActionFail ;
