const express = require('express')
const app = express()
const parser = require('body-parser')
const morgan = require('morgan')

app.use(morgan('combined'))
app.get('/', (req, res) => {
    res.json({
        "success": true,
        data: [
            {
                'posted_date': '2018.9.12',
                'posted_by': 'Milan',
                'post': 'We are in incwell bootcamp'
            },
            {
                'posted_date': '2018.9.12',
                'posted_by': 'Utsav',
                'post': 'Busy on my programming classes'
            }
        ]
    })
})


app.post('/auth/signup', (req, res) => {
    console.log(req.body)
    res.status(200).json({ 'status': 'success' })
})

app.listen(3000)