import React, { useContext }from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../components/UserContext';
import arrow from '../assets/arrowback.png'
import line from '../assets/Line 2.png'
import line1 from '../assets/Line.png'
import star from '../assets/star2.png'
import star1 from '../assets/star1.png'
import star2 from '../assets/star.png'
import avatar from '../assets/avatar1.png'

const Detail: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    const context = useContext(UserContext);

    if (!context) {
      return <div>Loading...</div>;
    }

    const { users } = context;
    const user = users.find(user => user.id === id);
  
    if (!user) {
      return <div className='notfound'>User not found</div>;
    }  

  return (
    <div className='detail'>

      <div className='back'>
        <Link to='/dashboard' className='arrow'><img src={arrow} alt='' /></Link>
        <p>Back to Users</p>
      </div>

      <section className='actions'>

        <h1>User Details</h1>

        <div className='actiondiv'>
          <button className='actionbtn' id='blacklist'>Blacklist User</button>
          <button className='actionbtn' id='activate'>Activate User</button>
        </div>

      </section>

      <section className='intro'>

        <div className='introtop'>

          <div className='user'>

            <img src={avatar} alt='' />

            <div className='about'>
              <h1>{user.profile.name}</h1>
              <p>{user.username}</p>
            </div>

          </div>

          <img src={line} alt='' />

          <div className='tier'>

            <p>User’s Tier</p>
            
            <div className='stars'>
              <img src={star} alt='' />
              <img src={star1} alt='' />
              <img src={star2} alt='' />
            </div>

          </div>

          <img src={line} alt='' />

          <div className='account'>
            <h1>₦{user.balance}.00</h1>
            <p>{user.profile.accountNumber}/Providus Bank</p>
          </div>

        </div>

        <div className="tabs">

          <div className='tab'>
            <p id='tabactive'>General Details</p>
            <img src={line1} alt='' />
          </div>

          <p>Documents</p>

          <p>Bank Details</p>

          <p>Loans</p>

          <p>Savings</p>

          <p>App and System</p>

        </div>

      </section>

      <main className='mainsection'>

        <section className='info'>

          <h1>Personal Information</h1>

          <section className='infos' id='infos'>

            <div className='infodetail'>
              <p id='infoheading'>full Name</p>
              <p id='infodesc'>{user.profile.name}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>Phone Number</p>
              <p id='infodesc'>{user.profile.phone}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>Email Address</p>
              <p id='infodesc'>{user.profile.email}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>Bvn</p>
              <p id='infodesc'>{user.profile.bvn}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>Gender</p>
              <p id='infodesc'>{user.profile.gender}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>Marital status</p>
              <p id='infodesc'>{user.profile.maritalStatus}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>Children</p>
              <p id='infodesc'>{user.profile.children}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>Type of residence</p>
              <p id='infodesc'>{user.profile.residence}</p>
            </div>

          </section>

        </section>

        <section className='info'>

          <h1>Education and Employment</h1>

          <section className='infos' id='education'>

            <div className='infodetail'>
              <p id='infoheading'>level of education</p>
              <p id='infodesc'>{user.education.level}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>employment status</p>
              <p id='infodesc'>{user.education.employmentStatus}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>sector of employment</p>
              <p id='infodesc'>{user.education.sector}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>Duration of employment</p>
              <p id='infodesc'>{user.education.duration} years</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>office email</p>
              <p id='infodesc'>{user.email}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>Monthly income</p>
              <p id='infodesc'>₦{user.education.income}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>loan repayment</p>
              <p id='infodesc'>{user.education.loanRepay}</p>
            </div>

          </section>

        </section>

        <section className='info'>

          <h1>Socials</h1>

          <section className='infos' id='education'>

            <div className='infodetail'>
              <p id='infoheading'>Twitter</p>
              <p id='infodesc'>{user.twitter}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>Facebook</p>
              <p id='infodesc'>{user.facebook}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>Instagram</p>
              <p id='infodesc'>{user.instagram}</p>
            </div>

          </section>

        </section>

        <section className='info'>

          <h1>Guarantor</h1>

          <section className='infos' id='education'>

            <div className='infodetail'>
              <p id='infoheading'>full Name</p>
              <p id='infodesc'>{user.guarantor.name}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>Phone Number</p>
              <p id='infodesc'>{user.guarantor.phone}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>Email Address</p>
              <p id='infodesc'>{user.guarantor.email}</p>
            </div>

            <div className='infodetail'>
              <p id='infoheading'>Relationship</p>
              <p id='infodesc'>{user.guarantor.relationship}</p>
            </div>

          </section>
        </section>

      </main>

    </div>
  );
};

export {Detail};