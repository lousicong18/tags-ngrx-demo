import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { RESET } from '../../../store/tag.actions';
import { PetTag } from '../../../store/tag.model';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  tagState$: Observable<PetTag>;
  private tagStateSubscription: Subscription;
  petTag: PetTag;

  constructor(private store: Store<PetTag>) {
    this.tagState$ = store.select('petTag');
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.petTag = state;
    });
  }

  ngOnDestroy() {
    this.tagStateSubscription.unsubscribe();
  }

  newTag() {
    this.store.dispatch({
      type: RESET
    });
  }
}
