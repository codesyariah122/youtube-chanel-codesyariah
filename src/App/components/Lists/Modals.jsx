import React, {useState, useEffect} from 'react'
import CardUsers from './CardUsers'

const Modals = props => {
	const [user, setUser] = useState(props.currentUser)

	useEffect(() => {
		setUser(props.currentUser)
	})

	return (

		<div className="modal fade" id="ModalUser" tabIndex="-1">
		  <div className="modal-dialog">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title" id="staticBackdropLabel">{props.title} | {user.username}</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
		        <CardUsers user={user}/>
		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		        <button type="button" className="btn btn-primary">Understood</button>
		      </div>
		    </div>
		  </div>
		</div>

	)
}

export default Modals