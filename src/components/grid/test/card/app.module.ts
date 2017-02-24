import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from '../../../../../ionic-angular';


@Component({
  templateUrl: 'main.html'
})
export class Page1 {
  items: any = [];

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.items.push(i);
    }
  }
}


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class E2EApp {
  rootPage = Page1;
}

@NgModule({
  declarations: [
    E2EApp,
    Page1
  ],
  imports: [
    IonicModule.forRoot(E2EApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    E2EApp,
    Page1
  ]
})
export class AppModule {}
