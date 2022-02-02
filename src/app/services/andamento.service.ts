import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MesiData } from '../classes/mesi-data';

@Injectable({
  providedIn: 'root'
})
export class AndamentoService {

  private Url = 'http://staccah.fattureincloud.it/testfrontend/data.json'

  constructor(private http: HttpClient) { }

  getAllMonths () {
    return this.http.get<MesiData>(this.Url)
  }
}
