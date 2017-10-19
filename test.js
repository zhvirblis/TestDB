const assert = require('assert');

const qResult = require('./result');

const getDoc = require('./getDoc');

describe('Check result', function() {
    let jsonResult = JSON.parse(JSON.stringify(qResult));

    it('Check arrays', async function() {
        let doc = await getDoc;
        let jsonDoc = JSON.parse(JSON.stringify(doc));
        assert.deepEqual(jsonDoc, jsonResult);
    });
});