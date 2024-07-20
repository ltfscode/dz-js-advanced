'use strict'

let obj = [
  {id1: 1, name: 'Вася'},
  {id2: 2, name: 'Петя'},
  {id1: 1, name: 'Вася'},
]

const uniqueId = [...new Set(obj.map(el => el.id1 || el.id2))]
const uniqueObjById = uniqueId.map(id => obj.find(el => el.id1 === id || el.id2 === id))
console.log(uniqueObjById)