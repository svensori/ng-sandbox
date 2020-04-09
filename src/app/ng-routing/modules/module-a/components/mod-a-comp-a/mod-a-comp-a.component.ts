import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformLocation } from '@angular/common';

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
