import { createRoot } from 'react-dom/client';
import React from 'react';
const App = () => {
  return (
    <div>
      <h1>repeteper</h1>
    </div>
  );
};

const root = createRoot(document.querySelector('#app'));
root.render(<App />);
