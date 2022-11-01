var express = require('express');
const { db } = require('../Schemas/Sections.Schema');
var router = express.Router();
const sections = require('../Schemas/Sections.Schema')

const sectionData = [
  {
      Type: 'Fruit and vegetables'
  },
  {
      Type: 'Meat and Fish'
  },
  {
      Type: 'Beverages'
  },
  {
      Type: 'Pets'
  }
]

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const Section = await sections.find();
  res.send(Section)
});

router.post('/', async (req,res,next) => {
  const {_id,Type} = req.body
  const newSections = await sections.create({
    _id,
    Type
  })
  res.send(newSections)
})

module.exports = router;
