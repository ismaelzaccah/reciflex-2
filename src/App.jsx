import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import * as React from 'react';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home'

const App = () => {
  return (
    <CssBaseline>
      <Home/>
    </CssBaseline>

  );
}

export default App;