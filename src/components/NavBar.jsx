import {Link} from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'

export default function NavBar() {
  const { keycloak, initialized } = useKeycloak()
  return (
    <>
    <div className='flex justify-around items-center py-5 bg-[#234] text-white'>
      <h1 className='font-semibold font-2xl'>KeyCloak App</h1>
      <ul className='flex'>

        <li className='mx-1'>
          <Link to='/'>Home</Link>
        </li>
        <li className='mx-1'>
          {keycloak.authenticated ? <div onClick={() => {keycloak.logout()}}>Logout</div> : <div onClick={() => [keycloak.login()]}>Login</div>}
        </li>
        <li className='mx-1'>
          {keycloak.authenticated ? <Link to ='/resource'>Resource</Link> : null}
        </li>
      </ul>
    </div>
    </>
  )
}