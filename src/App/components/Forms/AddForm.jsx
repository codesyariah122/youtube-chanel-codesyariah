import React, { Fragment, useState } from 'react'

const AddForm = props => {
	const initUser = props.initUser
	const [user, setUser] = useState(initUser)

	const clearState = () => {
		setUser({...initUser})
	}

	const handleChange = e => {
		const {name, value} = e.target
		setUser({...user, [name] : value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if(user){
			clearState()
			props.addUser(user)
		}
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
		    <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange}/>
		  </div>

		  <div className="form-group">
		    <label for="fullname">Fullname</label>
		    <input type="text" className="form-control" id="fullname" name="fullname" value={user.fullname} onChange={handleChange}/>
		  </div>

		  <div className="form-group">
		    <label for="phone">Phone</label>
		    <input type="text" className="form-control" id="phone" name="phone" value={user.phone} onChange={handleChange}/>
		  </div>

		  <div className="form-group">
		    <label for="city">City</label>
		    <input type="text" className="form-control" id="city" name="city" value={user.city} onChange={handleChange}/>
		  </div>

		  <div className="form-group">
		    <label for="bio">Bio</label>
		    <textarea class="form-control" id="bio" rows="3" name="bio" value={user.bio} onChange={handleChange}></textarea>
		  </div>

		  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
		</form>
	</Fragment>
	)
}

export default AddForm