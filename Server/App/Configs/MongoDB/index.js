import mongoose from 'mongoose'

export const MongoDB = () => {
	mongoose.connect(process.env.DB_URL, {
		useNewUrlParser : true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Koneksi database berhasil'))
	.catch(err => console.log(err.message))
	mongoose.set('useFindAndModify', false)
}
