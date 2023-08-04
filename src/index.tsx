import { createRoot } from 'mreact';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
