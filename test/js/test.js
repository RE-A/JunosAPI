const should = require('should');
const assert = require('assert')

// mocha 라이브러리 테스트용
describe('Javascript Test', () => {
    it('Hello Test', () => {
        let a = 10
        a.should.be.equal(11)
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