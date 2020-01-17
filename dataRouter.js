const express = require('express');

const router = express.Router();

const Hub = require('./data/helpers/actionModel.js')

router.get('/:id', (req, res) => { 
    console.log(Hub);
    Hub.get(req.params.id)
    .then(hubs => { 
        console.log(hubs); 
        res.status(200).json(hubs);
    })
    .catch(err => { 
        console.log(err)
        res.status(500).json({errorMessage: 'could not get request'})
    })
})

router.post('/:id', (req,res) => { 
    console.log(Hub);
    Hub.insert(req.body)
    .then(hubs => { 
        console.log(hubs); 
        res.status(200).json(hubs); 

    })
    .catch(err => { 
        console.log(err)
        res.status(500).json({errorMessage: "could not insert into database"})
    })
})

router.put('/:id', (req,res) => { 
    console.log(Hub);
    Hub.update(req.params.id, req.body)
    .then(hubs => { 
        console.log(hubs); 
        res.status(200).json(hubs); 

    })
    .catch(err => { 
        console.log(err)
        res.status(500).json({errorMessage: "could not insert into database"})
    })
})


router.delete('/:id', (req,res) => { 
    console.log(Hub);
    Hub.remove(req.params.id)
    .then(hubs => { 
        console.log(hubs); 
        res.status(200).json(hubs); 

    })
    .catch(err => { 
        console.log(err)
        res.status(500).json({errorMessage: "could not insert into database"})
    })
})

module.exports = router;



