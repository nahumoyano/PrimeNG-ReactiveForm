import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URL_SERVER: string = environment.apiUrl;

  _httpcli: HttpClient;
  public _headers: HttpHeaders;

  public USE_ID_SUCURSAL = 'USE_ID_SUCURSAL';
  public USE_ID_DEPOSITO = 'USE_ID_DEPOSITO';
  public USE_ID_USUARIO = 'USE_ID_USUARIO';
  public USE_USER_NAME = 'USE_USER_NAME';
  public USE_ID_VENDEDOR = 'USE_ID_VENDEDOR';
  public USE_RANGO_MAXIMO = 6;

  constructor(private http: HttpClient) {
    this._httpcli = http;

    this._headers = new HttpHeaders();
  }
}
