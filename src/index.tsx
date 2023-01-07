import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import 'normalize.css'
import '@/assets/css/index.less'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Suspense fallback="">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
)
