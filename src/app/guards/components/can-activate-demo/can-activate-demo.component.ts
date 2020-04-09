import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-can-activate-demo',
  templateUrl: './can-activate-demo.component.html',
  styleUrls: ['./can-activate-demo.component.scss']
})
export class CanActivateDemoComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  routeBack() {
    this.router.navigate(['..'], {relativeTo: this.activatedRoute});
  }
}
