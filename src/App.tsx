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
	
	// ここのeはイベントオブジェクト。Reactが定義している型を指定する(anyは極力残さないようにする)
	const GetWeather = (e: React.FormEvent<HTMLFormElement>) => {
		// ボタンを押した時にページがリロードされるのを防ぐ
		e.preventDefault();
		// APIを使って天気を取得する
		// テンプレートリテラルを使って、URLの中にstateの変数cityを埋め込む
		fetch(`https://api.weatherapi.com/v1/current.json?key=e9585ab2b07548dc8cd120216230209&q=${city}}&aqi=no`)
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
