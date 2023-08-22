import { Component } from 'react' ;
import { v4 as uuidv4 } from 'uuid';
import './index.css'

const designsList = [
    {imageUrl:'https://i.pinimg.com/564x/17/f8/62/17f862e7379723e3df1e4cc7254b7ac5.jpg', price:'799/-', category:'men',type:'pant',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/20/d2/29/20d229cfa9c3f72ff449996357ba8b7b.jpg', price:'999/-', category:'men',type:'pant',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/0f/c5/39/0fc53954333f45396c7ab246a4b147cc.jpg', price:'499/-', category:'men', type:'shirt',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/59/dd/ba/59ddbac3af134e59503115463fd028ab.jpg', price:'599/-', category:'men', type:'shirt', id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/30/69/59/3069595e9f432c225717f15bcb65c7cd.jpg', price:'399/-', category:'kids',type:'shirt',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/c2/8d/1a/c28d1aa3a2b0829e02b3f16ea1382699.jpg', price:'449/-', category:'kids',type:'shirt',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/20/85/64/208564ff14095e240fead40b7ab66f71.jpg', price:'599/-', category:'kids',type:'shirt',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/52/c3/21/52c321d5e66f3486808d8bf4f59b8284.jpg', price:'349/-', category:'kids',type:'pant',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/4c/d9/cd/4cd9cd69add780b7fef7ec083116d752.jpg', price:'399/-', category:'kids',type:'pant',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/94/21/f6/9421f6d799c18b235b7c4600d125a09c.jpg', price:'449/-', category:'kids',type:'pant',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/00/f8/7a/00f87ae69c2be9d1e7114dfb98112b4d.jpg', price:'699/-', category:'kids',type:'frock',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/d8/d5/44/d8d544e582d171893682e03ec3f1eea5.jpg', price:'499/-', category:'kids',type:'frock',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/9a/59/d8/9a59d81613c07af9455ca9e0d35fe592.jpg', price:'599/-', category:'women',type:'onepiece',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/4a/b3/f4/4ab3f42db0fc542985258dca6ebaa8f5.jpg', price:'599/-', category:'women',type:'onepiece',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/ef/8c/95/ef8c95672239f99fbce456f905a09aba.jpg', price:'300/-', category:'women',type:'blouse',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/36/3a/bd/363abd1ee54a5d55ea26f6230a7d8acd.jpg', price:'300/-', category:'women',type:'blouse',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/0d/35/c8/0d35c81bbb6d543d8f25142014e843d0.jpg', price:'499/-', category:'women',type:'top',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/7a/e8/0f/7ae80f0cb1632febe6d6dc136a20e018.jpg', price:'549/-', category:'women',type:'top',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/b1/8a/21/b18a2171fe9bee7e8e94ef339db89941.jpg', price:'499/-', category:'women',type:'pant',id: uuidv4()},
    {imageUrl:'https://i.pinimg.com/564x/c8/56/40/c85640d43f66e8beb91f49c349c6e040.jpg', price:'349/-', category:'women',type:'pant',id: uuidv4()},
]

class Designs extends Component{
    state= {cat: 'women'};

    onClickMen=()=> {
        const {cat} = this.state
        this.setState({cat: 'men'})
        console.log(cat)
    }

    onClickWomen=()=> {
        this.setState({cat: 'women'})
    }

    onClickKids=()=> {
        this.setState({cat: 'kids'})
    }
    
    render() {
        const {cat} = this.state
        console.log(`updated${cat}`)
        const updatedList = designsList.filter(each => {return (each.category === cat)}) ;
        return (
            <div className='designs-main-container'>
                <div className="selection">
                    <button onClick={this.onClickMen}>Men</button>
                    <button onClick={this.onClickWomen}>Women</button>
                    <button onClick={this.onClickKids}>Kids</button>
                </div>
                <ul className='designs-container'>
                    {updatedList.map(each => {
                        return (
                            <li key={each.id} className='item'>
                                <img className='image' src={each.imageUrl} alt={each.type} />
                                <p>Price: {each.price}</p>
                                <button>Wishlist</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Designs