const logs = [];
console.log = (val) => {logs.push(val)}
const { expect } = require('chai')
const rewire = require('rewire');
const fs = require('fs');
const code = fs.readFileSync('app.js', 'utf8');

describe('', function () {
    it('', function () {
        let appModule;
        try {
            appModule = rewire("../app.js")
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
        }
        let usingSTO
        try {
            usingSTO = appModule.__get__("usingSTO");
        } catch (e) {
            expect(true, 'Did you create `usingSTO()`?').to.equal(false);
        }
        expect(usingSTO, "`usingSTO()` should be a function.").to.be.an.instanceOf(Function);

      usingSTO()
      let strComp = (logs[logs.length-1] === "This is the first line of synchronous code.") || (logs[logs.length-1] === "This is the last line of synchronous code.")
        expect(strComp, "Your `usingSTO()` function should log a string to the console.").to.equal(false);
              //expect(true, `${logs}`).to.equal(false);

    });
});
