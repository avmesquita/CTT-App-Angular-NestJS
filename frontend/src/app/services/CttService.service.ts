import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageService } from './MessageService.service';
import { IApartado } from 'src/app/interfaces/apartado.interface';
import { ICodigoPostal } from 'src/app/interfaces/codigo-portal.interface';
import { IConcelho } from 'src/app/interfaces/concelho.interface';
import { IDistrito } from 'src/app/interfaces/distrito.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CttService {

  CttResults: [];
  apiUrl = '';

constructor(
  private http: HttpClient,
  private msgService: MessageService)
  {
    if (!environment.production) {
      this.apiUrl = environment.apiUrl;
    }
  }

  buscarDistrito(filter: string): any {
    try
    {
      const endpoint = this.apiUrl + '/api/distrito/find-text/' + filter;
      return this.http.get<IDistrito[]>(endpoint);
    } catch (e) {
      this.msgService.add(e);
    }
  }

  buscarConcelho(filter: string): any {
    try
    {
      const endpoint = this.apiUrl + '/api/concelho/find-text/' + filter;
      return this.http.get<IConcelho[]>(endpoint);
    } catch (e) {
      this.msgService.add(e);
    }
  }

  buscarCodigoPostal(filter: string): any {
    try
    {
      const endpoint = this.apiUrl + '/api/codigo-postal/cp/' + filter;
      return this.http.get<ICodigoPostal[]>(endpoint);
    } catch (e) {
      this.msgService.add(e);
    }
  }

  buscarApartado(filter: string): any {
    try
    {
      const endpoint = this.apiUrl + '/api/apartado/find-text/' + filter;
      return this.http.get<IApartado[]>(endpoint);
    } catch (e) {
      this.msgService.add(e);
    }
  }

  buscarMorada(filter: string): any {
    try
    {
      const endpoint = this.apiUrl + '/api/codigopostal/cp/' + filter;
      return this.http.get<ICodigoPostal[]>(endpoint);
    } catch (e) {
      this.msgService.add(e);
    }
  }

}
