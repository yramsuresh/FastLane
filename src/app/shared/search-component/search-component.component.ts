import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss'],
})
export class SearchComponentComponent implements OnInit, OnChanges {
  searchValue: string;
  @Output() search = new EventEmitter();
  @Output() searchTextEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() resetData: EventEmitter<string> = new EventEmitter<string>();
  speechToText: string;
  constructor() {}
  keyup(event) {
    this.searchValue = event;
    this.search.emit(this.searchValue);
  }
  ngOnInit(): void {
    //console.log('Inside speech-recognition resetUserData()');

    if ('webkitSpeechRecognition' in window) {
      // speech recognition API supported
      console.log("supported")
    } else {
      console.log("not supported")
      
      // speech recognition API not supported
    }
  }
  ngOnChanges(){
    this.search.emit((<HTMLInputElement>document.getElementById('textToSearch')).value);
  }
  voiceSearch(): void {
    //console.log('Inside speech-recognition voiceSearch()');
    this.resetData.emit();
    (<HTMLInputElement>document.getElementById('textToSearch')).value = '';
    (<HTMLImageElement>document.getElementById('image')).src = 'assets/mic-animate.gif';
    
    const {webkitSpeechRecognition} = (window as any)
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-UK';
    
    recognition.onresult = (event) => {
      this.speechToText = event.results[0][0].transcript;
      (<HTMLInputElement>document.getElementById('textToSearch')).value = this.speechToText;
      if(this.speechToText){
        this.emitSearchValue();
      }
    }

    recognition.start();

    recognition.onspeechend = function() {
      recognition.stop();
    }

    recognition.onaudioend = function() {
      (<HTMLImageElement>document.getElementById('image')).src = 'assets/mic.gif';
    }
  }
  emitSearchValue() : any {
    //console.log('Inside speech-recognition emitSearchValue()');
    this.searchTextEmitter.emit(this.speechToText);
  }
}
