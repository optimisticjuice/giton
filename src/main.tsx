import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Action.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
