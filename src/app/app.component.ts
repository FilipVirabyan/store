import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectNumberOfCartItems} from "@store/selectors";
import {IAppState} from "@core/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numberOfCartItems$: Observable<number>;
  constructor(private store: Store<IAppState>) {
    this.numberOfCartItems$ = this.store.select(selectNumberOfCartItems);
  }
}
