import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  tileId: any;
  compType: any;
  activeComponent= false;
  activeSolution= false;
  activeBestPractice=false;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.tileId = params.tile;
      this.compType = params.compType;
      console.log(this.compType)
      if(this.compType==='solutions'){
        this.activeSolution = true
        this.activeBestPractice = false
        this.activeComponent = false
      }
      if(this.compType==='bestPractices'){
        this.activeBestPractice = true
        this.activeSolution = false
        this.activeComponent = false
      }
      if(this.compType==='components')
      {
        this.activeBestPractice = false
        this.activeSolution = false
        this.activeComponent = true
      }
      if(this.compType==undefined){
        this.activeBestPractice = false
        this.activeSolution = false
        this.activeComponent = false
      }
    });
  }
}
