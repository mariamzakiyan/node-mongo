export default (app) => {
	app.use('/todo', require('./todo/index'));
}