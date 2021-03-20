import React, { Fragment, useState, useEffect } from 'react'

const EditForm = props => {

	useEffect(() => {
		setUser(props.detailUser)
	}, [])

	const [user, setUser] = useState(props.detailUser	)
	const handleChange = e => {
		const {name, value} = e.target
		setUser({...user, [name]: value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if(user.username) props.UpdateUser(user)
	}

	return (
	<Fragment>
		<h4>{props.title}</h4>
		<form>
		  <div className="form-group">
		    <label for="username">Username</label>
		    <input type="text" className="form-control" id="username" name="username" value={user.username} onChange={handleChange} />
		  </div>
		  <div className="form-group">
		    <label for="email">Email</label>
		    <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange} />
		  </div>

		  <div className="form-group">
		    <label for="fullname">Fullname</label>
		    <input type="text" className="form-control" id="fullname" name="fullname" value={user.fullname} onChange={handleChange} />
		  </div>

		  <div className="form-group">
		    <label for="phone">Phone</label>
		    <input type="text" className="form-control" id="phone" name="phone" value={user.phone} onChange={handleChange} />
		  </div>

		  <div className="form-group">
		    <label for="city">City</label>
		    <input type="text" className="form-control" id="city" name="city" value={user.city} onChange={handleChange} />
		  </div>

		  <div className="form-group">
		    <label for="bio">Bio</label>
		    <textarea class="form-control" id="bio" rows="3" name="bio" value={user.bio} onChange={handleChange}></textarea>
		  </div>

		  <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>

		  <button type="submit" className="btn btn-warning ml-3" onClick={() => props.setEditing(false)} >Cancel</button>

		</form>
	</Fragment>
	)
}

export default EditForm