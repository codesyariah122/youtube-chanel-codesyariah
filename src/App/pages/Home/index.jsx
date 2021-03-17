import React, { useState } from 'react'
import { ListUsers, Modals, AddForm, EditForm} from '../../components'


const Home = props => {
	const userdata = [
		{
			id: 1,
			username: 'user1',
			email: 'user1@email.com',
			fullname: 'user satu',
			phone: '6288817889',
			isActive: true,
			city: 'Jakarta',
			bio: 'Saya User Satu adalah sebuah user yang kesatu'
		}
	]

	const initUser = {
		id: null,
		username: '',
		email: '',
		fullname: '',
		phone: '',
		isActive: true,
		city: '',
		bio: ''
	}

	const [users, setUsers] = useState(userdata)
	const [details, setDetails] = useState(false)
	const [editing, setEditing] = useState(false)
	const [currentUser, setCurrentUser] = useState(initUser)

	const detailUser = (id, user) => {
		setDetails(true)
		setCurrentUser(user)
	}

	const addUser = user => {
		// console.log(user)
		user.id = users.length + 1
		setUsers([...users, user])
	}

	const editUser = (id, user) => {
		setEditing(true)
		setCurrentUser(user)
	}

	const updateUser = newUser => {
		setUsers(
			users.map(user => (user.id === currentUser.id ? newUser : user))
		)
		// console.log(newUser)
		setCurrentUser(initUser)
		setEditing(false)
	}

	const deleteUser = id => {
		setUsers(users.filter(d => d.id !== id))
	}

	return (
	<>
		<div className="row justify-content-center">
			<div className="col-12 mt-5 mb-5">
				<h1 className="text-primary text-center">{props.title}</h1>
				<hr/>
			</div>

		</div>

		<div className="row justify-content-center mt-3">
			<div className="col-md-4">
				
				{editing ? (

					<EditForm title="Edit User" setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>
				) : (

					<AddForm title="Add New User" addUser={addUser} initUser={initUser}/>
				)}

			</div>
			<div className="col-md-6">
				<ListUsers title="List Users" users={users} detailUser={detailUser} editUser={editUser} deleteUser={deleteUser}/>
			</div>

			{details ? (
				<Modals title="Detail Data" details={details} currentUser={currentUser}/>
			) : (
				''
			)}

		</div>
	</>
	)
}

export default Home