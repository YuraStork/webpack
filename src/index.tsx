import { App } from './app';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);

root.render(<App />)


