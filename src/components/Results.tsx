import { ResultsStateType } from "../App";

type ResultsPropsType = {
	results: ResultsStateType;
}

// app.tsxから渡ってきた{results}は、変数propsを介さずとも直接使える
const Results = ({ results }: ResultsPropsType) => {
	const { country, cityName, temperature, conditionText, icon } = results;
	return (
		// 特にclassNameでスタイルが当てられているわけでもないので、divタグである必要はない
		<>
			{country &&
				<div className="results-country">{results.country}</div>
			}
			{cityName &&
				<div className="results-city">{results.cityName}</div>
			}
			{temperature &&
				<div className="results-temp">{results.temperature} <span>°C</span></div>
			}
			{conditionText &&
				<div className="results-condition">
					<img src={icon} alt="icon" />
					<span>{conditionText}</span>
				</div>
			}
		</>
	);
};

export default Results;