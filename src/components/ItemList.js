import Item from './Item'

const ItemList = ({ items, order, addOneItem, delOneItem }) => {
    return (
      <div className="items-list">
        {/* {console.log(ItemList)} */}
        {items.map(item => (
          <div className="item-preview" key={item.Id} >
              <Item item={item} order={order} addOneItem={addOneItem} delOneItem={delOneItem}/>
          </div>
        ))}
      </div>
    );
}
   
  export default ItemList;