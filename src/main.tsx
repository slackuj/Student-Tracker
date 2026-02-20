import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './reset.css';
import {BrowserRouter} from "react-router";
import {ThemeProvider} from "./context/ThemeContext.tsx";
import {StudentContextProvider} from "./context/StudentContextProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider>
          <StudentContextProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
          </StudentContextProvider>
      </ThemeProvider>
  </StrictMode>,
)
