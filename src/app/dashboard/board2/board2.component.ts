import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board2',
  templateUrl: './board2.component.html',
  styleUrls: ['./board2.component.scss']
})
export class Board2Component implements OnInit {

  cards:Observable<any[]>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    /** Based on the screen size, switch from standard to one column per row */
  this.cards = this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large]).pipe(
    map(({ breakpoints }) => { 
      if(breakpoints[Breakpoints.Small]){
        return [
          { title: 'Card 1', cols: 2, rows: 1 },
          { title: 'Card 2', cols: 2, rows: 1 },
          { title: 'Card 3', cols: 2, rows: 1 },
          { title: 'Card 4', cols: 2, rows: 1 },
          { title: 'Card 5', cols: 4, rows: 2 },
          { title: 'Card 6', cols: 1, rows: 2 },
          { title: 'Card 7', cols: 3, rows: 2 },
          { title: 'Card 8', cols: 1, rows: 2 },
          { title: 'Card 9', cols: 3, rows: 2 },
        ];
      }     
     if(breakpoints[Breakpoints.Medium]){
        return [
          { title: 'Card 1', cols: 2, rows: 1 },
          { title: 'Card 2', cols: 2, rows: 1 },
          { title: 'Card 3', cols: 2, rows: 1 },
          { title: 'Card 4', cols: 2, rows: 1 },
          { title: 'Card 5', cols: 4, rows: 2 },
          { title: 'Card 6', cols: 1, rows: 2 },
          { title: 'Card 7', cols: 3, rows: 2 },
          { title: 'Card 8', cols: 1, rows: 2 },
          { title: 'Card 9', cols: 3, rows: 2 },
        ];
      }
     if(breakpoints[Breakpoints.Large]){
        return [
          { subtitleUp: 'Total Sales', count:1232345, trending:'trending_up', trendingColor:'green', subtitleDown:'annual', cols: 1, rows: 1 },
          { subtitleUp: 'Revenue', count:1232345, trending:'trending_up', trendingColor:'green', subtitleDown:'annual', cols: 1, rows: 1 },
          { subtitleUp: 'Downloads', count:1232345, trending:'trending_up', trendingColor:'green', subtitleDown:'annual',cols: 1, rows: 1 },
          { subtitleUp: 'Updloads', count:1232345, trending:'trending_up', trendingColor:'green', subtitleDown:'annual', cols: 1, rows: 1 },

          { title: 'Card 5', cols: 4, rows: 2 },
          { title: 'Card 6', cols: 1, rows: 2 },
          { title: 'Card 7', cols: 3, rows: 2 },
          { title: 'Card 8', cols: 1, rows: 2 },
          { title: 'Card 9', cols: 3, rows: 2 },
        ];
      }
    })
  );
  }

}
