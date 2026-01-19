
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
// Удаляем StrictMode, так как он вызывает двойную регистрацию слушателей BackButton в Telegram SDK
root.render(<App />);
