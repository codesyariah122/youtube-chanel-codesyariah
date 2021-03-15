import React, {useState, useEffect} from 'react'
import {AllData, AddData, UpdateData, DeleteData} from '../../services'
import {ListData, Modals, AddForm, EditForm} from '../../components'

const Home = props => {

	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(false)
	const [alert, setAlert] = useState(false)
	const [details, setDetails] = useState(false)
	const initialUser = {
		id: null,
		usename: '',
		email: '',
		fullname: '',
		phone: '',
		isActive: true,
		city: '',
		bio: ''
	}
	const [editing, setEditing] = useState(false)
	const [currentUser, setCurrentUser] = useState(initialUser)

	useEffect(() => {
		AllData()
		.then(user => {
			setUsers(user.data)
		})
	}, [users])


	const addUser = (user) =>{
		AddData(user)
		.finally(() => {
			setTimeout(() => {
				setLoading(true)
			}, 500)
		})
		.then(() => {
			setTimeout(() => {
				setUsers([...users, user])
				setLoading(false)
			}, 2500)
		})
	}

	const detailUser = (id, user) => {
		setDetails(true)
		setCurrentUser(user)
	}

	const editUser = (id, user) => {
		setEditing(true)
		setCurrentUser(user)
	}

	const updateUser = (newUser) => {
		setUsers(
			users.map(user => user.id === currentUser.id ? newUser : user)
		)
		// console.log(newUser)
		UpdateData(newUser)
		.finally(() => {
			setTimeout(() => {
				setLoading(true)
				setEditing(false)
			}, 500)
		})
		.then(() => {
			setTimeout(() => {
				setCurrentUser(initialUser)
				setLoading(false)
			}, 2500)
		})
	}

	const deleteUser = id => {
		// console.log(id)
		DeleteData(id)
		.finally(() => {
			setTimeout(() => {
				setLoading(true)
				setAlert(false)
			}, 500)
		})
		.then(() => {
			setTimeout(() => {
				const delUser = users.filter(user => user.id !== id)
				setUsers(delUser)
				setLoading(false)
				setAlert(true)
			}, 2500)
		})
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 mt-3 mb-5">
					<h1 className="text-info text-center">{props.title}</h1>
					<hr/>
				</div>
			</div>

		{/*list dan form*/}
		<div className="row justify-content-center mb-5">

			<div className="col-md-3 mx-auto">
			{ editing ? (

				<EditForm title="Edit User" setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>
			) : (

				<AddForm title="Add New User" addUser={addUser}/>
			)

			}
			</div>

			<div className="col-md-8">
				<ListData title="List Data User" users={users} loading={loading} detailUser={detailUser} editUser={editUser} deleteUser={deleteUser} alert={alert} />
			</div>

			{ details ? (
				<Modals title="User Detail" details={details} currentUser={currentUser}/>
			) : ( 
				'' 
			)}

		</div>

		</div>
	)
}

export default Home