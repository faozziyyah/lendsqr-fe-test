import React, { useContext } from 'react';
import { usercard } from "./Card"
import dots from '../assets/dots.png'
import filter from '../assets/filter.png'
import next from '../assets/next.png'
import previous from '../assets/previous.png'
import down from '../assets/down.png'
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

const Main: React.FC = () => {

  const context = useContext(UserContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { users } = context;

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'status-active';
      case 'inactive':
        return 'status-inactive';
      case 'pending':
        return 'status-pending';
      case 'blacklisted':
        return 'status-blacklisted';
      default:
        return '';
    }
  };

  return (
    <main className="dashmain">
        
      <h1>Users</h1>

      <section className="usercard">

        {usercard.map((card) => (
          <div className="card" key={card.title}>
            <img src={card.img} alt="" id="" />
            <p>{card.title}</p>
            <h2>{card.total}</h2>
          </div>
        ))}
      
      </section>

      <table className="table">

        <thead>
          <tr>
            <th className='th'> organization <img src={filter} alt="" /> </th>
            <th className='th'> username <img src={filter} alt="" /> </th>
            <th id='th2'> email <img src={filter} alt="" /> </th>
            <th id='th3'> phone number <img src={filter} alt="" /> </th>
            <th id='th4'> date joined <img src={filter} alt="" /> </th>
            <th> status <img src={filter} alt="" /> </th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (
            <tr key={user.id} className='tr'>
              <td><Link to={`/user/${user.id}`} className='tdlink'>lendsqr</Link></td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.profile.phone}</td>
              <td>{formatDate(user.createdAt)}</td>
              <td className="status">
                <span className={getStatusClass(user.status)}>{user.status}</span>
                <img src={dots} alt="" />
              </td>
            </tr>
          ))}

        </tbody>

      </table>

      <section className='pagination'>

        <div className="entries-info">
          Showing <span id='entries'>{users.length} <img src={down} alt='' /> </span> out of {users.length}
        </div>

        <nav className="paginate is-right" role="navigation" aria-label="pagination">

          <a href="htt" className="pagination-previous"> <img src={previous} alt='' /> </a>

          <div className="pagination-list">
            <a href="htt" className="pagination-link" id='link1' aria-label="Goto page 1">1</a>
            <a href="htt" className="pagination-link" aria-label="Goto page 45">2</a>
            <a href="htt" className="pagination-link" aria-label="Goto page 45">3</a>
            <span className="pagination-ellipsis">&hellip;</span>
            <a href="htt" className="pagination-link" aria-label="Goto page 47">15</a>
            <a href="htt" className="pagination-link" aria-label="Goto page 86">16</a>
          </div>

          <a href="htt" className="pagination-next"> <img src={next} alt='' /> </a>

        </nav>
      
      </section>


    </main>
  )
}

export {Main}