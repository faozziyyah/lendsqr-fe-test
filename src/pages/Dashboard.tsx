import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Sidebar } from "../components/Sidebar"
import '../styles/Dashboard.scss'

const Dashboard = () => {
  return (
    <div className="dashboard">

      <Header />

      <section className="section">

        <Sidebar />

        <Main />

      </section>

    </div>
  )
}

export {Dashboard}