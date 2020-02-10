const router = require('express').Router();
let User = require('../models/User.model');

router.route('/').get((req,res)=>{
    User.find()
    .then(User => res.json(User))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const ProfileImage = req.body.ProfileImage;
    const Date = Date.parse(req.body.Date);
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    
    const newUser = new User({username,
        password,ProfileImage,Date,firstname,lastname});

    newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json('Error: '+ err));
    
});

router.route('/:id').get((req, res)=> {
    Exercise.findById(req.params.id)
    .then(User => res.json(User))
    .catch(err => res.status(400).json('Error: ' +err));
});
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Excersise deleted.'))
    .catch(err => res.status(400).json('Error: ' +err));
})

router.route('/update/:id').post((req, res) =>{
    User.findById(req.params.id)
   .then(User => {
   User.username = req.body.username;
   User.password = req.body.password;
   User.ProfileImage = req.body.ProfileImage;
    User.Date = Date.parse(req.body.Date);
    User.firstname = req.body.firstname;
    User.lastname = req.body.lastname;

    User.save()
    .then(() => res.json('User Updated'))
    .catch(err => res.status(400).json('Error: ' +err));
    })
    .catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;
