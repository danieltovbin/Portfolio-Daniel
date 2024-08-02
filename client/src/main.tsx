import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from './app/store';
import ResizeListener from './components/ResizeListener/ResizeListener.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ResizeListener />
    <App />
    </Provider>
  </React.StrictMode>,
)
