import { usercard } from "./Card"


const Main = () => {
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

    </main>
  )
}

export {Main}