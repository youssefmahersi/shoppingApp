const mongoose = require('mongoose');
const db = mongoose.connection;
const sections = require('../Schemas/Sections.Schema')

db.once('open', async () => {
    const checkSections = await sections.findOne({
        Type: "Fruit and vegetables"
    })
    if(checkSections){
        console.log('Found Section')
    }else{
        sections.create(sectionData)
    }
})


const sectionData = [
    {
        _id: '61e16facafe3aa6023c221bb',
        Type: 'Meat and Fish'
    },
    {
        _id: '61e16facafe3aa6023c222bb',
        Type: 'Beverages'
    },
    {
        _id: '61e16facafe3aa6023c223bb',
        Type: 'Fruit and vegetables'
    },
    {
        _id: '61e16facafe3aa6023c224bb',
        Type: 'Pets'
    }
]