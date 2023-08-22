import React from "react"
import './index.css'
import { Link } from "react-router-dom"
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {IoMdNotificationsOutline} from 'react-icons/io'
import {MdDoorSliding} from 'react-icons/md'
import {CgSearch} from 'react-icons/cg'
import {FaShoppingCart} from 'react-icons/fa'

const HeaderSearchbar = (props) => {
  const {onChangeInput,link} = props
  return (
  <div className='header-searchbar-container'>
    <div className='catalog-header-container'>
      <div className='catalog-container'>
          <Link to={link}><button><AiOutlineArrowLeft size={30}/></button></Link>
          <h2>Designs</h2>
      </div>
      <div className='search-bar-container display-lg'>
          <input type='search' className='search-bar' placeholder='search for designs' onChange={onChangeInput} />
          <button><CgSearch size= {30} /></button>
      </div>
      <div className='catalog-container'>
        <div className='dropdown'>
          <Link to='/notifications'><button><IoMdNotificationsOutline size={30}/></button></Link>
        <p className="dropdown-content">Notifications</p>
        </div>
        <div className='dropdown'>
          <button><MdDoorSliding size={30}/></button>
          <p className="dropdown-content">Wardrobe</p>
        </div>
        <div className='dropdown'>
        <Link to='/cart'><button><FaShoppingCart size={30}/></button></Link>
        <p className="dropdown-content">Cart</p>
        </div>
      </div>
    </div>
    <div className='search-bar-container display-sm'>
          <input type='search' className='search-bar' placeholder='search' onChange={onChangeInput}/>
          <button><CgSearch size= {30} /></button>
    </div>
  </div>
  )
}

export default HeaderSearchbar