import React, {useState, useEffect} from 'react'
import {AllData, AddData, UpdateData, DeleteData} from '../../services'
import {ListUsers, Modals, AddForm, EditForm} from '../../components'

const Home = props => {

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
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(false)
	const [alert, setAlert] = useState(false)
	const [error, setError] = useState(null)
	const [details, setDetails] = useState(false)
	const [editing, setEditing] = useState(false)
	const [detailUser, setdetailUser] = useState(initialUser)

	useEffect(() => {
		AllData()
		.then(user => {
			setUsers(user.data)
		})
	}, [users])


	const AddUser = (user) =>{
		AddData(user)
		.finally(() => {
			setTimeout(() => {
				setLoading(true)
			}, 500)
		})

		.then(res => {
			console.log(res)
			setTimeout(() => {
				setUsers([...users, user])
				setError(res.message)
				setLoading(false)
			}, 1000)
		})
		.catch(err => {
			console.log(err)
		})
	}

	const DetailUser = (id, user) => {
		setDetails(true)
		setdetailUser(user)
	}

	const EditUser = (id, user) => {
		setEditing(true)
		setdetailUser(user)
	}

	const UpdateUser = (newUser) => {
		setUsers(
			users.map(user => user.id === detailUser.id ? newUser : user)
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
				setdetailUser(initialUser)
				setLoading(false)
			}, 2500)
		})
	}

	const DeleteUser = id => {
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

				<EditForm title="Edit User" setEditing={setEditing} detailUser={detailUser} UpdateUser={UpdateUser}/>
			) : (

				<AddForm title="Add New User" AddUser={AddUser} initialUser={initialUser} error={error}/>
			)

			}
			</div>

			<div className="col-md-8">
				<ListUsers title="List Data User" users={users} loading={loading} DetailUser={DetailUser} EditUser={EditUser} DeleteUser={DeleteUser} alert={alert} setAlert={setAlert} />
			</div>

			{ details ? (
				<Modals title="User Detail" details={details} detailUser={detailUser}/>
			) : ( 
				'' 
			)}

		</div>

		</div>
	)
}

export default Home