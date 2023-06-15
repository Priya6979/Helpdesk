import './App.css';
import SignUp from './pages/SignUp';
import FormContainer from './component/FormContainer';
import NewTicket from './pages/NewTicket';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<SignUp />}
				/>
				<Route
					path="/newticket"
					element={<NewTicket />}
				/>
			</Routes>

			{/* <NewTicket /> */}
		</div>
	);
}

export default App;
