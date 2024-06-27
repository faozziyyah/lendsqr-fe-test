import React from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Detail } from '../components/Detail';
import '../styles/Detail.scss'

const UserDetail: React.FC = () => {

  return (
    <div className='userdetail'>

      <Header />

      <section className="section">

        <Sidebar />

        <Detail />

      </section>

    </div>
  );
};

export {UserDetail};