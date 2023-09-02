type FormPropsType = {
	setCity: React.Dispatch<React.SetStateAction<string>>
	// App.tsxと同じくeの型をanyからReact.FormEvent<HTMLFormElement>に修正
	getWeather: (e: React.FormEvent<HTMLFormElement>) => void //voidは返り値がないことを示す
}

const Form = (props: FormPropsType) => {
	return (
		//ブラウザによっては<button onClick>では正しく動作しないので、<form onSubmit>に変更
		<form onSubmit={props.getWeather}>
			<input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)} />
			<button type="submit">Get Weather</button> {/* onClickを削除 */}
		</form>
	);
};

export default Form;