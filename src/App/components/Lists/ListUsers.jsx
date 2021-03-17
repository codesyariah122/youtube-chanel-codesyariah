import React, {Fragment} from 'react'

const ListUsers = props => {

	const users = props.users

	return (
	<Fragment>
		<h4>{props.title}</h4>
		<div className="card">
		  <ul className="list-group list-group-flush">
		  {users.length > 0 ? (
		  	users.map(user => (
		    <li className="list-group-item">
		    	<div className="row mx-md-12">
		  			<div className="col px-md-4">
		    			<h5>{user.username}</h5>
		    		</div>
		    	
				  	<div className="col px-md-8">
				  		<a href="javascript:void(0)" onClick={() => props.detailUser(user.id, user)} className="badge badge-success" data-toggle="modal" data-target="#ModalUser">
				  			Detail
				  		</a>
				  		<a href="javascript:void(0)" className="badge badge-info ml-3" onClick={() => props.editUser(user.id, user)}>
				  			Edit
				  		</a>
				  		<a href="javascript:void(0)" className="badge badge-danger ml-3" onClick={() => props.deleteUser(user.id)}>
				  			Delete
				  		</a>
				  	</div>
			  	</div>
		    </li>
		  	))
		  ) : (
		  	<li className="list-group-item">Data user not available</li>
		  )}

		  </ul>
		</div>
	</Fragment>
	)
}

export default ListUsers