import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
// import {AiOutlineArrowLeft} from 'react-icons/ai';
// import {IoMdNotificationsOutline} from 'react-icons/io'
// import {MdDoorSliding} from 'react-icons/md'
// import {CgProfile,CgSearch} from 'react-icons/cg'
import HeaderSearchbar from '../HeaderSearchbar';

function CatalogPage() {
  const history = useHistory();
  const categoryNames = [
    {
      mainCategory: 'WOMEN',
      subCategories: ['TRADITIONAL', 'WESTERN', 'OTHERS'],
      categoryid: 1,
    },
    {
      mainCategory: 'MEN',
      subCategories: ['TRADITIONAL', 'WESTERN', 'OTHERS'],
      categoryid: 2,
    },
    {
      mainCategory: 'KIDSBOYS',
      subCategories: ['TRADITIONAL', 'WESTERN', 'OTHERS'],
      categoryid: 3,
    },
    {
      mainCategory: 'KIDSGIRLS',
      subCategories: ['TRADITIONAL', 'WESTERN', 'OTHERS'],
      categoryid: 4,
    }
  ];

  const categories = {
    WOMEN: {
      TRADITIONAL: [
        { imageUrl: "https://i.pinimg.com/564x/e7/89/a1/e789a126720d70960a9f69e25baf3c5c.jpg", name: "Saree Blouses",type:"sareeBlouses", id: 1 },
        { imageUrl: "https://i.pinimg.com/564x/af/b3/8e/afb38e88af33a558ce73d67291ee1762.jpg", name: "Half Saree Blouses",type:"halfSareeBlouses", id:2 },
        { imageUrl: "https://i.pinimg.com/564x/42/03/25/420325b52dbcfcc5069a837de6cfa120.jpg", name: "Kurthis",type:"kurthis", id: 3},
        { imageUrl: "https://i.pinimg.com/564x/e3/79/c2/e379c2a5cd0ecee10d7edbba3bf006f0.jpg", name: "Lehengas",type:"lehengas", id: 4 },
        { imageUrl: "https://i.pinimg.com/736x/d1/a4/61/d1a461ac0507e164f3555c5ec2ddf1cd.jpg", name: "Anarkali",type:"anarkali", id: 5 }
      ],
      WESTERN: [
        { imageUrl: "https://i.pinimg.com/564x/aa/12/57/aa1257769e1c62831fa6e1985c0f3852.jpg", name: "Tops",type:"tops", id: 1 },
        { imageUrl: "https://img2.exportersindia.com/product_images/bc-small/2019/9/6575965/palazzo-pants-1567496410-5064297.jpeg", name: "Bottoms",type:"bottoms", id: 2 },
        { imageUrl: "https://i.pinimg.com/originals/17/70/d5/1770d5ce7e8f977c36825b6007141c5e.jpg", name: "Dresses",type:"dresses", id: 3 },
        { imageUrl: "https://i.pinimg.com/564x/1e/84/16/1e841611c1b9e2695347f19108119114.jpg", name: "Western Blouses",type:"westernBlouses", id: 4 },
        { imageUrl: "https://i.pinimg.com/736x/f5/ea/0d/f5ea0dfb28aedfe78e3864b9c1300598.jpg", name: "Two Piece Set",type:"twoPieceSet", id: 5 }
      ],
      OTHERS: [
        { imageUrl: "https://i.pinimg.com/564x/c1/bd/eb/c1bdebc02076f4e3eccb3401a3545b46.jpg", name: "Patches",type:"patches", id: 1 },
        { imageUrl: "https://i.pinimg.com/750x/64/3f/95/643f95feb8d6564807bcd8e11c45d342.jpg", name: "Embroidery",type:"embroidery", id: 2 },
        { imageUrl: "https://i.pinimg.com/564x/f7/6a/a6/f76aa66d6ed02e68c246762bf0660b7c.jpg", name: "Designs",type:"designs", id: 3 }
      ]
    },

    MEN: {
      TRADITIONAL: [
        { imageUrl: "https://i.pinimg.com/474x/46/33/bd/4633bdfc0f221fbd3df99e1523485a29.jpg", name: "Tops",type:"tops", id: 1 },
        { imageUrl: "https://i.pinimg.com/236x/07/3c/f1/073cf1a4924a860fd27b713cd78fc08f.jpg", name: "Bottoms",type:"bottoms", id: 2 },
        { imageUrl: "https://i.pinimg.com/474x/3b/61/d2/3b61d23bb771ca95b721653dec5f66ff.jpg", name: "Dresses",type:"dresses", id:3 }
      ],
      WESTERN: [
        { imageUrl: "https://i.pinimg.com/originals/29/2a/2c/292a2cfa4d252ba20dbe87257fe90f94.jpg", name: "Tops",type:"tops", id: 1 },
        { imageUrl: "https://i.pinimg.com/736x/01/e2/66/01e266736e4289d03e1c3a43a7ba6b47.jpg", name: "Bottoms",type:"bottoms", id: 2 },
        { imageUrl: "https://i.pinimg.com/736x/b5/d8/30/b5d830e1ad8df38e07204e1b003a9fd9.jpg", name: "Dresses",type:"dresses", id: 3 }
      ],
      OTHERS: [
        { imageUrl: "https://bentexsuits.com.au/wp-content/uploads/2022/10/29-MAY-2021-Laura-Peter-00741-681x1024.jpg", name: "Coats",type:"coats", id: 1 },
        { imageUrl: "https://i.pinimg.com/474x/e2/81/ef/e281efec0b020f2d99db5df896d113f7.jpg", name: "Nightwear",type:"nightwear", id: 2 }
      ]
    },

    KIDSBOYS: {
      TRADITIONAL: [
        { imageUrl: "https://m.media-amazon.com/images/I/61B7stCSQyL._AC_SR175,263_QL70_.jpg", name: "Tops",type:"tops", id: 1 },
        { imageUrl: "https://i.pinimg.com/564x/bd/fb/c3/bdfbc38d60e1f209c8ac422dee62609e.jpg", name: "Bottoms",type:"bottoms", id: 2 },
        { imageUrl: "https://i.pinimg.com/originals/a0/aa/bf/a0aabfdd7010ba447d093f812e688ce2.jpg", name: "Dresses",type:"dresses", id: 3 }
      ],
      WESTERN: [
        { imageUrl: "https://i.pinimg.com/originals/41/4d/08/414d080390178203ab782c7c0bfe1042.jpg", name: "Tops",type:"tops", id: 1 },
        { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxf7tWXEdYo_aKDM1WOEHlB3u5UiCt6WAWyWodUox-MHt6pSMkR6EmDJty_FYedL4ilw&usqp=CAU", name: "Bottoms",type:"bottoms", id: 2 },
        { imageUrl: "https://i.pinimg.com/736x/67/cb/b7/67cbb7fa83da4790ff371ccef0446ff9--cool-kids--years.jpg", name: "Dresses",type:"dresses", id: 3 }
      ],
      OTHERS: [
        { imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8XGTQ8VcwDK8c9NdrZUdUht1WdeTngpdqWmb6kZYmd1Y47TVfTyKaNhAA5blaFlGWcE4&usqp=CAU", name: "Coats",type:"coats", id: 1 },
        { imageUrl: "https://i.pinimg.com/236x/d9/ab/c5/d9abc5fa24dbf068db3c24004cfe7d23.jpg", name: "Nightwear",type:"nightwear", id: 2 }
      ]
    },
    KIDSGIRLS: {
      TRADITIONAL: [
        { imageUrl: "https://i.pinimg.com/1200x/e5/f7/eb/e5f7eb3cca62de43dc578848cb77115d.jpg", name: "Tops",type:"tops", id: 1 },
        { imageUrl: "https://i.pinimg.com/originals/96/00/36/960036c6e2d946bc0803e674028ec741.jpg", name: "Bottoms",type:"bottoms", id: 2 },
        { imageUrl: "https://i.pinimg.com/236x/64/72/eb/6472ebb886cc0b0c987da63b30989c65.jpg", name: "Dresses",type:"dresses", id: 3 }
      ],
      WESTERN: [
        { imageUrl: "https://i.pinimg.com/236x/33/23/3f/33233f0211d954911360d7c6b72f48af.jpg", name: "Tops",type:"tops", id: 1 },
        { imageUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/062039/1.jpg?9112", name: "Bottoms",type:"bottoms", id: 2 },
        { imageUrl: "https://i.pinimg.com/474x/44/2a/26/442a269c21dcb935f3fdc6fe380c5808.jpg", name: "Dresses",type:"dresses", id: 3 }
      ],
      OTHERS: [
        { imageUrl: "https://i.pinimg.com/564x/05/33/93/05339392b6e3d1c7ee177d89ce9f0770.jpg", name: "Shrugs",type:"shrugs", id: 1 },
        { imageUrl: "https://i.pinimg.com/736x/cf/db/d8/cfdbd873bdb0b87e228f03421cfcbd02.jpg", name: "Nightwear",type:"nightwear", id: 2 }
      ]
    }
  };

  const [activeMainCategory, setActiveMainCategory] = useState(categoryNames[0].mainCategory);
  const [activeSubCategory, setActiveSubCategory] = useState(categoryNames[0].subCategories[0]);

  const pageBackgroundStyle = {
    backgroundColor: 'rgb(230, 230, 250)',
    textAlign: 'center',
  };

  const displayCategories = (name, mainCategory, subCategory) => {
    history.push(`/catalogpage/${mainCategory}/${subCategory}/${name}`)
  };


  const handleMainCategoryClick = (mainCategory) => {
    setActiveMainCategory(mainCategory);
    setActiveSubCategory(categoryNames.find((category) => category.mainCategory === mainCategory).subCategories[0]);
  };

  const handleSubCategoryClick = (subCategory) => {
    setActiveSubCategory(subCategory);
  };


  const renderProductsBySubCategory = (products, mainCategory, subCategory) => {
    if (!products[mainCategory] || !products[mainCategory][subCategory]) {
      return null;
    }

    let subCategoryProducts;

    subCategoryProducts = products[mainCategory][subCategory];

    return (
      <div style={pageBackgroundStyle} className='container'>
        <h2>{subCategory}</h2>
        <div className="product-grid">
          {subCategoryProducts.map((product) => (
            <div key={product.id} className="product-item" onClick={() => displayCategories(product.name, mainCategory, subCategory)}>
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };


  return (
    <div style={pageBackgroundStyle}>
      <HeaderSearchbar link = "/"/>
      <div className="main-category-tabs">
        {categoryNames.map((category) => (
          <button
            key={category.categoryid}
            className={activeMainCategory === category.mainCategory ? 'active' : ''}
            onClick={() => handleMainCategoryClick(category.mainCategory)}
          >
            {category.mainCategory}
          </button>
        ))}
      </div>

      <div className="sub-category-tabs">
        {categoryNames
          .find((category) => category.mainCategory === activeMainCategory)
          .subCategories.map((subCategory) => (
            <button
              key={subCategory}
              className={activeSubCategory === subCategory ? 'active' : ''}
              onClick={() => handleSubCategoryClick(subCategory)}
            >
              {subCategory}
            </button>
          ))}
      </div>

      {renderProductsBySubCategory(categories, activeMainCategory, activeSubCategory)}
    </div>
  );
}

export default CatalogPage;
