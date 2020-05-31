import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit, OnChanges {
  @Input() compData: [];
  @Input() title: any;
  @Input() type: string;
  @Input() searchValue: any;
  @Input() imageUrl: any;
  loading = true;
  components: any;
  comp: any;
  rlink: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loading = false;
    this.imageUrl = this.imageUrl;
    this.components = this.compData;
    this.title = this.title;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.searchValue &&
      changes.searchValue.currentValue &&
      changes.searchValue.previousValue !== changes.searchValue.currentValue
    ) {
      this.comp = this.searchValue;
    }
  }
  getLink(pathtitle) {
    this.rlink = pathtitle;
    this.router.navigate(['/', this.rlink]);
  }
  navigate(compType, tileId) {
    this.router.navigate(['/details'], {
      queryParams: { tile: tileId, compType: compType },
    });
  }
}
