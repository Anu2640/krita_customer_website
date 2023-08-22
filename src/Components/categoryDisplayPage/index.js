import './index.css'
import React ,{useEffect, useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useHistory } from 'react-router-dom';
import { CatalogMainDesignsList,CatalogSubDesignsList } from '../CatalogListPage';
import HeaderSearchbar from '../HeaderSearchbar';

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const CategoryDisplayPage = ({ match}) => {
  const history = useHistory()
  const {id } = match.params;

  const [inputContent,setInputContent] = useState("")
  const [displayList, setDisplayList] = useState([])
  
  const handleOnclickDesignDetails = (uniqueid,name,price,img,description) => {
    history.push({
      pathname: '/catalogpage/design-details',
      search: `?id=${uniqueid}&name=${name}&price=${price}&img=${img}&description=${description}`
    })
  }



  const onChangeSearchContent = (event) => {
    setInputContent(event.target.value)
  }


  const getSubDesignsById = (id) => {
    for (const object of CatalogMainDesignsList) {
      if (object.mainDesigns === id) {
          return object
        }
      }
  };

  const designsObject = getSubDesignsById(id);
  
  useEffect(() => {
    const filteredList = designsObject.subDesigns.map((each) => CatalogSubDesignsList[designsObject.designid][each])
    const list = filteredList.map((each) => each.filter(array => array.name.toLowerCase().includes(inputContent.toLowerCase())))
    if (inputContent === "") {
      setDisplayList(filteredList)
    } else {
      setDisplayList(list)
    }
  }, [inputContent, designsObject])


  if (!displayList.some(each => each.length > 0)) {
    return <div>Design not found!</div>;
  } else {
    return (
      <div className='category-display-container'>
        <HeaderSearchbar onChangeInput= {onChangeSearchContent} link='/catalogpage'/>
        <h1 className='main-design-heading'>{designsObject.mainDesigns}</h1>
        {designsObject.designNames.map((eachName, index) => (
          <div key={index} className='sub-design-container'>
            <h2>{eachName}</h2>
            <Carousel responsive={responsive}>
                {displayList[index].map((eachobj) => (
                  <div key={eachobj.id} className='design-details-container' onClick={() => handleOnclickDesignDetails(eachobj.id,eachobj.name, eachobj.price,eachobj.imgUrl,eachobj.description)}>
                    <img src={eachobj.imgUrl} alt={eachobj.name} />
                    <p>Price: {eachobj.price}</p>
                    <p>{eachobj.name}</p>
                    <button className='btn' type='button' >Design Details</button>
                  </div>
                ))}
            </Carousel>
          </div>
        ))}
      </div>
    );
  }
 
  
};






