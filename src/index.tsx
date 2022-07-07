import { App } from './app';
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from 'styles/global';

const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);

root.render(<><GlobalStyles /><App /></>)


