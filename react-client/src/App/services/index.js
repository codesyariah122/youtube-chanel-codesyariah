export const AllData = async() => {
	try{
		const res = await fetch('http://localhost:8081/api/data/show')
		return res.json()
	}catch(err){
		console.log(err)
	}
}


export const AddData = async(user) => {
	try{
		return await fetch('http://localhost:8081/api/data/store', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: user.username,
				email: user.email,
				fullname: user.fullname,
				phone: user.phone,
				isActive: user.isActive,
				city: user.city,
				bio: user.bio
			})
		}).then(res=>res.json())
	}catch(err){
		console.log(err.message)
	}
}

export const UpdateData = async(user) => {
	try{
		return await fetch(`http://localhost:8081/api/data/updated/${user.id}`, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: user.username,
				email: user.email,
				fullname: user.fullname,
				phone: user.phone,
				isActive: user.isActive,
				city: user.city,
				bio: user.bio
			})
		})
		.then(res => res.json())
	}catch(err){
		console.log(err)
	}
}


export const DeleteData = async(id) => {
	try{
		// console.log(id)
		return await fetch(`http://localhost:8081/api/data/deleted/${id}`, {
				method: 'DELETE'
		})
	}catch(err){
		console.log(err)
	}
	
}