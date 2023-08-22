import './index.css';
import { Link } from 'react-router-dom';
import {Component} from 'react';
import {HiShoppingBag} from 'react-icons/hi';
import {CgProfile,CgSearch} from 'react-icons/cg';

class Header extends Component{
    state = {
        isOpen: false
    }
    
    onClickItem = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return(
            <div className='main-containerh'>
                <div className='logo-container'>
                    <div className="dropdown-button">
                            <img className='krita-logo' src={'/krita_logo.png'} alt="logo" onClick={() => this.setState({ isOpen: !this.state.isOpen })} />
                        {this.state.isOpen && (
                        <div className="dropdown-menu">
                            <Link to='/'><button onClick={this.onClickItem} className="menu-item">Home</button></Link>
                            <Link to='/orders'><button onClick={this.onClickItem} className="menu-item">My Orders</button></Link>
                            <Link to='/rewards'><button onClick={this.onClickItem} className="menu-item">Rewards</button></Link>
                            <Link to='/offers'><button onClick={this.onClickItem} className="menu-item">My Offers</button></Link>
                            <Link to='/care'><button onClick={this.onClickItem} className="menu-item">Coustmer Care</button></Link>
                            <Link to='/catalogpage'><button onClick={this.onClickItem} className="menu-item">Catalogs</button></Link>
                        </div>
                        )}
                    </div>
                    <h1 className='heading'>KRITA</h1>
                    <div className='search_bar_container'>
                        <button className='search-button'><CgSearch /></button>
                        <input type='search' className='search_bar' />
                    </div>
                </div>
                <div>
                    <div className="dropdown">
                        <button className='button'><HiShoppingBag/></button>
                        <p className="dropdown-content">Wishlist</p>
                    </div>
                    <div className='dropdown'>
                        <Link to='/profile'><button className='button'><CgProfile/></button></Link>
                        <p className="dropdown-content">Profile</p> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Header