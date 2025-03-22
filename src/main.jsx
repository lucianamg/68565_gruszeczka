import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/68565_gruszeczka">
    <App />
    </BrowserRouter>
  </StrictMode>,
)
/* esto es lo mismo que hacer 
const DOMElement = document.getElementById('root')
const VDOMElement = createRoot(DOMElement)
VDOMElement.render(
<StrictMode>
<App />
</StrictMode>
)
*/ 