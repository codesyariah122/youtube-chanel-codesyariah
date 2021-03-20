import React from 'react'

const CardUsers = props => {

	const user = props.user

	return(
		<div className="card mb-3">
		  <div className="row no-gutters">
		    <div className="col-md-4">
		      <img src="..." alt="..." />
		    </div>
		    <div className="col-md-8">
		      <div className="card-body">
		        <h5 className="card-title">
		        	{user.username}
		        </h5>

		        <ul>
		        	<li>
		        		Email : <b>{user.email}</b>
		        	</li>
		        	<li>
		        		Fullname : <b>{user.fullname}</b>
		        	</li>
		        	<li>
		        		Phone : <b>{user.phone}</b>
		        	</li>
		        	<li>
		        		City : <b>{user.city}</b>
		        	</li>
		        	<li>
		        		Bio : <b>{user.bio}</b>
		        	</li>
		        </ul>

		        <p className="card-text"><small className="text-muted">
		        	Status : {(user.isActive === true) ? 'Active' : 'Not Active'}
		        </small></p>
		      </div>
		    </div>
		  </div>
		</div>
	)

}

export default CardUsers