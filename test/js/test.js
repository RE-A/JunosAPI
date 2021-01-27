const assert = require('assert')
const should = require('should')
const moment = require('moment')
const tempAndHum = require('../../helper/tempAndHum')


// mocha 라이브러리 테스트용
describe('온습도 측정 관련 DB 입출력 테스트', () => {

    before(() => {
        // 테스트용 데이터 작성
        tempAndHum.addTah(10, 12)
        tempAndHum.addTah(12, 14)
        tempAndHum.addTah(14, 16)
    })


    it('현재 온습도 출력 테스트', (done) => {
        tempAndHum.getNowTah((data) => {
            try {
                data.temperature.should.be.equal(10)
                data.humidity.should.be.equal(12)
                done()
            } catch (err) {
                done(err)
            }
        })

    })

    it('온습도 데이터 불러오기 테스트', (done) => {
        tempAndHum.getTah("2021-01-15", moment().format("YYYY-MM-DD"), (data) => {
            try {
                data.length.should.not.be.equal(0)
                done()
            } catch (err) {
                done(err)
            }
        })
    })

    it("온습도 데이터 불러오기 테스트- 잘못된 입력", (done) => {
        tempAndHum.getTah("12345-01-32", moment().format("YYYY-MM-DD"), (data) => {
            try {
                data.length.should.be.equal(0)
                done()
            } catch (err) {
                done(err)
            }
        })
    })


    after(() => {
        tempAndHum.deleteTah()
    })

})
