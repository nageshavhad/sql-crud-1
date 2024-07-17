const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    pool.query(`insert into car 
        (id,car_name,car_model,fuel_type)
        values
        (${req.body.id},"${req.body.carname}","${req.body.carmodel}","${req.body.fueltype}")`, (err, result) => {
        console.log(err, result)
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(result)
        }
    })
})

router.get('/', (err, res) => {
    pool.query(`select * from car`, (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(result)
        }
    })
})

router.get('/:id', (req, res) => {
    pool.query(`select * from car where id = ${req.params.id}`, (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(result)
        }
    })
})

router.put('/:id', (req, res) => {
    pool.query(`update car set car_name ="${req.body.car_name}" where id = ${req.params.id}`,
        (err, result) => {
            if (err) {
                res.status(500).send(err)
            }
            else {
                res.status(200).send(result)
            }
        })
})

router.delete('/:id', (req, res) => {
    pool.query(`delete from car where id =${req.params.id}`, (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(result)
        }
    })
})
module.exports = router