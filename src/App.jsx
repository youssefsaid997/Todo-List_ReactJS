import { useState } from "react";
import Item from "./components/Item";
import ListItems from "./components/ListItems";
import Form from "./components/Form";

function App() {
	const [items, setItems] = useState([]);
	const [done, setDone] = useState(false);
	const [value, setValue] = useState("");

	const handleEdit = (item) => {
		const _item = items.find((_item) => {
			if (item === _item) {
				return item;
			}
		});
		setValue(_item);
		console.log(_item);
		console.log("edit");
	};
	const handleDelete = (item) => {
		const _items = [...items];
		const filtered = _items.filter((_item) => {
			return _item !== item;
		});
		setItems(filtered);
	};

	const handleDone = () => {
		setDone((prev) => !prev);
		console.log("done");
	};

	const onSubmit = (data) => {
		console.log(data);
		setItems((prev) => {
			return [...prev, data];
		});
	};
	console.log(items);

	return (
		<>
			<h1>Welcome to todo app</h1>
			<header></header>
			<main>
				<section>
					<Form
						onSubmit={onSubmit}
						value={value}
					/>
				</section>
				<section>
					<ListItems
						items={items}
						handleDelete={handleDelete}
						handleDone={handleDone}
						handleEdit={handleEdit}
						done={done}
					/>
				</section>
			</main>
		</>
	);
}

export default App;
