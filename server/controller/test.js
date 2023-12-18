const Test = require('../model/test');

const testController = async (ctx, next) => {

    const { name, age } = ctx.request.query;

    const test = await new Test({
        name,
        age: Number(age)
    });

    await test.save();

    ctx.body = {
        msg: "success",
        code: 0,
        data: 'lch love csy'
    };
};

module.exports = {
    testController
};