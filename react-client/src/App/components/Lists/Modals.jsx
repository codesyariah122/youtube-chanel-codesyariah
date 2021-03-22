import React, { useState, useEffect } from 'react'
import CardUser from './CardUser'

const Modals = props => {
	const [user, setUser] = useState('')

	useEffect(() => {
		setUser(props.detailUser)
	}, [props.detailUser])

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
		        <CardUser user={user} />
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