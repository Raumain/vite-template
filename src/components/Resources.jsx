import { useKeycloak } from '@react-keycloak/web'

export default function Resources() {
  const { keycloak, initialized } = useKeycloak()
  if (keycloak.authenticated) {
    return (
      <div className="my-12 grid place-items-center">
        <p>
          This is a Keycloak-secured component of your application. You
          shouldn't be able to see this unless you've authenticated with
          Keycloak.
        </p>
        <div>
          <img src="https://random.imagecdn.app/500/250" />
        </div>
      </div>
    )
  } else {
    return (
      <>
        <div className="my-12 grid place-items-center">
          <p>You cannot acces this page : </p>
          <p>Unable to authenticate you</p>
        </div>
      </>
    )
  }
}
