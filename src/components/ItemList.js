import Item from './Item'
import Grid from "@material-ui/core/Grid";
import Product from './Products/Product/product';
import './ItemList.css'

// const items = [
//   {Id:1, Item:"pad", Price:300, quantity:10, picLink: "https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg"},
//   {Id:2, Item:"inlineSkates", Price:200, quantity:20, picLink:"https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg"},
//   {Id:2, Item:"Helmet", Price:20, quantity:5, picLink:"https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg"},
//   {Id:2, Item:"inlineSkates", Price:200, quantity:20, picLink:"https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg"},
//   {Id:2, Item:"inlineSkates", Price:200, quantity:20, picLink:"https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg"},
// ];

const ItemList = ({ items, order, addOneItem, delOneItem }) => {
    return (
      <div >
        {/* className="items-list" */}
        {/* {console.log(ItemList)} */}
        {items.map(product => (
          <Grid container>
            <Grid item key={product.Id} xs={12} sm={6} lg={3}>
               {/* product */}
              {/* <Product product={product}/> */}
              <Item item={product} order={order} addOneItem={addOneItem} delOneItem={delOneItem}/>
           

           {/* <Product product={product}/> */}
            </Grid>
          </Grid>
           

          // <div className="item-preview" key={item.Id} >
          //     <Item item={item} order={order} addOneItem={addOneItem} delOneItem={delOneItem}/>
          // </div>
        ))}
      </div>
    );
}
   
  export default ItemList;