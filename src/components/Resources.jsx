export default function Resources() {
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
  // if (keycloak) {
  //   if (keycloak.authenticated)
  //   else return <div className="my-12">Unable to authenticate!</div>
  // }

  // return (
  //   <>
  //     <div className="my-12">Initializing Keycloak...</div>
  //   </>
  // )
}
