import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Enviarmarca } from '../interface/enviarmarca.interface';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';


@Injectable()
export class EnviarbrandService {

  registromarcasURL = 'https://fudefafa-191420.firebaseio.com/.json';

  constructor( private http: Http ) { }

  nuevaMarca ( enviarmarca: Enviarmarca ) {
    const body = JSON.stringify( enviarmarca );
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

  return this.http.post( this.registromarcasURL, body, { headers } )
  .map( res => {
    console.log(res.json());
    return res.json();
    });
  }}
