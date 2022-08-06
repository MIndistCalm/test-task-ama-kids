import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Board = () => {
	const dispatch = useDispatch();
	const stateBoard = useSelector();
	console.log(stateBoard);
	return (
		<div>
			{stateBoard.board.map((row, i) => (
				<div key={i}>
					{row.map((col, j) => (
						<span key={j}>{col}</span>
					))}
				</div>
			))}
		</div>
	);
};
