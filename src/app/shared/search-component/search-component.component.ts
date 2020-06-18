import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss'],
})
export class SearchComponentComponent implements OnInit {
  searchValue: string;
  @Input() title: any;
  @Output() search = new EventEmitter();
  constructor() {}
  keyup(event) {
    this.searchValue = event;
    this.search.emit(this.searchValue);
  }
  ngOnInit(): void {}
}
