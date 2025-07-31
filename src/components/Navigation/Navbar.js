import logo from '../../assets/Frame 2 1.png'
import style from './Navbar.module.css'

function Navbar() {
  return (
    <main className={style.navigation}>
      <div className={style.brand_logo}>
        <img src={logo} alt="" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </main>
  )
}

export default Navbar