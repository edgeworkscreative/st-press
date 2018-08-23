# st-press
Adds the `onPress` event to your Stencil app. Press is recognized when the pointer is down for 251ms without any movement.

Add the following to your `global-script.tsx` file:
```ts
import '@edgeworkscreative/st-press';
```

`example-component.tsx`:
```ts
@Component({
  tag:      'example-component',
  styleUrl: 'example-component.scss',
  shadow:   true
})
export class ExampleComponent {

  onPress(e) {
    console.log('item was pressed', e);
  }
  
  render() {
    return [
      <ion-list lines={'full'}>
        <ion-item onPress={(e) => this.onPress(e)}>One</ion-item>
        <ion-item onPress={(e) => this.onPress(e)}>Two</ion-item>
        <ion-item onPress={(e) => this.onPress(e)}>Three</ion-item>
      </ion-list>
    ];
  }
}
```

