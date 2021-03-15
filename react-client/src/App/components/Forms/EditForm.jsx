import React, {Fragment, useState, useEffect} from 'react'

const EditForm = props => {


	useEffect(() => {
		setUser(props.currentUser)
	}, [])
	
	const [user, setUser] = useState(props.currentUser)

	const handleChange = e => {
		const {name, value} = e.target
		setUser({...user, [name]: value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if(user) props.updateUser(user)
	}

	return (
		<Fragment>
			<h3>{props.title}</h3>
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
			    	 <textarea className="form-control" id="bio" rows="3" name="bio" onChange={handleChange} value={user.bio}></textarea>
			  	</div>			  	
				
				<button type="submit" onClick={handleSubmit} className="btn btn-success mr-3">Submit</button>

				<button type="submit" onClick={() => props.setEditing(false)} className="btn btn-warning">Cancel</button>

			</form>
		</Fragment>
	)
}

export default EditForm