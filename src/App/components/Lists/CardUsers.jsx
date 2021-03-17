import React from 'react'

const CardUsers = props => {
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
		        	<li>Email : {user.email}</li>
		        	<li>Fullname : {user.fullname}</li>
		        	<li>Phone : {user.phone}</li>
		        	<li>City : {user.city}</li>
		        	<li>Bio : {user.bio}</li>
		        </ul>
		        <p className="card-text"><small className="text-muted">Satus : {user.isActive === true ? 'Active' : 'Not Active'}</small></p>
		      </div>
		    </div>
		  </div>
		</div>
	)
}

export default CardUsers