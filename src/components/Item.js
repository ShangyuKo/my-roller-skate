import './Items.css';
import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from '../components/Products/Product/styles';

function Item({item, order, addOneItem, delOneItem}) {
    const quantity = order.buyQuantity;
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={item.PicLink}></CardMedia>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {item.Item}
                    </Typography>
                    <Typography variant="h5">
                        Price: {Number(item.Price).toFixed(2)},
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                    Quantity: {quantity[item.Id-1]}, Quantity in Stock: {Number(item.quantity).toFixed(0)}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <button className="button" style={{float: 'right'}} onClick={() => delOneItem(item.Id-1)}>delete Item</button>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart/>
                </IconButton>
                <button className="button" style={{float: 'right'}} onClick={() => addOneItem(item.Id-1)}>add Item</button>
                
            </CardActions>
        </Card>


        // <div className="items-preview" key={item.Id}>
        //     <img className="item_picture" src={item.PicLink} alt="item picture" />
        //     <h2>{item.Item}</h2>
        //     <p>Price: {Number(item.Price).toFixed(2)}, Quantity: {quantity[item.Id-1]}, Quantity in Stock: {Number(item.quantity).toFixed(0)}
        //     <button style={{float: 'right'}} onClick={() => addOneItem(item.Id-1)}>add Item</button>
        //     <button style={{float: 'right'}} onClick={() => delOneItem(item.Id-1)}>delete Item</button>
        //     </p>
        // </div>
    )
}

export default Item