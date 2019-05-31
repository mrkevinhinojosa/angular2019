import { Component, OnInit } from '@angular/core';


//import{MODULE} from FILELOCATION 
import{ TodoInterface } from '../interfaces/todo-interface';
import{ Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  newTodo: TodoInterface = new Todo(); //creating variable of class todo


//We created this object, booleans should start with isAction
  todos: TodoInterface[] = [
    { title: 'Clean the Kitchen damnit', isCompleted: false, isDeleted: false},
    { title: 'Clean the gutters damnit', isCompleted: false, isDeleted: false},
    { title: 'Mow the lawn damnit', isCompleted: false, isDeleted: false},
    { title: 'Take out the garbage damnit', isCompleted: false, isDeleted: false},
  ];
  constructor() { }

//use void becuase we are not returning anytihing, we are just flipping boolean value
  toggleCompleted(todo: TodoInterface): void {todo.isCompleted = !todo.isCompleted;}
  toggleDeleted(todo: TodoInterface): void {todo.isDeleted = !todo.isDeleted;}


  //this is a method we created to push a new item to our array[]
  addTodo(): void {
    if(this.newTodo.title.trim() !== ''){   //.trim removes empty spaces
    this.todos.push(this.newTodo);
    this.newTodo = new Todo();
    isHero(character: CharacterInterface): boolean {return character.type === "Hero";}
  
    renderCharacters() {
      this.type = this.route.snapshot.queryParamMap.get("type");
      if (this.type) {
        this.characters = CHARACTERS.filter(character => character.type === this.type);
      }else{
        this.type = false;
    }
  }


  //
  emptyTodoTrash(): void{
    this.todos = this.todos.filter(todo => !todo.isDeleted);
  //let newArr = [];
  //this.todos.forEach(todo => {
  //    if (!todo.isDeleted) {
  //        newArr.push(todo);
  //  }
  // });


 // let newArr = this.todos.map(todo => {
 //   return todo.isDeleted;
 // })
}


  ngOnInit() {
  }

}
