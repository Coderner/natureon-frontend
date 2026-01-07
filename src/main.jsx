import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CategoriesProvider } from './context/CategoriesContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { AdminProvider } from './context/AdminContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
          <CategoriesProvider>
            <CartProvider>
              <AdminProvider>
                <App />
              </AdminProvider>
            </CartProvider>
          </CategoriesProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
