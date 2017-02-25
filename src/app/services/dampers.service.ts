import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {serviceIp} from "../shared/urls";

@Injectable()
export class DampersService {

  public dampers: any[];

  constructor(private http: Http) {
  }

  addDamper(damper: any): Observable<any> {
    return this.http.post(serviceIp + 'dampers', damper)
      .map(this.extractData);
  }

  getDampers(): Observable<any[]> {
    return this.http
      .get(serviceIp + 'dampers')
      .map(this.extractData);
  }

  private extractData(res: Response): any[] {
    this.dampers = res.json();
    return this.dampers;
  }
}
