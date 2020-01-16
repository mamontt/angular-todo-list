import { Component } from '@angular/core';
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
  selector: 'store-data',
  template: ` 
              <enter-data (outToParent)='receiveFromChild($event)'></enter-data>  
              <print-data [workersFromParent]= workers></print-data>
            `
})
export class StoreComponent {
  public workers : Worker[] =  [
    {name: "Andrew", surname: "Mamont", age :20},
    {name: "Andrew", surname: "Smith", age: 25}
  ]
  ;
  receiveFromChild(worker) : void {
    this.workers.push(new Worker(worker.name, worker.surname, worker.age));
  }
}

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'firstProj';
// }
