var express = require('express');
var router = express.Router();
const options = require('../Schemas/Options.Schema')


/* GET users listing. */
router.get('/', async (req, res, next) => {
  const {Type} = req.body
  const getSections = await options.find({
    Type: Type
  })
  res.send(getSections)
});

router.post('/', async (req,res,next) => {
  const {name,note,image,category} = req.body
  const newOption = await options.create({
    name,
    note,
    image,
    category
  })
  res.send(newOption)
})

router.put('/', async (req,res,next) => {
  const {_id,pcs} = req.body
  const updateOptions = await options.findByIdAndUpdate(_id,{
    pcs
  })
  res.send(updateOptions)
})

module.exports = router;
