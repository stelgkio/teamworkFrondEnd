import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../helper/urlService';
import { BaseService } from './baseServices';


@Injectable()
export class WebApiService extends BaseService {

  constructor(private httpClient: HttpClient, private urlService: UrlService) {
    super();
  }

  getAllPeoples() {
    const url: string = this.urlService.urlFor(['api', 'people']);
    this.urlService.logger('getPeople', url,null);
    return this.httpClient.get(url);
  }

  getPlanetById(planetId: string) {
    const url: string = this.urlService.urlFor(['api', 'planets', planetId]);
    this.urlService.logger('getPlanetById', url, planetId);
    return this.httpClient.get(url);
  }
}
