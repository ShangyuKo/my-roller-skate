import Item from './Item'
import Grid from "@material-ui/core/Grid";
//import Product from './Products/Product/product';
import './ItemList.css'
import useStyles from '../components/Products/Product/styles';
import Box from '@mui/material/Box';


// const items = [
//   {Id:1, Item:"pad", Price:300, quantity:10, picLink: "https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg"},
//   {Id:2, Item:"inlineSkates", Price:200, quantity:20, picLink:"https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg"},
//   {Id:2, Item:"Helmet", Price:20, quantity:5, picLink:"https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg"},
//   {Id:2, Item:"inlineSkates", Price:200, quantity:20, picLink:"https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg"},
//   {Id:2, Item:"inlineSkates", Price:200, quantity:20, picLink:"https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg"},
// ];

const ItemList = ({ items, order, addOneItem, delOneItem }) => {
  const classes = useStyles();
    return (
      <div >
        <Box margin="20px" gap={4}>
          <Grid container spacing={4}>
            {items.map(product => (
            
              <Grid item xs={3} >
  {/*key={product.Id}  */}
                {/* product */}
                {/* <Product product={product}/> */}
                <Item item={product} order={order} addOneItem={addOneItem} delOneItem={delOneItem}/>
            

            {/* <Product product={product}/> */}
              </Grid>
            ))}
          </Grid>
        </Box>
        
      </div>
    );
}
   
  export default ItemList;