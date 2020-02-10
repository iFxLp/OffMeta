const router = require('express').Router();
let League = require('../models/League.model');

router.route('/').get((req,res)=>{
    League.find()
    .then(League => res.json(League))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
   const name = req.body.name;
   const id = req.body.id;
   const Size = Number(req.body.Size);
   const scoringFormat = req.body.name;
   const logo = req.body.logo;
    
    const newUser = new User({name,id,Size,scoringFormat,logo});

    newLeague.save()
    .then(() => res.json('League Added!'))
    .catch(err => res.status(400).json('Error: '+ err));
    
});