// src/ThemeToggle.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './redux/themeSlice';
import { RootState } from './redux/store';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Toggle Theme: {isDarkMode ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeToggle;
