import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
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