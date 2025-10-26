const express = require('express')
const router = express.Router()
const { add, modify, fetch, fetchOne, remove } = require('./controller')

// POST → Add new education
router.post('/add', add)

// PATCH → Modify existing education
router.patch('/modify', modify)

// POST → Fetch all education records
router.get('/fetch', fetch)

// POST → Fetch one record
router.post('/fetchOne', fetchOne)

// DELETE → Remove one record
router.delete('/remove/:id', remove)

module.exports = router
