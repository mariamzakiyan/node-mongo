export default (req, res) => {
    const id = req.params.id;

    const { title } = req.body;
    
    const updatedTodo = {
        title
    };

    req.model.findByIdAndUpdate(id, updatedTodo)
                .then( (todo) => res.redirect('/todo') )
                .catch( (e) => res.status(400).send(e));
};