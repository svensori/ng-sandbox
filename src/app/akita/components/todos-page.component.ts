import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todo.model';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { TodosQuery } from '../query/todos.query';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css']
})
export class TodosPageComponent implements OnInit {

  todos$: Observable<Todo[]>;
  todoForm = this.formBuilder.group({
    todoTitle: ['', [Validators.required]]
  });

  constructor(
    private todosService: TodosService,
    private todosQuery: TodosQuery,
    private formBuilder: FormBuilder
  ) {
    this.todos$ = this.todosQuery.todos$;
  }

  ngOnInit() { }

  add(todoTitle: string) {
    this.todosService.add(todoTitle);
  }

  update(id: number) {
    this.todosService.update(id);
  }

  reset() {
    this.todosService.reset();
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.add(this.todoForm.get('todoTitle').value);
      this.todoForm.reset();
    }
  }
}
