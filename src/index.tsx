/* @refresh reload */
import { render } from 'solid-js/web';
import './assets/index.css'; // Tailwind CSS
import './sass/style.scss';

import App from './App';

const root = document.getElementById('root');

render(() => <App />, root!);
