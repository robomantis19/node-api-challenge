const express = require('express');
const Hub = require('./data/helpers/projectModel.js');

router = express.Router();



router.get('/:id', (req, res) => {
    console.log()
    Hub.get(req.param.id)
    .then(hubs => { 
        console.log(hubs);
        res.status(200).json(hubs)
    })
    .catch(hubs => { 
        console.log(hubs);
        res.status(500).json({errorMessage: "error in get request"})

    })
})

router.post('/:id', (req, res) => {
    console.log()
    Hub.insert(req.body)
    .then(hubs => { 
        console.log(hubs);
        res.status(200).json(hubs)
    })
    .catch(hubs => { 
        console.log(hubs);
        res.status(500).json({errorMessage: "error in post request"})

    })
})


router.put('/:id', (req, res) => {
    console.log()
    Hub.update(req.params.id, req.body)
    .then(hubs => { 
        console.log(hubs);
        res.status(200).json(hubs)
    })
    .catch(hubs => { 
        console.log(hubs);
        res.status(500).json({errorMessage: "error in get put request"})

    })
})

router.delete('/:id', (req, res) => { 
    console.log()
    Hub.remove(req.params.id)
    .then(hubs => { 
        console.log(hubs);
        res.status(200).json(hubs)
    })
    .catch(hubs => { 
        console.log(hubs); 
        res.status(500).json({errorMessage: "error in delete request."})
    })
})
router.get('/:id', (req, res) => { 
    console.log()
    Hub.getProjectActions(req.params.id)
    .then(hubs => { 
        console.log(hubs);
        res.status(200).json(hubs)
    })
    .catch(hubs => { 
        console.log(hubs); 
        res.status(500).json({errorMessage: "error in delete request."})
    })
})




module.exports = router; 