import { HomeWorld } from './../models/PeopleResponse';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import * as teamWorkAction from './teamWork.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { WebApiService } from "../services/WebApiService";
import { PeopleList } from "../models/PeopleResponse";
@Injectable()
export class TeamWorkEffect {


  constructor(
    private action$: Actions,
    private webApiService: WebApiService) { }



 //#region  InitializeTaxiDriver
 @Effect()
 getAllPeople$: Observable<Action> = this.action$.pipe(
   ofType<teamWorkAction.GetAllPeoplesAction>(
    teamWorkAction.TeamWorkActionType.GET_ALL_PEOPLE
   ),
   map((action: teamWorkAction.GetAllPeoplesAction) => action.payload),
   mergeMap(() =>
     this.webApiService.getAllPeoples().pipe(
       map(
         (newoninit: PeopleList) =>
           ({ type: teamWorkAction.TeamWorkActionType.GET_ALL_PEOPLE_SUCCESS, payload: newoninit })
       ),
       catchError(err => of({ type: teamWorkAction.TeamWorkActionType.GET_ALL_PEOPLE_FAIL, payload: err }))
     )

   )
 );

 @Effect()
 getPlanetById$: Observable<Action> = this.action$.pipe(
   ofType<teamWorkAction.GetPlanetAction>(
    teamWorkAction.TeamWorkActionType.GET_PLANET_BYID
   ),
   map((action: teamWorkAction.GetPlanetAction) => action.payload),
   mergeMap((id:string) =>
     this.webApiService.getPlanetById(id).pipe(
       map(
         (newoninit: HomeWorld) =>
           ({ type: teamWorkAction.TeamWorkActionType.GET_PLANET_BYID_SUCCESS, payload: newoninit })
       ),
       catchError(err => of({ type: teamWorkAction.TeamWorkActionType.GET_PLANET_BYID_FAIL, payload: err }))
     )
   )
 );


}


