const mongoose = require('mongoose');
const db = mongoose.connection;
const options = require('../Schemas/Options.Schema')

db.once('open', async () => {

    const checkOptions = await options.findOne({
        name: "beef"
    })
    if(checkOptions){
        console.log('Found Option')
    }else{
        options.create(optionsData)
    }
})

const optionsData = [
    {
        name: 'beef',
        note: "Lean meats",
        image: "",
        category: '61e16facafe3aa6023c221bb',
    },
    {
        name: 'pumpkin',
        note: "Lean meats",
        image: "",
        category: '61e16facafe3aa6023c221bb'
    },
    {
        name: 'lamb',
        note: "Lean meats",
        image: "",
        category: "61e16facafe3aa6023c221bb"
    },
    {
        name: 'veal',
        note: "Lean meats",
        image: "",
        category: "61e16facafe3aa6023c221bb"
    },
    {
        name: 'kangaroo',
        note: "Lean meats",
        image: "",
        category: "61e16facafe3aa6023c221bb"
    },
    {
        name: 'lean (lower salt) sausages',
        note: "Lean meats",
        image: "",
        category: "61e16facafe3aa6023c221bb"
    },
    {
        name: 'chicken',
        note: "Poultry",
        image: "",
        category: "61e16facafe3aa6023c221bb"
    },
    {
        name: 'duck',
        note: "Poultry",
        image: "",
        category: "61e16facafe3aa6023c221bb"
    },
    {
        name: 'fish',
        note: "Fish and seafood",
        image: "",
        category: "61e16facafe3aa6023c221bb"
    },
    {
        name: 'prawns',
        note: "Fish and seafood",
        image: "",
        category: "61e16facafe3aa6023c221bb"
    },
    {
        name: 'crab',
        note: "Fish and seafood",
        image: "",
        category: "61e16facafe3aa6023c221bb"
    },
    {
        name: 'fine Dining Restaurants',
        note: "Beverage ",
        image: "",
        category: "61e16facafe3aa6023c222bb"
    },
    {
        name: 'casual Dining Restaurants',
        note: "Beverage ",
        image: "",
        category: "61e16facafe3aa6023c222bb"
    },
    {
        name: 'cafes',
        note: "Beverage ",
        image: "",
        category: "61e16facafe3aa6023c222bb"
    },
    {
        name: 'specialty Restaurants',
        note: "Beverage ",
        image: "",
        category: "61e16facafe3aa6023c222bb"
    },
    {
        name: 'bars',
        note: "Beverage ",
        image: "",
        category: "61e16facafe3aa6023c222bb"
    },
    {
        name: 'cafeterias',
        note: "Beverage ",
        image: "",
        category: "61e16facafe3aa6023c222bb"
    },
    {
        name: 'fast Food Restaurants',
        note: "Beverage ",
        image: "",
        category: "61e16facafe3aa6023c222bb"
    },
    {
        name: 'lettuce',
        note: "leafy green",
        image: "",
        category: "61e16facafe3aa6023c223bb"
    },
    {
        name: 'silverbeet',
        note: "leafy green ",
        image: "",
        category: "61e16facafe3aa6023c223bb"
    },
    {
        name: 'cabbage',
        note: "cruciferous ",
        image: "",
        category: "61e16facafe3aa6023c223bb"
    },
    {
        name: 'cauliflower',
        note: "cruciferous ",
        image: "",
        category: "61e16facafe3aa6023c223bb"
    },
    {
        name: 'brussels sprouts',
        note: "cruciferous ",
        image: "",
        category: "61e16facafe3aa6023c223bb"
    },
    {
        name: 'cucumber',
        note: "marrow ",
        image: "",
        category: "61e16facafe3aa6023c223bb"
    },
    {
        name: 'zucchini',
        note: "marrow ",
        image: "",
        category: "61e16facafe3aa6023c223bb"
    },
    {
        name: 'potato',
        note: "root ",
        image: "",
        category: "61e16facafe3aa6023c223bb"
    },
    {
        name: 'sweet potato',
        note: "root ",
        image: "",
        category: "61e16facafe3aa6023c223bb"
    },
    {
        name: 'yam',
        note: "root ",
        image: "",
        category: "61e16facafe3aa6023c223bb"
    },
    {
        name: 'dogs',
        note: "Pets",
        image: "",
        category: "61e16facafe3aa6023c224bb"
    },
    {
        name: 'cats',
        note: "Pets",
        image: "",
        category: "61e16facafe3aa6023c224bb"
    },
    {
        name: 'birds',
        note: "Pets",
        image: "",
        category: "61e16facafe3aa6023c224bb"
    },
    {
        name: 'rabbits',
        note: "Pets",
        image: "",
        category: "61e16facafe3aa6023c224bb"
    },
    {
        name: 'guinea pig',
        note: "Pets",
        image: "",
        category: "61e16facafe3aa6023c224bb"
    },
    {
        name: 'ferret',
        note: "Pets",
        image: "",
        category: "61e16facafe3aa6023c224bb"
    },
    {
        name: 'hamsters',
        note: "Pets",
        image: "",
        category: "61e16facafe3aa6023c224bb"
    },
    {
        name: 'reptiles',
        note: "Pets",
        image: "",
        category: "61e16facafe3aa6023c224bb"
    },
]