const Title = () => {
	return (
		<h1 className="title">
			React World Weather<br />
			<span className="title">with TypeScript</span>
		</h1>
	);
};

// returnと中括弧{}、更に()も全て省略し以下のように書くこともできる
// const Title = () => <h1>React World Weather<br /><span className="title">with TypeScript</span></h1>;

export default Title;
