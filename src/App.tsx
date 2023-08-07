import * as React from 'mreact'; // Alias for JSX transpiler.
import * as Mreact from 'mreact';
import HelloMreact from './HelloMreact/HelloMreact';

export default class App extends Mreact.Component {
  render(): Mreact.MreactNode {
    return <HelloMreact />
  }
}
