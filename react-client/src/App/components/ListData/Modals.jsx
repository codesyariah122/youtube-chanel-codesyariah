import React, { useState, useEffect } from 'react'

const Modals = props => {
	const [user, setUser] = useState(props.currentUser)

	useEffect(() => {
		setUser(props.currentUser)
	})

	return (
		<div className="modal fade" id="Modal" tabIndex="-1">
		  <div className="modal-dialog">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title" id="exampleModalLabel">{props.title} | {user.username}</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
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
		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		        <button type="button" className="btn btn-primary">Save changes</button>
		      </div>
		    </div>
		  </div>
		</div>
	)
}

export default Modals