const route = require("express").Router()

const { getAllTodos, addTodo } = require("./../controller/todo.controller")

route
    .get("/get", getAllTodos)
    .post("/create", addTodo)

module.exports = route