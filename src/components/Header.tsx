import logo from '../assets/Group.svg'
import search from '../assets/Vector.png'
import notify from '../assets/notify.png'
import avatar from '../assets/avatar.png'
import dropdown from '../assets/dropdown.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>

        <img src={logo} alt="" id="img1" />

        <div className='search'>
            <input type='text' placeholder='search for anything' />
            <img src={search} alt="" id="search" />
        </div>

        <div className='extras'>

            <Link to="/" className='docs'>docs</Link>

            <img src={notify} alt="" className="" />

            <img src={avatar} alt="" className="" />

            <p className='p1'>Adedeji</p>

            <img src={dropdown} alt="" className="dropdown" />

        </div>

    </header>
  )
}

export {Header}