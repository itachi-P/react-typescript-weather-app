import { useState } from "react";
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import Loading from "./components/Loading";
import './App.css';

export type ResultsStateType = {
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
	// 「GetWeather」のボタンが押された時にLoading表示をし、気象データが表示されたら消える為のstate
	const [loading, setLoading] = useState<boolean>(false);

	// ここのeはイベントオブジェクト。Reactが定義している型を指定する(anyは極力残さないようにする)
	const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
		// ボタンを押した時にページがリロードされるのを防ぐ
		e.preventDefault();
		// ボタンを押した時にLoadingを表示する
		setLoading(true);
		// APIを使って天気を取得する
		// テンプレートリテラルを使って、URLの中にstateの変数cityを埋め込む
		fetch(`https://api.weatherapi.com/v1/current.json?key=e9585ab2b07548dc8cd120216230209&q=${city}}&aqi=no`)
			.then(res => res.json())
			.then(data => {
				if (!city || data.error) {
					alert("有効な都市名を入力してください");
					return;
				}
				setResults({
					country: data.location.country,
					cityName: data.location.name,
					temperature: data.current.temp_c,
					conditionText: data.current.condition.text,
					icon: data.current.condition.icon,
				})
				// 入力欄を空にする
				setCity("");
				// 検索完了後Loadingを非表示にする
				setLoading(false);
			})
			// catchはfetchのエラーをキャッチする一般的な書き方
			// そもそもエラーが発生する前にif文でハンドリングするのがベター
			.catch(err => alert("エラーが発生しました。ページをリロードして再度お試しください。"));
	};

	return (
		<div className="wrapper">
			<div className="container">
				<Title />
				<Form setCity={setCity} getWeather={getWeather} city={city}/>
				{/* 三項演算子の使用は極力簡単な分岐に留める */}
				{loading ? <Loading /> : <Results results={results} />}
			</div>
		</div>
	);
}

export default App;
