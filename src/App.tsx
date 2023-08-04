import { Mreact } from 'mreact';
import { HelloMreact } from './HelloMreact/HelloMreact';

export class App extends Mreact.Component {

  render(): Mreact.MreactNode {
    return <HelloMreact />
  }
}
