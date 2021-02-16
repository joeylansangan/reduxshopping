import Item1 from './assets/img1.png';
import Item2 from './assets/img2.png';

const initState = {
    items: [
        {id:1,title:'Diamond Piece', desc: "It looks like shiny water droplets on top of your skin.", price:110,img:Item1},
        {id:2,title:'Gold Chunk', desc: "Chubby gold chunk. Will put a smile on any face.", price:80,img: Item2},
    ],
    addedItems:[],
    total: 0
}
const cartReducer= (state = initState,action)=>{
    
    return state;
}

export default cartReducer;