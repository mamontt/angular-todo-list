import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
class Worker{
    name: string;
    surname: string;
    age: number;
     
    constructor(name: string, surname: string, age: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
  }

@Component({
    selector: 'enter-data',
    template:    `<input [(ngModel)]="name" placeholder="name">
                  <input [(ngModel)]="surname" placeholder="surname">
                  <input [(ngModel)]="age" placeholder="age">
                  <button (click)="sendToParent()">Добавить</button>
                  `,
    // styleUrls: ['./app.component.css']
  })
  export class EnterComponent {
    name: string;
    surname: string;//
    age: number;
    @Output() public outToParent = new EventEmitter();
    constructor() { }
    ngOnInit() {
    }
    sendToParent() {
    let worker: Worker = new Worker(this.name, this.surname, this.age);
    this.outToParent.emit(worker);
    }
  
  }
  