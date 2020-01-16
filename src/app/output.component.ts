import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'print-data',
    template: `<table class="table table-striped">
                <thead>
                  <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Возраст</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let worker of workersFromParent">
                    <td>{{worker.name}}</td>
                    <td>{{worker.surname}}</td>
                    <td>{{worker.age}}</td>
                  </tr>
                </tbody>
              </table>`
  })
  export class PrintComponent {
    @Input() public workersFromParent: Worker;
  
  }
  