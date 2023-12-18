const router = require('koa-router')();
// controller import
const { testController } = require('./controller/test')



const ROOT_API = '/apis';

// router constant
const test = `${ROOT_API}/test`;


// router + controller
router.get(test, testController);


module.exports = router;
