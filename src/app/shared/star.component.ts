import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ai-star',
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  totalWidth: number = 100;

  ngOnChanges(): void {
    this.starWidth = this.rating * this.totalWidth / 5;
  }

  onClick() {
    this.ratingClicked.emit('Clicked rating: ' + this.rating);
  }
}