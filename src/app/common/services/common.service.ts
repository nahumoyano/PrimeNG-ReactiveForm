import { Injectable } from '@angular/core';
import { ResponseI } from './responsei';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService extends ApiService {
  constructor(private httpCli: HttpClient) {
    super(httpCli);
  }

  getMenuModulo(moduloid: number, pusuario: number): Observable<ResponseI> {
    let headers = this._headers;
    let params = new HttpParams();
    params = params.append('moduloid', moduloid.toString());
    params = params.append('usuarioid', pusuario.toString());
    //params = params.append('2', pusuario.toString());
    const options = { params: params, headers: headers };

    return this._httpcli.post<ResponseI>(
      this.URL_SERVER + 'getmenubymodulo',
      params,
      options
    );
  }
}
