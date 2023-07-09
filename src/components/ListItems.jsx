import React from "react";
import Item from "./Item";

const ListItems = (props) => {
	return (
		<div className="w-7/12 items-center align-middle justify-center mx-auto bg-gray-100 mt-8">
			<ul className="items-center align-middle justify-center space-y-1 p-5">
				{props.items.length ? (
					props.items?.map((item, index) => {
						return (
							<Item
								key={index}
								index={index}
								item={item}
								handleDelete={props.handleDelete}
								handleDone={props.handleDone}
								handleEdit={props.handleEdit}
								done={props.done}
							/>
						);
					})
				) : (
					<h1>No todo items are in the list please add</h1>
				)}
			</ul>
		</div>
	);
};

export default ListItems;
