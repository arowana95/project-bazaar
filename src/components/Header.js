import {useState} from 'react'
import {moneyFormat} from '../helpers';

function Header({total, money}) {
	return (
		<>
			{total > 0 && money - total !== 0 && (
				<div className="header">Account Balance: ${moneyFormat(money - total)} <span className="brand">Aykut's Bazaar</span><div><span>Hello User</span><span className="material-symbols-outlined">person</span></div></div>
			)}
			{total === 0 && (
				<div className="header">Account Balance: ${moneyFormat(money)}  <span className="brand">Aykut's Bazaar</span><div><span>Hello User</span><span className="material-symbols-outlined">person</span></div></div>
			)}
			{money - total === 0 && (
				<div className="header empty"><span>Account Balance: $0</span><span className="brand">Aykut's Bazaar</span><div><span>Hello User</span><span className="material-symbols-outlined">person</span></div></div>
			)}
		</>
	)
}

export default Header