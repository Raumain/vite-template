import React from 'react'
import { createRoot } from 'react-dom/client'
import keycloak from './keycloak'
import { ReactKeycloakProvider } from '@react-keycloak/web'

import App from './App'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={{
      url: 'http://localhost:8081/auth/',
      realm: 'myRealmDemo',
      clientId: 'react-client',
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReactKeycloakProvider>
)
