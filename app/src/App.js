import { Board } from "./components/board";

export default function App() {
	return (
		<div className="vh-100 vw-100 bg-dark">
			<Board size={3} />
		</div>
	);
}
