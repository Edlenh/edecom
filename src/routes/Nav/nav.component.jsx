import { Fragment } from "react"
import { Outlet, Link} from "react-router-dom"
import { ReactComponent as HomeLogo} from '../../assets/home.svg'
import './navigation.styles.scss'
const Navi = () =>{
    return(
      <Fragment>
      <div className="navigation">
        <Link className='logo-container' to='/'>
        <HomeLogo className='logo'></HomeLogo>
        </Link>
        <div className='nav-links-container'>
          <Link className="nav-link" to='/shop'>
           SHOP
          </Link>
          <Link className="nav-link" to='/login'>
          LOGIN
          </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Navi