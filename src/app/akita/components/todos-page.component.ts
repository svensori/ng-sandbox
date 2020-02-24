import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Todo } from '../models/todo.model';
import { TodosQuery } from '../query/todos.query';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  todos$: Observable<Todo[]>;
  todosComplete$: Observable<Todo[]>;
  todosIncomplete$: Observable<Todo[]>;

  todoForm = this.formBuilder.group({
    todoTitle: ['', [Validators.required]]
  });

  constructor(
    private todosService: TodosService,
    private todosQuery: TodosQuery,
    private formBuilder: FormBuilder
  ) {
    this.todos$ = this.todosQuery.todos$;
    this.todosComplete$ =  this.todosQuery.todosComplete$;
    this.todosIncomplete$ = this.todosQuery.todosIncomplete$;
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
