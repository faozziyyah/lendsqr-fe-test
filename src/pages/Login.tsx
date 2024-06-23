import logo from '../assets/Group.svg'
import image from '../assets/image.svg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className="login">

        <div className="loginimages">
            <img src={logo} alt="" className="img1" />
            <img src={image} alt="" className="img2" />
        </div>

        <form className="">

            <h1 className=''>welcome!</h1>

            <p className=''>Enter details to login</p>

            <div className='input'>
                <input type='email' placeholder='Email' />
            </div>

            <div className='input'>
                <input type='password' placeholder='Password' />
                <span className=''>show</span>
            </div>

            <Link to="/" className='forgot'>forgot password?</Link>

            <Link to='/dashboard' className='btn'>log in</Link>

        </form>

    </main>
  )
}

export {Login}