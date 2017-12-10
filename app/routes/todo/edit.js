export default (req, res) => {
    const id = req.params.id;

    req.model.findById(id)
                .then( (todo) => res.render('edit', {title: "TODO - EDIT", todo: todo}) )
                .catch( (e) => res.status(400).send(e));
};