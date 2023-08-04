import Mreact = require('mreact');
import className from './HelloMreact.less';

export class HelloMreact extends Mreact.Component {
  render(): Mreact.ReactNode {
    return <h3 className={className['mreact-description']}>This is rendered by Mreact!</h3>
  }
}
