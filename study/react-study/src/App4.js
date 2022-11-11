import React from "react";
import { useState, useEffect } from "react";

function App4 () {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([])
	const [money, setMoney] = useState(1);
	const [need, setNeed] = useState(1);

	const onChange = (event) => {
		let moneyValue = Math.round(event.target.value.split(' USD')[0].split(': ')[1]);
		setMoney(moneyValue)
		setNeed(1);
	}

	const hadleInput = (event) => {
		setNeed(event.target.value);

	}

	useEffect(() => {
		fetch('https://api.coinpaprika.com/v1/tickers')
		.then((response) => response.json())
		.then((json) => {
			setCoins(json);
			setLoading(false);
		});
	}, []);

	return (
		<>
			<h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
			{loading ? (<strong>Loading...</strong>) : (
				<select
					onChange={onChange}
				>
					{coins.map((coin, index) => (
						<option
							key={index}
						>
							{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
						</option>
					))}
				</select>
			)}
			<h2>How much do you have?!</h2>
			<input
				onChange={hadleInput}
				value={need}
				type="number"
				placeholder="How much do you have?"
			/>$
			<h2>You can get only <em style={{color: 'red'}}>{need/money}</em></h2>
		</>
	)
}

export default App4;