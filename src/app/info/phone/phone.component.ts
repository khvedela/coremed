import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// import * as THREE from 'three';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas!: ElementRef<HTMLCanvasElement>;

  public constructor() {

  }

  public ngOnInit(): void {

  }
}
