const { Sequelize, Op } = require('sequelize')
const moment = require('moment')
const db = require('../models')
const tah = db["TempAndHum"]

// tah : Temperature And Humidity

const getFormatDate = function (date) {
    const year = date.getFullYear()
    let month = (1 + date.getMonth())
    month = month >= 10 ? month : '0' + month
    let day = date.getDate()
    day = day >= 10 ? day : '0' + day
    return `${year}-${month}-${day}`
}


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

const getTah = function (_startdate, _enddate, callback) {

    const startdate = moment(_startdate, "YYYY-MM-DD")
    const enddate = moment(_enddate, "YYYY-MM-DD")
    if (!(startdate.isValid() && enddate.isValid())) {
        // Error
        callback([])
        return
    }
    tah.findAll({
        where: {
            createdAt: {
                [Op.between]: [startdate, enddate]
            }
        }
    }).then((data) => {
        let result = []
        data.forEach((element) => {
            result.push(element.dataValues)
        })
        callback(result)
    }).catch((err) => {
        console.log("에러 발생!", err)
        callback([])
    })
}


module.exports = {
    getNowTah: getNowTah,
    addTah: addTah,
    deleteTah: deleteTah,
    getTah: getTah,
    getFormatDate: getFormatDate
}