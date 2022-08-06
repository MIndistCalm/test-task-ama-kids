import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Board = (size) => {
	const dispatch = useDispatch();
	const stateBoard = useSelector((state) => state.board);

	const generateBoard = (min, max) => {
		let arr = [];

		for (let i = 0; i < size.size; i++) {
			arr[i] = [];
			for (let j = 0; j < size.size; j++) {
				arr[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
			}
		}
		return arr;
	};

	const checkAnswer = () => {
		const arr = generateBoard(0, 3);
		dispatch({
			type: "SHOW_BOARD",
			payload: arr,
		});
	};
	const startBoard = () => {
		const arr = generateBoard(0, 0);
		dispatch({
			type: "START_BOARD",
			payload: arr,
		});
	};

	return (
		<div
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				startBoard();
			}}
			className="bg-warning vh-100 vw-100 d-flex flex-column justify-content-center align-items-center"
		>
			{stateBoard.map((row, i) => (
				<div
					className="bg-light h-25 w-50 d-flex justify-content-center align-items-center"
					key={i}
				>
					{row.map((col, j) =>
						col == 0 ? (
							<span
								onClick={() => {
									checkAnswer();
								}}
								className="bg-primary border h-100 w-100 text-end"
								key={j}
							>
								{col}
							</span>
						) : null
					)}
					{row.map((col, j) =>
						col == 1 ? (
							<span
								onClick={() => {
									checkAnswer();
								}}
								className="bg-light border h-100 w-100 text-end"
								key={j}
							>
								{col}
							</span>
						) : null
					)}
					{row.map((col, j) =>
						col == 2 ? (
							<span
								onClick={() => {
									checkAnswer();
								}}
								className="bg-danger border h-100 w-100 text-end"
								key={j}
							>
								{col}
							</span>
						) : null
					)}
					{row.map((col, j) =>
						col == 3 ? (
							<span
								onClick={() => {
									checkAnswer();
								}}
								className="bg-success border h-100 w-100 text-end"
								key={j}
							>
								{col}
							</span>
						) : null
					)}
				</div>
			))}
		</div>
	);
};
