
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';


export class DynamicComponentHelper implements OnDestroy {

  private actionSubscription: Subscription[] = [];
  protected Id: string;
  protected email: string;
  protected displayName: string;
  constructor() {

  }

  ngOnDestroy(): void {
    this.clearActionSubscriptions();
  }


  protected AddActionSubscriptions(...subscription: Subscription[]) {

    if (!subscription.length) { return; }
    subscription.forEach(sub => this.actionSubscription.push(sub))
  }
  private clearActionSubscriptions() {
    try {
      this.actionSubscription.forEach(sub => {
        sub.unsubscribe();
      });
    } catch (error) {

    }
  }


}
