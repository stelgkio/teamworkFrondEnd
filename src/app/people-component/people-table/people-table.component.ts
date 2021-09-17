import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DynamicComponentHelper } from 'src/app/helper/dynamic.component';
import { HomeWorld, PeopleData, PeopleList, PlanetData } from 'src/app/models/PeopleResponse';
import { GetAllPeoplesActionSuccess, TeamWorkActionType, GetAllPeoplesActionFail, GetPlanetActionSuccess, GetPlanetActionFail } from 'src/app/state/teamWork.action';

import * as TeamWork from '../../state/teamWork.reducer';
import * as TeamWorkAction from '../../state/teamWork.action';
import { WebApiService } from 'src/app/services/WebApiService';
import { DialogManagerService } from '../dialog-modal/dialog-manager.service';
@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent extends DynamicComponentHelper implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['name', 'mass', 'height', 'created', 'edited', 'planetname'];
  dataSource: MatTableDataSource<PeopleData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  peopleList: PeopleData[] = [];
  planetData: PlanetData;


  constructor(
    private action$: Actions,
    private store: Store<TeamWork.AppState>,
    private webApiService: WebApiService,
    private dialogManager: DialogManagerService) {

    super();
    this.initiazeSubscription();
    this.store.dispatch(new TeamWorkAction.GetAllPeoplesAction(null));
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
  }
  initiazeSubscription() {
    const GetAllPeopleSuccess: Subscription = this.action$.pipe(
      ofType<GetAllPeoplesActionSuccess>(
        TeamWorkActionType.GET_ALL_PEOPLE_SUCCESS
      )).subscribe(req => {
        this.handlerGetAllPeopleSuccess(req.payload);
      });

    const GetAllPeopleail: Subscription = this.action$.pipe(
      ofType<GetAllPeoplesActionFail>(
        TeamWorkActionType.GET_ALL_PEOPLE_FAIL
      )).subscribe(() => {
        this.handlerGetAllPeopleFail();
      });

    const GetPlanetSuccess: Subscription = this.action$.pipe(
      ofType<GetPlanetActionSuccess>(
        TeamWorkActionType.GET_PLANETS_BYID_SUCCESS
      )).subscribe(req => {
        this.handlerGetPlanetSuccess(req.payload);
      });

    const GetPlanetFail: Subscription = this.action$.pipe(
      ofType<GetPlanetActionFail>(
        TeamWorkActionType.GET_PLANETS_BYID_FAIL
      )).subscribe(() => {
        this.handlerGetPlanetFail();
      });

    this.AddActionSubscriptions(GetAllPeopleSuccess);
    this.AddActionSubscriptions(GetAllPeopleail);
    this.AddActionSubscriptions(GetPlanetSuccess);
    this.AddActionSubscriptions(GetPlanetFail);

  }


  handlerGetAllPeopleFail() {
    this.dialogManager.openBadRequestDialog('Method not implemented. handlerGetAllPeopleFail');
  }
  handlerGetPlanetSuccess(req: HomeWorld) {
    this.dialogManager.openConfirmDialog(req);
  }
  handlerGetPlanetFail() {
    this.dialogManager.openBadRequestDialog('Method not implemented. handlerGetPlanetFail');
  }
  handlerGetAllPeopleSuccess(req: PeopleList) {
    console.log(req.results)

    req.results.forEach(element => {
      const data: PeopleData = new PeopleData();
      data.mass = element.mass;
      data.name = element.name;
      data.planetUrl = element.homeworld;
      data.height = element.height;
      data.edited = element.edited;
      data.created = element.created;

      if (data.planetUrl == '' || data.planetUrl == null) {
        this.dialogManager.openBadRequestDialog("Invalid data planetUrl");
        return;
      }
      this.getPlanetName(data);


    });

  }

  findId(url: string): string {
    const myArr = url.split('/');
    return myArr[myArr.length - 2]
  }
  getPlanetName(data: PeopleData) {
    this.webApiService.getPlanetById(this.findId(data.planetUrl)).toPromise().then(
      (result: PlanetData) => {
        if (result) {
          data.planetname = result.name;
          this.peopleList.push(data);
          this.dataSource = new MatTableDataSource(this.peopleList)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error => {
        console.log(error);

        this.dialogManager.openBadRequestDialog(error);
        return;
      });

  }
  openmodal(row: PeopleData) {

    this.store.dispatch(new TeamWorkAction.GetPlanetAction(this.findId(row.planetUrl)));
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
