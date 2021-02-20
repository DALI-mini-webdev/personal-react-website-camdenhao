import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import { Button } from '../Button';
import { Link } from "react-router-dom";
import Confetti from 'react-confetti';
class Navbar extends Component {
    state = { clicked: false,
              confetti: false   
            }
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })

    }
    partyTime = () => {
        this.setState({ confetti: !this.state.confetti })
    }
    
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Camden <i className="fas fa-chess"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index) => {
                        return (
                            <li key={index}>
                                <Link to={`/${item.title}`} className={item.cName}>
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Button onClick={this.partyTime}>{this.state.confetti ?  'Confetti Reloading...' : 'Launch Confetti' }</Button>
                <div>
                    {(this.state.confetti) ? <Confetti recycle={false} onConfettiComplete={this.partyTime} /> : ''}
                </div>
            </nav>
        )
    }
}

export default Navbar;