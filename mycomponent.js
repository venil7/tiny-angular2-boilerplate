import { Component, View, NgFor } from 'angular2/angular2';

class MyComponent {

  get fruits() {
    return ['apple', 'orange', 'pear'];
  }

  onClick(fruit) {
    console.log(fruit);
  }

  // this is used because
  // @Component or @View annotations don't work
  // with current babel version
  static get annotations() {
    return [
      new Component({
        selector: 'my-app'
      }),
      new View({
        directives: [NgFor],
        template: `
          <strong>List of fruit:</strong>
          <ul>
            <li *ng-for="#fruit of fruits" (click)="onClick(fruit)">{{fruit}}</li>
          </ul>
        `
      })
    ];
  }
}

export { MyComponent };