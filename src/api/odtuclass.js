const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://odtuclass2019sum.metu.edu.tr'
})

module.exports = instance