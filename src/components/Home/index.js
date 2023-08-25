import LogoutButton from '../LogoutButton'
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-container">
      <h1 className="home-heading">Home Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default Home
