import React, { useEffect, useState } from 'react';
import { usercard } from "./Card"
import dots from '../assets/dots.png'
import line from '../assets/Rectangle 4.2.png'

interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  profile: {
    phone: string;
  };
  createdAt: string;
  status: string;
}

const Main: React.FC = () => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.json-generator.com/templates/xJF5tgaXQOLk/data', {
          headers: {
            'Authorization': 'Bearer 6nxibxxrb4mfbxxgqe97isynhre0jnf2sv598zpf'
          }
        });
        const data: User[] = await response.json();
        //console.log(data)
        setUsers(data);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

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
            <th>organization</th>
            <th>username</th>
            <th>email</th>
            <th>phone number</th>
            <th>date joined</th>
            <th>status</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (
            <tr key={user.id} className='tr'>
              <td>lendsqr</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.profile.phone}</td>
              <td>{formatDate(user.createdAt)}</td>
              <td className='status'>
                {user.status} 
                <img src={dots} alt='' /> 
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </main>
  )
}

export {Main}