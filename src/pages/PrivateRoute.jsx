import { useKeycloak } from '@react-keycloak/web'
import Error403Page from '../components/403'
import React from 'react'

export default function PrivateRoute({ children }) {
  const { keycloak } = useKeycloak()
  return keycloak.authenticated ? children : <Error403Page />
}
