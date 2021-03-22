import React, { Fragment, useState, useEffect } from 'react'

const AddForm = props => {
	const initialUser = props.initialUser

	const [user, setUser] = useState(initialUser)
	const [error, setError] = useState(false)
	
	const clearState = () => {
		setUser({...initialUser})
	}

	const handleChange = e => {
		const {name, value} = e.target
		setUser({...user, [name]: value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if(user.username == ''){
			setError(true)
		}else{
			setError(false)
			props.addUser(user)
			// handleChange(e, props.addUser(user))
			clearState()
		}
	}

	return (
		<Fragment>
			<h3>{props.title}</h3>
			{error ? (
				<div className="alert alert-warning alert-dismissible fade show" role="alert">
				  <strong>Alert!</strong> Harap isi form user dengan benar dan sesuai.
				  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
				    <span aria-hidden="true">&times;</span>
				  </button>
				</div>
			) : (
				''
			)}

			<form>
				<div className="form-group">
			    	<label for="username">Username</label>
			    	<input type="text" className="form-control" id="username" value={user.username} name="username" onChange={handleChange}/>
			  	</div>

				<div className="form-group">
				    <label for="email">Email address</label>
				    <input type="email" className="form-control" id="email" value={user.email} name="email" onChange={handleChange}/>
				</div>

				<div className="form-group">
			    	<label for="fullname">Fullname</label>
			    	<input type="text" className="form-control" id="fullname" value={user.fullname} name="fullname" onChange={handleChange}/>
			  	</div>

			  	<div className="form-group">
			    	<label for="phone">Phone</label>
			    	<input type="text" className="form-control" id="phone" value={user.phone} name="phone" onChange={handleChange}/>
			  	</div>

			  	<div className="form-group">
			    	<label for="city">City</label>
			    	<input type="text" className="form-control" id="city" value={user.city} name="city" onChange={handleChange}/>
			  	</div>

				<div className="form-group">
			    	<label for="bio">Bio</label>
			    	 <textarea className="form-control" id="bio" name="bio" value={user.bio} onChange={handleChange} rows="3">
			    	 </textarea>
			  	</div>			  	
				
				<button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
			</form>
		</Fragment>
	)
}

export default AddForm