import React, { createContext, useState, useEffect } from 'react';

interface User {
    id: string;
    organization: string;
    username: string;
    email: string;
    balance: string;
    profile: {
      email: string;
      bvn: string;
      accountNumber: string;
      phone: string;
      name: string;
      gender: string;
      company: string;
      children: string;
      residence: string;
      maritalStatus: string;
    };
    createdAt: string;
    status: 'active' | 'inactive' | 'pending' | 'blacklisted';
    twitter: string;
    facebook: string;
    education: {
      level: string;
      income: number;
      sector: string;
      duration: number;
      loanRepay: number;
      employmentStatus: string;
    };
    guarantor: {
      name: string;
      email: string;
      phone: string;
      relationship: string;
    };
    instagram: string;
    updatedAt: string;
}

interface UserContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

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
        setUsers(data);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
