export default (req, res) => {
    const id = req.params.id;

    req.model.findByIdAndRemove({ _id: id })
                        .then( (todo) => res.json({ success: true, message: "TODO was successfully deleted."}) )
                        .catch( (e) => res.status(400).send(e) );

};