import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = environment + '/explab/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.URL+ 'lista');
  }

  public detail(id: number): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.URL+ `detail/${id}`);
  }

  public save(explab: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', explab);
  }

  public update(id: number, expLab: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, expLab);
  }

  public delete(id : number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+ `delete/${id}`);
  }

}
