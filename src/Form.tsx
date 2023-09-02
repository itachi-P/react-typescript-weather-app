import { useState } from "react";

const Form = () => {
	const [city, setCity] = useState<string>("");
	const GetWeather = (e: any) => {
		// ボタンを押した時にページがリロードされるのを防ぐ
		e.preventDefault();
		fetch("https://api.weatherapi.com/v1/current.json?key=e9585ab2b07548dc8cd120216230209&q=London&aqi=no")
		.then(res => res.json())
		.then(data => console.log(data));
	};

	return (
		<form>
			<input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
			<button type="submit" onClick={GetWeather}>GetWeather</button>
		</form>
	);
};

export default Form;