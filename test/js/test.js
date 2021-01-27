const should = require('should');
const assert = require('assert')
const tempAndHum = require('../../helper/tempAndHum')


// mocha 라이브러리 테스트용
describe('온습도 측정 관련 DB 입출력 테스트', () => {

    before(() => {
        // 테스트용 데이터 작성
        tempAndHum.addTah(10, 12)
        tempAndHum.addTah(12, 14)
        tempAndHum.addTah(14, 16)
    })


    it('현재 온습도 출력 테스트', () => {
        const nowTempAndHum = tempAndHum.getNowTah((data) => {
            data.temperature.should.be.equal(14)
            data.humidity.should.be.equal(16)
        })
    })



    after(() => {
        tempAndHum.deleteTah()
    })
})

// 예제
// var user = {
//     name: 'tj'
//   , pets: ['tobi', 'loki', 'jane', 'bandit']
// };

// user.should.have.property('name', 'tj');
// user.should.have.property('pets').with.lengthOf(4);

// // if the object was created with Object.create(null)
// // then it doesn't inherit `Object` and have the `should` getter
// // so you can do:

// should(user).have.property('name', 'tj');
// should(true).ok;

// someAsyncTask(foo, function(err, result){
//   should.not.exist(err);
//   should.exist(result);
//   result.bar.should.equal(foo);
// });