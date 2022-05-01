import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  test = false;
  @Input('title') title!: string;
  @Input('content') content!: string;
  @Input('date') date!: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
