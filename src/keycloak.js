import Keycloak from 'keycloak-js'

const keycloak= new Keycloak({
  realm: 'myRealmDemo',
  url: 'http://localhost:8081/auth',
  clientId: 'react-client'
})

export default keycloak
