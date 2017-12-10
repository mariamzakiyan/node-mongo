
const { Router } = require('express');
const todos = Router();

import todoModel from '../../database/todo.model';

import get from './get';
import create from './create';
import deleteTodo from './delete';
import edit from './edit';
import update from './update';

todos.use( (req,res,next) => {
    req.model = todoModel;
    next();
});

todos.get('/', get(todoModel));
todos.route('/create')
        .get( (req, res) => res.render('create',{ title: "TODO - Create"}) )
        .post( create );

todos.route('/:id')
        .delete( deleteTodo )
        .get( edit )
        .put( update );

module.exports = todos;
