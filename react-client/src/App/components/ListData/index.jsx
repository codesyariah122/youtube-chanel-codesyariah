import React, { Fragment } from 'react'

const ListData = props => {
	const users = props.users
	
	return (
		<Fragment>
			<h3>{props.title}</h3>
			{props.alert ? (
				<div className="alert alert-success alert-dismissible fade show" role="alert">
				  <strong>Alert!</strong> Delete users success.
				  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
				    <span aria-hidden="true">&times;</span>
				  </button>
				</div>
			) : (
				''
			)}
			<div className="card" >
			  <ul className="list-group list-group-flush">
			  {props.loading ? ( 
			  		<li className="list-group-item text-center">
			  			<span className="text-info">Loading data ... </span>
			  		</li>
			  ) : ( 
			  	'' 
			  )}
			  {users.length > 0 ? (
				users.map(user => (

				    <li className="list-group-item">
				    	<div className="row mx-md-5">

				    		<div className="col px-md-6">
				    			<h5>{user.username}</h5>
				    		</div>

				    		<div className="col px-md-8">
				    			<a href="#" onClick={() => props.detailUser(user.id, user)} data-toggle="modal" data-target="#Modal" className="badge badge-primary">Detail</a>

				    			<a href="#" onClick={() => props.editUser(user.id, user)} className="badge badge-info ml-2">Edit
				    			</a>

				    			<a href="#" onClick={() => props.deleteUser(user.id)} className="badge badge-danger ml-2">Delete
				    			</a>
				    		</div>

				    	</div>
				    </li>
				  ))

			  	) : (
			  		<li className="list-group-item text-center">
			  			<h4 className="text-danger">User Data Not Available</h4>
			  		</li>
			  	)}

			  </ul>
			</div>
		</Fragment>
	)
}

export default ListData