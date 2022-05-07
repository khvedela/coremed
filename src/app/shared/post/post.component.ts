import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  test = true;
  @Input('title') title!: string;
  @Input('content') content!: string;
  @Input('imgUrl') imgUrl!: string;
  @Input('owner') owner!: string;
  @Input('date') date!: Date;
  @Input('like') like!: string[];
  @Input('comments') comments!: Object

  constructor() { }

  ngOnInit(): void {
  }

  likes() {
    let names: string = '';
    for (let i = 0; i < this.like.length; i++) names += `${this.like[i]}\n`
    return names
  }

  convertFromTimeStamp(ts: object) {
    return new Date(Object.values(ts)[0])
  }
}
