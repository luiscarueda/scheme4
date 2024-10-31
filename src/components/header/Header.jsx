import './header.css'
import { headerData } from '../../constants/data'

const Header = () => {
  return (
    <header>
      <div className= " container header__container">
        <div className="left">
        <h1>{headerData[0].title}</h1>
        <h2>{headerData[0].text}</h2>
              
        </div>
        <div className="right">
              right
        </div>

      </div>
      Header</header>
  )
}

export default Header