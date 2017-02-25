import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {serviceIp} from "../shared/urls";

@Injectable()
export class ContractService {

  constructor(private http: Http) { }

  addContract(contract: any) {
    return this.http.post(serviceIp + 'dampers/' + contract['damperUuid'] + '/contracts', contract)
      .map((res: Response) => res.json());
  }
}
