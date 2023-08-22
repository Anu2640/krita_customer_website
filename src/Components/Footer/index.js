import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
import {SlBasket,SlBadge} from 'react-icons/sl';
import {RiCustomerService2Line} from 'react-icons/ri';
import './index.css'

const Footer = () => {
    // const { history } = props;
    // const onClickDesigns = () => {
    //     history.push("/designs");
    // }

    return(
        <div className='footer-container'>
                    <Link to="/">
                        <button className='footer-button'>
                            <AiOutlineHome />
                            <p>Home</p>
                        </button>
                    </Link>
                    <Link to="/orders">
                        <button className='footer-button'>
                            <SlBasket />
                            <p>Orders</p>
                        </button>
                    </Link>
                    <Link to="/rewards">
                        <button className='footer-button'>
                            <SlBadge />
                            <p>Rewards</p>
                        </button>
                    </Link>
                    <Link to="/care">
                        <button className='footer-button'>
                            <RiCustomerService2Line />
                            <p>Support</p>
                        </button>
                    </Link>
        </div>
    )
}

export default Footer