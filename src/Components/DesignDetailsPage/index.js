import HeaderSearchbar from '../HeaderSearchbar';
import './index.css'
import { useLocation } from 'react-router-dom'


const DesignDetailsPage = () => {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const description = queryParams.get('description')
    const id = queryParams.get('id');
    const name = queryParams.get('name');
    const price = queryParams.get('price');
    const img = queryParams.get('img');
    const descriptionText = description.split('.')

    return (
        <div className='design-detail-container'>
            <HeaderSearchbar link='/catalogpage/:maincategory/:subcategory/:id' />
            <h2>DESIGN DETAILS</h2>
            <div className='design-details-subcontainer'>
                <img src={img} alt={id} className='design-img'/>
                <div className='design-details-text'>
                    <p>Price: {price}</p>
                    <p>Design Name: {name}</p>
                    <ul className='text-start'>
                        {descriptionText.map(point => <li>{point}</li>)}
                    </ul>
                    <button className='btn'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default DesignDetailsPage