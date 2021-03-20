import React, {useState, useEffect} from 'react'
import { ListUsers, Modals, AddForm, EditForm} from '../../components'
import { AllData, AddNewUser, DeleteData, UpdateData } from '../../services/fetch'

const Home = props => {

	const SampleData = [
		{
			id: 1,
			username: 'user1',
			email: 'user1@email.com',
			fullname: 'user satu',
			phone: '6287818181',
			isActive: true,
			city: 'Jakarta',
			bio: 'Saya user satu merupakan user yang kesatu'
		},
		{
			id: 2,
			username: 'user2',
			email: 'user2@email.com',
			fullname: 'user dua',
			phone: '62878182222',
			isActive: true,
			city: 'Bandung',
			bio: 'Saya user dua merupakan user yang kedua'
		}
	]
	const initialUser = {
		id: null,
		username: '',
		email: '',
		fullname: '',
		phone: '',
		isActive: true,
		city: '',
		bio: ''
	}

	const [users, setUsers] = useState(SampleData)
	const [details, setDetails] = useState(false)
	const [detailUser, setDetailUser] = useState(initialUser)
	const [editing, setEditing] = useState(false)
	const [loading, setLoading] = useState(false)
	const [alert, setAlert] = useState(false)

	useEffect(() => {
		AllData()
		.then( user => {
			// console.log(user.data)
			setUsers(user.data)
		})
	}, [users])

	const DetailUser = (id, user) => {
		setDetails(true)
		setDetailUser(user)
	}

	const AddUser = user => {
		// user.id = users.length + 1
		// setUsers([...users, user])
		// console.log(users.length)
		AddNewUser(user)
		.finally(() => {
			setTimeout(() => {
				setLoading(true)
			}, 500)
		})
		.then(() => {
			setTimeout(() => {
				setLoading(false)
				setUsers([...users, user])
			}, 2500)
		})
	}

	const EditUser = (id, user) => {
		// console.log(id)
		setEditing(true)
		setDetailUser(user)
	}

	const UpdateUser = newUser => {
		setUsers(
			users.map(user => (user.id === detailUser.id) ? newUser : user)
		)


		UpdateData(newUser)
		.finally(() => {
			setTimeout(() =>{
				setLoading(true)
				setEditing(false)
			}, 500)
		})
		.then(() => {
			setTimeout(() => {
				setDetailUser(initialUser)
				setLoading(false)
			}, 1500)
		})

	}

	const DeleteUser = id => {
		
		DeleteData(id)
		.finally(() => {
			setTimeout(() => {
				setAlert(true)
				setLoading(true)
			}, 500)
		})

		.then(() => {
			setTimeout(() => {
				const delUser = users.filter(user => user.id !== id)
				setUsers(delUser)
				setLoading(false)
				setAlert(true)
			}, 1500)
		})
		// setUsers(
		// 	users.filter(data => data.id !== id)
		// )
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
			<div className="col-md-4 mb-5">

			{editing ? (
				<EditForm title="Edit User" setEditing={setEditing} detailUser={detailUser} UpdateUser={UpdateUser} />
			) : (
				<AddForm title="Add New User" AddUser={AddUser} initialUser={initialUser} />
			)}

			</div>
			<div className="col-md-6">
				<ListUsers title="List Users" users={users} DetailUser={DetailUser} EditUser={EditUser} DeleteUser={DeleteUser} loading={loading} alert={alert} />
			</div>

			{
				details ? (
					<Modals title="Detail Data" details={details} detailUser={detailUser}/>
				) : (
					''
				)
			}

		</div>
	</>
	)
}

export default Home