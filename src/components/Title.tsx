// const Title = () => {
// 	return (
// 		<h1>React World Weather</h1>
// 	);
// };

/*
Tips: カッコの種類と英語名
「小・中・大」は一部でしか通じない呼び方。
英名か、「丸括弧・波括弧・角括弧」と呼んだ方がまだ誤解がない。
() = parentheses （丸括弧。「小かっこ」と呼ばれることもある）
{} = (curly) braces　（波括弧。「中かっこ」と呼ばれることもある）
[] = (square) brackets　（角括弧。「大かっこ」と呼ばれることもある）
*/

// returnと中括弧{}を省略して以下のように書くこともできる
// const Title = () => (
// 	<h1>React World
// 		<span>Weather</span>
// 	</h1>
// )

//returnの中の要素が1個だけの場合、()も全て省略して以下のように書くこともできる
const Title = () => <h1>React World <span>Weather</span></h1>;

export default Title;
