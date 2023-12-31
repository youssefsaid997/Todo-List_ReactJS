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
			<header>
				<h1 className="items-center align-middle justify-center mx-auto bg-gray-100 mt-16 p-7 w-7/12 text-center text-3xl font-bold uppercase">
					Welcome to todo app
				</h1>
			</header>
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
