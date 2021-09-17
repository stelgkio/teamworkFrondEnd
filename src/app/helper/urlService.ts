import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UrlService {
  mainBaseUrl: string = 'https://swapi.dev'; /// i can import from enviroment file the value for this urls
  stagingBaseUrl: string = 'https://swapi.dev';


  constructor() { }

  urlFor(path: string[]): string {
    let url = this.getBaseUrl();

    url += ('/' + path.join('/'));

    return url;
  }

  queryStringToJSON(query: string, delimiter: string = '&'): object {
    const parts = {};

    decodeURIComponent(query.slice(1)).split(delimiter).forEach((part) => {
      const pair = part.split('=');
      parts[pair[0]] = decodeURIComponent(pair[1] || '');
    });

    return parts;
  }

  private getBaseUrl(): string {
    if (location.href.indexOf(this.mainBaseUrl) > -1) {
      return this.mainBaseUrl;
    }
    return this.stagingBaseUrl;
  }


  logger(message: string, url: string, object: any) {

    console.log('%cRequest--- ' + message + ':' + 'Url :' + url , 'background: #222; color: #559ada',object);
  }


}
