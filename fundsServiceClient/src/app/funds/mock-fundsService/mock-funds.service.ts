import { FUNDS } from './mock-funds';
import { MockBackend } from '@angular/http/testing';
import { Injectable } from '@angular/core';
import { MockConnection } from '@angular/http/testing';
import {ResponseOptions, Response} from '@angular/http';

@Injectable()
export class MockFundsService {

  constructor(
    private backend: MockBackend
  ) { }

start(): void {
        this.backend.connections.subscribe((c: MockConnection) => {
            const URL = 'http://localhost:8080/v1/fundsservice/totalfunds';
           console.log(JSON.stringify(FUNDS));
           console.log('I m hereeeeeeeee');
            if (c.request.url === URL && c.request.method === 0) {
                console.log(JSON.stringify(FUNDS));
                c.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(FUNDS)
                })));
            }
        });
    }
}
