import { tap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  _list: any[] = [];
  list: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(public http: HttpClient) {
    this.loadWidget('widget-text');
  }

  loadWidget(name: string) {
    this.http.get('./json/widgets/' + name + '.default.json').pipe().subscribe(
      res => {
        this._list.push(res);
        this.list.next(this._list);
      }
    );
  }
}
