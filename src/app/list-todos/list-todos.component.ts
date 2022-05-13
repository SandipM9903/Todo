import { Component, OnInit } from '@angular/core';

//Creating a Todo Class
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {



  //Creating a list of todos using an array
  todos = [
    //We have created a number of Todos
    new Todo(1, 'Sandip', true, new Date()),
    new Todo(2, 'Puspa', true, new Date()),
    new Todo(3, 'Sushil', true, new Date()),
    new Todo(4, 'Snigdha', true, new Date())

    // { id: 1, description: 'Sandip' },
    // { id: 2, description: 'Sushil' },
    // { id: 3, description: 'Puspa' },
    // { id: 4, description: 'Snigdha' }
  ]

  //Creating a object in java script
  // todo = {
  //   id : 1,
  //   description : 'Learn To Code'
  // }

  constructor() { }

  ngOnInit() {
  }

}
