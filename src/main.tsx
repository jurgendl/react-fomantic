import {type ReactNode, StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, HashRouter} from "react-router-dom";

// import before fomantic-js
import $ from 'jquery';

// expose jQuery globally BEFORE loading Fomantic
(window as any).$ = $;
(window as any).jQuery = $;

// load css normally
//import 'fomantic-ui/dist/semantic.min.css';
//after building theme
import '../semantic/dist/semantic.min.css';

// IMPORTANT: load Fomantic dynamically (not static import)
//await import('fomantic-ui/dist/semantic.min.js');
//after building theme
await import('../semantic/dist/semantic.min.js');

import './index.scss'
import App from './app/App'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
)
