import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experienciaURL = 'https://backendportfoliosanroman.herokuapp.com/explab/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.experienciaURL+ 'lista');
  }

  public detail(id: number): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.experienciaURL+ `detail/${id}`);
  }

  public save(explab: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.experienciaURL + 'create', explab);
  }

  public update(id: number, expLab: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.experienciaURL + `update/${id}`, expLab);
  }

  public delete(id : number): Observable<any>{
    return this.httpClient.delete<any>(this.experienciaURL+ `delete/${id}`);
  }

}