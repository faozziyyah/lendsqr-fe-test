import React, { useContext }from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../components/UserContext';

const UserDetail: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    const context = useContext(UserContext);

    if (!context) {
      return <div>Loading...</div>;
    }

    const { users } = context;
    const user = users.find(user => user.id === id);
  
    if (!user) {
      return <div>User not found</div>;
    }  

  return (
    <div>

      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.profile.phone}</p>
      <p><strong>Organization:</strong> {user.organization}</p>
      <p><strong>Status:</strong> {user.status}</p>
      <p><strong>Created At:</strong> {user.createdAt}</p>

    </div>
  );
};

export {UserDetail};