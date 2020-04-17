import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mod-a-comp-a',
  templateUrl: './mod-a-comp-a.component.html',
  styleUrls: ['./mod-a-comp-a.component.scss']
})
export class ModACompAComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() { }

  navigate() {
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}
