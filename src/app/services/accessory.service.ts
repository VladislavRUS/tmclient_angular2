import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {serviceIp} from "../shared/urls";

@Injectable()
export class AccessoryService {

  constructor(private http: Http) { }

  addAccessory(accessory: any) {
    return this.http.post(serviceIp + 'dampers/' + accessory['damperUuid'] + '/accessories', accessory)
      .map((res: Response) => res.json());
  }
}
