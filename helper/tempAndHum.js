const { Sequelize, Op } = require('sequelize')
const db = require('../models')
const tah = db["TempAndHum"]


// Test용 함수
const addTah = function (temp, hum) {
    tah.create({
        temperature: temp,
        humidity: hum
    })
}

// Test용 함수. 최근 3개만 지우도록 함.
const deleteTah = function () {
    tah.destroy({
        where: {
            id: [Sequelize.literal(`SELECT * FROM (SELECT id FROM tempandhum ORDER BY createdAt DESC LIMIT 3) AS tmp`)]
        }
    })
}


const getNowTah = function (callback) {
    tah.findOne({
        order: [['createdAt', 'DESC']]
    }).then((data) => {
        callback(data.dataValues)
    })
}

const getTah = function (startdate, enddate, callback) {
    if (startdate === undefined) {
        startdate = Date.now()
    }
}


module.exports = {
    getNowTah: getNowTah,
    addTah: addTah,
    deleteTah: deleteTah
}