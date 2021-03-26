export const handleValidationError = (err, res) => {
	let errors = Object.values(err.errors).map(el => el.message)
	let fields = Object.values(err.errors).map(el => el.path)
	let code = 400

	if(errors.length > 1) {
		const formattedErrors = errors.join(' ')
		res.status(code).send({
			message: formattedErrors, 
			fields: fields
		})
	}else{
		res.status(code).send({
			message: errors,
			fields: fields
		})
	}
}