const express = require('express')
const router = express.Router()

const auth = require('./auth')
const userRoutes = require('./users')
const projectRoutes = require('./projects')
const bugRoutes = require('./bugs')

router.get('/', (req, res) =>{
  res.send('hello world!!')
})

router.use('/api/v1', auth)
router.use('/api/v1', userRoutes)
router.use('/api/v1', projectRoutes)
router.use('/api/v1', bugRoutes)

module.exports = router;
