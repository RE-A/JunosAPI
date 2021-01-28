const express = require('express')
const { getNowTah, getFormatDate, getTah } = require('../../helper/tempAndHum')
const router = express.Router()
const tahHelper = require('../../helper/tempAndHum')

// tah = TempAndHum

const auth = function (req, res, next) {
    // GET을 통해 API 요청을 할 때, 쿼리스트링에서 유저 토큰을 검증하는 단계이다.
    // 지금은 유저 데이터를 받아오는 과정이 없으니 사용하지 않음.
    // const token = req.query.token
    next()
}

const makeErrorResponse = function (msg) {
    return {
        isError: 1,
        reason: msg
    }
}

router.get('/now', [auth], (req, res) => {
    // 현재의 온도와 습도를 반환한다.
    getNowTah((data) => {
        res.json(data)
    })
})

router.get('/period', [auth], (req, res) => {
    // 기간별 온습도 데이터를 반환한다.
    let start = req.query.start
    let end = req.query.end
    console.log(start, end)

    if (start === undefined && end === undefined) {
        // 시작, 종료일 모두 지정되지 않았을 때 => 오늘자 데이터만 추출
        start = getFormatDate(new Date())
        end = getFormatDate(new Date())
    }

    if (start === undefined || end === undefined) {
        // 시작/종료일 중 한쪽만 지정되어 있을 때 => 에러 출력
        res.json(makeErrorResponse(`시작일, 종료일 중 한 쪽이 지정되어 있지 않습니다. 
        양쪽 모두 지정하거나, 오늘자 데이터를 원하신다면 양쪽 모두 비워주세요.`))
        return
    }

    getTah(start, end, (data) => {
        res.json(data)
    })

})


module.exports = router