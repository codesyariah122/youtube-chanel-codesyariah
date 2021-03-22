import React from 'react'

const CardUser = props => {
	const user = props.user

	return (
		<div className="card mb-3">
		<div className="row no-gutters">
		<div className="col-md-4">
		<img src="..." alt="..."/>
		</div>
		<div className="col-md-8">
		<div className="card-body">
		<h5 className="card-title">{user.username}</h5>
		<ul>
		<li>Email : <strong>{user.email}</strong></li>
		<li>Fullname : <strong>{user.fullname}</strong></li>
		<li>Phone : <strong>{user.phone}</strong></li>
		<li>City : <strong>{user.city}</strong></li>
		<li>Bio : <strong>{user.bio}</strong></li>
		</ul>
		</div>
		</div>
		</div>
		</div>
	)
}

export default CardUser