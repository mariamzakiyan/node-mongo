// import todoModel from '../../database/todo.model';

export default (req, res) => {
    const { title } = req.body;
    
    const newTodo = new req.model({
		title
	});

    newTodo.save()
            .then(() => res.redirect('/todo'))
            .catch((e) => res.status(400).send(e));
};