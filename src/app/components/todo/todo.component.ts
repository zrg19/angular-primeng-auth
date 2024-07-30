import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interfaces/todo';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CheckboxChangeEvent, CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CardModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [TodoService],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  @ViewChild('todoTask') todoTask: any;

  task = '';
  todos: Todo[] = [];

  todoService = inject(TodoService);

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.todoService.getTodoList().subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  updateTodo(e: CheckboxChangeEvent, todo: Todo) {
    this.todoService.updateTodo({ ...todo, completed: e.checked }).subscribe(
      response => console.log(response)
    )
  }

  deleteTodo(e: unknown, id: Todo['id']) {
    this.todoService.deleteTodo(id).subscribe(
      response => this.getList()
    )
  }

  addTodo() {
    this.todoService.addTodo({ task: this.task, completed: false }).subscribe(
      response => {
        this.todoTask.reset();
        this.getList();
      }
    )
  }
}
