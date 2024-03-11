import React from 'react';

function ThemeToggle({ toggle, mode }) {
  return (
    <button onClick={toggle}>
      {mode === 'dark' ? '🌚' : '🌝'}
    </button>
  );
}

export default ThemeToggle;
