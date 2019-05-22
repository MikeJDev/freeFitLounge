
const mongoose = require('mongoose')
require('dotenv').config()
let user = 'build.me'
let pass = 'BuildMyBody3'
let host = 'ds157946.mlab.com:57946/buildme'
let mydb = `mongodb://${user}:${pass}@${host}`
mongoose.connect(`${mydb}`, { useNewUrlParser: true })

let buildSchema = new mongoose.Schema({
  //all subject to change
  id: 'number',
  title: 'string',
  category: 'string',
  image_URL: 'string',
  description: 'string',
  price: 'number'
})

let build = mongoose.model('build', buildSchema)

module.exports.build = build