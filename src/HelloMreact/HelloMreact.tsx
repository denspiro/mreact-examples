import * as React from 'mreact'; // Alias for JSX transpiler.
import * as Mreact from 'mreact';
import className from './HelloMreact.less';

export default class HelloMreact extends Mreact.Component {
  render(): Mreact.MreactNode {
    return <h3 className={className['mreact-description']}>This is rendered by Mreact!</h3>
  }
}
