import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mod-a',
  templateUrl: './module-a.component.html',
  styleUrls: ['./module-a.component.scss']
})
export class ModuleAComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  routeBack() {
    this.router.navigate(['routing']);
  }
}
