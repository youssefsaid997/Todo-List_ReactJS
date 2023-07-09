import React, { useState } from "react";

const Form = (props) => {
	const [item, setItem] = useState("");
	const [error, setError] = useState("");

	const handleChange = (e) => {
		console.log(props.value);
		if (e.target.value) {
			setItem(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		console.log(e);
		e.preventDefault();

		if (item.length) {
			props.onSubmit(item);
			setError("");
			e.target[0].value = "";
		} else if (props.value) {
			e.target[0].value = props.value;
		} else {
			setError("Empty input please enter a value");
		}
		console.log("clicked");
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="items-center align-middle justify-center mx-auto bg-gray-100 mt-16 p-7 w-7/12"
		>
			<div className="flex justify-center items-center space-x-8">
				<input
					type="text"
					className="py-3 px-1 items-center w-80 border rounded-md"
					onChange={handleChange}
				/>
				{!props.value ? (
					<button className="text-white bg-black px-8 py-3 rounded-md">
						Add
					</button>
				) : (
					<button
						onClick={props.handleEdit}
						className="text-white bg-green-400 px-8 py-3 rounded-md"
					>
						Edit
					</button>
				)}
			</div>
			{error && <p className="text-red-600 font-medium text-md">{error}</p>}
		</form>
	);
};

export default Form;
