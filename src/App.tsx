import { useState } from "react";
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

type ResultsStateType = {
	country: string;
	cityName: string;
	temperature: string;
	conditionText: string;
	icon: string;
}

function App() {
	const [city, setCity] = useState<string>("");
	const [results, setResults] = useState<ResultsStateType>({
		country: "",
		cityName: "",
		temperature: "",
		conditionText: "",
		icon: "",
	});
	const GetWeather = (e: any) => {
		// ボタンを押した時にページがリロードされるのを防ぐ
		e.preventDefault();
		fetch("https://api.weatherapi.com/v1/current.json?key=e9585ab2b07548dc8cd120216230209&q=London&aqi=no")
			.then(res => res.json())
			.then(data => {
				setResults({
					country: data.location.country,
					cityName: data.location.name,
					temperature: data.current.temp_c,
					conditionText: data.current.condition.text,
					icon: data.current.condition.icon,
				});
			});
	};


	return (
		<div className="test">
			<Title />
			<Form setCity={setCity} getWeather={GetWeather} />
			<Results results={results}/>
		</div>
	);
}

export default App;
