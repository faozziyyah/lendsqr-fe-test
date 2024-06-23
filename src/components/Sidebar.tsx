import briefcase from '../assets/briefcase.png'
import arrow from '../assets/down.png'
import home from '../assets/home.png'
import {business, items, settings} from './Sideitems'

const Sidebar = () => {
  return (
    <section className="sidebar">

      <div className="" id='nav'>
        <img src={briefcase} alt="" id="" />
        <p>Switch Organization</p>
        <img src={arrow} alt="" id="" />
      </div>

      <div className="nav">
        <img src={home} alt="" id="" />
        <p>Dashboard</p>
      </div>

      <p className='heading'>CUSTOMERS</p>

      {items.map((item) => (
        <div className="nav" key={item.title}>
          <img src={item.img} alt="" id="" />
          <p>{item.title}</p>
        </div>
      ))}

      <p className='heading'>BUSINESSES</p>

      {business.map((item) => (
        <div className="nav" key={item.title}>
          <img src={item.img} alt="" id="" />
          <p>{item.title}</p>
        </div>
      ))}

      <p className='heading'>SETTINGS</p>

      {settings.map((item) => (
        <div className="nav" key={item.title}>
          <img src={item.img} alt="" id="" />
          <p>{item.title}</p>
        </div>
      ))}

    </section>
  )
}

export {Sidebar}