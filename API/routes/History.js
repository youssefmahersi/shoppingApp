var express = require('express');
var router = express.Router();
const History = require('../Schemas/History.Schema')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const getHistory = await History.find();
  res.send(getHistory)
});

router.post('/', async (req,res,next) => {
  const {select,name,nameOption,activity} = req.body
  const newType = await History.create({
    select,
    name,
    nameOption,
    activity,
    date: new Date()
  })
  res.send(newType)
})


module.exports = router;
