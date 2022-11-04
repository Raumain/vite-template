import { Link } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'
import { useTranslation } from 'react-i18next'

export default function NavBar() {
  const { t } = useTranslation()
  const { keycloak } = useKeycloak()
  console.log(keycloak)
  return (
    <>
      <div className="flex justify-around items-center py-5 bg-[#234] text-white">
        <h1 className="font-semibold font-2xl">{t('navbar.title')}</h1>
        <ul className="flex">
          <li className="mx-1">
            <Link to="/">{t('navbar.lien1')}</Link>
          </li>
          <li className="mx-1">
            {keycloak.authenticated ? (
              <button
                onClick={() => {
                  keycloak.logout()
                }}
              >
                Logout
              </button>
            ) : (
              <button onClick={() => [keycloak.login()]}>Login</button>
            )}
          </li>
          <li className="mx-1">
            {keycloak.authenticated ? (
              <Link to="/resource">{t('navbar.lien3')}</Link>
            ) : null}
          </li>
        </ul>
      </div>
    </>
  )
}
