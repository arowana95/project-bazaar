import {useState} from 'react'
import BasketItem from './BasketItem';
import {moneyFormat} from '../helpers';

function Basket({basket, resetBasket, total, products}) {
	return (
		<>
			<div className="basket-container container">
				<h3>Shopping Details</h3>
				<ul>
					{basket.map(item => (
						<BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
					))}
				</ul>
				<div className="total">
					Total: ${moneyFormat(total)}
				</div>
				<button className="basket-reset-btn" onClick={resetBasket}>Clear</button>
			</div>
		</>
	)
}

export default Basket