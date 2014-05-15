/**
 * Created by tanimoto on 5/15/14.
 */

var should = require('should');
var assert = require('assert');

describe('Test framework', function () {
    it('It should have mocha running ', function () {
        assert.equal(true, true);
    })
    it('should have should library installed', function () {
        true.should.eql(true);
    })

})