
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import * as teamWorkAction from './teamWork.action';
import * as fromRoot from './app-state'

export interface State extends EntityState<any> {
  selectedId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}


export interface AppState extends fromRoot.AppState {
  payload: any;
}

export const TeamWorkAdapter: EntityAdapter<any> = createEntityAdapter<any>();

export const defaultState: State = {
  ids: [],
  entities: {},
  selectedId: null,
  loading: false,
  loaded: false,
  error: ''
};

export const initialState = TeamWorkAdapter.getInitialState(defaultState);

export function teamWorkReducer(state = initialState, action: teamWorkAction.TeamWorkAction): any {

  switch (action.type) {
    case teamWorkAction.TeamWorkActionType.GET_ALL_PEOPLE_SUCCESS: {
      return TeamWorkAdapter.addOne(action.payload, state);
    }
    case teamWorkAction.TeamWorkActionType.GET_ALL_PEOPLE_FAIL: {

      return {
        ...state,
        error: action.payload
      };
    }
    case teamWorkAction.TeamWorkActionType.GET_PLANETS_BYID_SUCCESS: {
      return TeamWorkAdapter.addOne(action.payload, state);
    }
    case teamWorkAction.TeamWorkActionType.GET_PLANETS_BYID_FAIL: {

      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
