// import Carousel from "../Carousel/carousel";
// import {SiChatbot} from 'react-icons/si';
// import {AiOutlineStar} from 'react-icons/ai'
// import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
// import {Link} from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import { responsive } from '../categoryDisplayPage';
// import HeaderSearchbar from '../HeaderSearchbar';
import Carousell from '../../Carousell';
import { CatalogSubDesignsList } from '../CatalogListPage';


const Home = () => {
    
    return(
        <div className="bg_color">
            <div className='d-flex flex-row justify-content-center m-3'>
                <button className='btn'>MEN</button>
                <button className='btn'>WOMEN</button>
                <button className='btn'>KIDS</button>
            </div>
            <div className='mb-4'>
                <Carousell/>
            </div>
            <div>
                <Carousell/>
            </div>
            <Carousel responsive ={responsive}>
                {Object.keys(CatalogSubDesignsList).forEach(each => Object.values(CatalogSubDesignsList[each]).map(obj => 
                    {obj.map(eachobj => (
                        <div>
                            <img src={eachobj.imgUrl} alt={eachobj.id}/>
                            <h2>{eachobj.name}</h2>
                            <p>{eachobj.price}</p>
                        </div>
                    ))}
                ))}
            </Carousel>
        </div>
    )
}

export default Home