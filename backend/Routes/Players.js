const router = require('express').Router();
let Player = require('../models/Player.model');

router.route('/').get((req,res)=>{
    Player.find()
    .then(Player => res.json(Player))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const Alias = req.body.Alias;
    const name = req.body.name;
    const Dmgdone = Number(req.body.Dmgdone);
    const Elim = Number(req.body.Elim);
    const Objkills = Number(req.body.Number);
    const Assists= Number(req.body.Assists);
    const Healed = Number(req.body.Healed);
    const Role = req.body.Role;
    
    const newPlayer = new Player({Alias,name,Dmgdone,Elim,Objkills,Assists,Healed,Role});

    newPlayer.save()
    .then(() => res.json('Player Added!'))
    .catch(err => res.status(400).json('Error: '+ err));
    
});

module.exports = router;