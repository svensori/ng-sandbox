import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-can-deactivate-demo',
  templateUrl: './can-deactivate-demo.component.html',
  styleUrls: ['./can-deactivate-demo.component.scss']
})
export class CanDeactivateDemoComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() { }
}
