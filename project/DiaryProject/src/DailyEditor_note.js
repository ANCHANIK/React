import { useState } from "react";

const DiaryEditor = () => {

	const [state, setState] = useState({
		author: '',
		content: '',
        emotion: 1
	})
	// const [author, setAuthor] = useState('');
	// const [content, setContent] = useState('');

	/*
		const changeAuthor = (e) => {
			// setAuthor(e.target.value)
			// setState({
			// 	author: e.target.value,
			// 	content: state.content // 값 유지
			// })
			setState({
				...state, // spread 는 항상 먼저 작성되어야 바뀐 값이 적용된다.
				author: e.target.value,
			})
		}
		const changeContent = (e) => {
			// setContent(e.target.value)
			setState({
				...state,
				content: state.content, // 값 유지
			})
		}
	*/

	const handleChangeState = (e) => {
		console.log(e.target.name);
		console.log(e.target.value);

		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

    const handleSubmit = () => {
        console.log(state);
        alert('저장 성공');
    }

	return (
		<div className="DiaryEditor">
			<h2>오늘의 일기</h2>
			<div>
				<input
					// onChange={(e) => {
					// 	changeAuthor(e)
					// }}
					name="author"
					onChange={handleChangeState}
					// value={author}
					value={state.author}
				/>
			</div>
			<div>
				<textarea
					// onChange={(e) => {
					// 	changeContent(e)
					// }}
					name="content"
					onChange={handleChangeState}
					// value={content}
					value={state.content}
				/>
			</div>
            <div>
                <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
		</div>
	)
}

export default DiaryEditor;