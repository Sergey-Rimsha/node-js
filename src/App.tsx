import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

type UserType = {
	id: number
	name: string
}

function App() {

	const [state, setState] = useState<UserType[]>([])

	const [newUser, setNewUser] = useState<string>('')

	const getUsers = () => {
		axios.get('http://localhost:7001/users')
			.then(res => {
				setState(res.data)
			})
	}

	useEffect(() => {
		getUsers()
	}, [])

	const onCLickHandlerCreateUser = () => {
		setNewUser('')
		axios.post('http://localhost:7001/users', {name: newUser})
			.then(res => {
				if(res.data.success) {
					getUsers()
				}
			})
	}

	const onChangeHandlerName = (e: ChangeEvent<HTMLInputElement>) => {
		setNewUser(e.currentTarget.value);
	}

	return (
		<div className="App">
			<h2>hello world</h2>
			{
				state.map((el, index) => {
					return (
						<div key={index}>
							{el.name}
						</div>
					)
				})
			}

			<div>
				<div>
					<input type={'text'} value={newUser} onChange={onChangeHandlerName} />
				</div>
				<button onClick={onCLickHandlerCreateUser}>create new user</button>
			</div>
		</div>
	);
}

export default App;
