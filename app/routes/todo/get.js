// import todoModel from '../../database/todo.model';

export default (todoModel) => {
    return (req, res) => {
        todoModel.find()
        .then((todos) => res.render('index',{ title: "TODO - Homepage", todos: todos }))
        .catch((e) => res.status(400).json(e));
    }
};
