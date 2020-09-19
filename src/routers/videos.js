const express = require('express')
const odtuclass = require('../api/odtuclass')
const fs = require('fs').promises;

const router = express.Router()

router.post('/watchAll', async (req, res) => {
    try {
        const data = await fs.readFile(__dirname + '/../videosId.json')
        const videos = await JSON.parse(data)
        if (videos) {
            for (let i = 0; i< videos.length; i++) {
                odtuclass.post('/mod/hvp/ajax.php?contextId='+videos[i]+'&token='+req.body.token+'&action=set_finished&score=1&maxScore=1', {}, {
                    headers: {
                        'Cookie': req.body.cookie
                    }
                })
            }
        }
        
        setTimeout(() => {
            res.status(200).send()
        }, 2000)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router