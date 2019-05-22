import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {  
  
  @ViewChild('snav') snav: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit() {

  }
}
