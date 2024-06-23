import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import '../styles/Dashboard.scss'

const Dashboard = () => {
  return (
    <div className="dashboard">

      <Header />

      <section className="section">

        <Sidebar />

      </section>

    </div>
  )
}

export {Dashboard}