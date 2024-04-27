import './header.css';
import logo from './../../image/logo.svg'
import HeadImg from './../../image/head.svg'

function Header (){
    return(
        <header className = "Header" style={{backgroundImage : `url(${HeadImg})`, backgroundSize:'contain'}}>
            <div className="container">
                <div className="header-row">
                <div className="header-nav">
                    <ul>
                        <li><a href="#!">Главная </a></li>
                        <li><a href="#!">Оклейка автомобилей </a></li>
                        <li><a href="#!">Детейлинг автомобилей </a></li>
                        <li><a href="#!">Галерея работ </a></li>
                    </ul>
                   </div>
                    <div className="header-logo">
                        <img src={logo} alt="logo" />
                        <span>dub</span>
                    </div>
                </div>
                <div className="header-car">
                        <h1>CAR MUSC</h1>
                    </div>
                <div className="point">
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                </div>

                <div className="header-title">
                    <p>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Vitae orci urna amet penatibus.</p>
                </div>
                <div className="header-btn">
                    <button> НАШИ УСЛУГИ </button>
                </div>
            </div>
        </header>
    )
}
export default Header;