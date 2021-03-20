import React, {Fragment} from 'react'

const ListUsers = props => {

	const users = props.users
	// console.log(users)
	
	return (
	<Fragment>
		<h4>{props.title}</h4>

		{props.alert ? (
			<div className="alert alert-success alert-dismissible fade show" role="alert">
			  <strong>Okay!</strong> Data user has been deleted.
			  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
			    <span aria-hidden="true">&times;</span>
			  </button>
			</div>
		) : (
			''
		)}

		<div className="card">
		  	<ul className="list-group list-group-flush">

			{props.loading ? (
				<li className="list-group-item">
					<span className="text-info">Loading ... </span>
				</li>
			) : (
				''
			)}

		  	{users.length > 0 ? (
		  		users.map(user => (

				<li className="list-group-item">
				   	<div className="row mx-12">
				  		<div className="col px-md-4">
				    		<h5>
				    			{user.username}
				    		</h5>
				    	</div>
				    	
						<div className="col px-md-8">
						  	<a href="javascript:void(0)" className="badge badge-success" data-toggle="modal" data-target="#Modal" onClick={() => props.DetailUser(user.id, user)} >
						  		Detail
						  	</a>
						  	<a href="javascript:void(0)" className="badge badge-info ml-3" onClick={() => props.EditUser(user.id, user)} >
						  		Edit
						  	</a>
						  	<a href="javascript:void(0)" className="badge badge-danger ml-3" onClick={() => props.DeleteUser(user.id)}>
						  		Delete
						  	</a>
						</div>
					</div>
				</li>
		  		))
		  	) : (
		  		<li className="list-group-item text-center text-danger">User not available</li>
		  	)}

		  	</ul>
		</div>
	</Fragment>
	)
}

export default ListUsers