import "./NavbarStyles.css"
import logo from '../Navbar/logo-fac.png'
import { Component } from "react";

class Navbar extends Component {

    state={clicked: false };
    handclick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
    return(

        
        <>
        <nav>
            <div className="logo">
                <img  className='img-logo'src={logo} alt="Logo" />
                <a href="index.html">
                    Guilherme
                    <span className="oliveira"> Oliveira</span>
                </a>
            </div>
            <a href="index.html">Guilherme</a>

            <div>
                <ul
                    id="navbar"
                    className={this.state.clicked ? "#navbar active" : "#navbar"}
                >
                    <li className="active">
                        <a className="a" href="index.html">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="index.html">Sobre</a>
                    </li>
                    <li>
                        <a href="index.html">Habilidades</a>
                    </li>
                    <li>
                        <a href="index.html">Projeto</a>
                    </li>
                    <li>
                        <a href="index.html">Me contrate </a>
                    </li>
                </ul>
            </div>
            <div id="mobile" onClick={this.handclick}>
                <i
                    id="bar"
                    className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
                ></i>
            </div>
        </nav>
    </>
        
    )
    
}
}
export default Navbar;