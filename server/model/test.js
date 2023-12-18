/**
 * @description 测试 Model
 */

const { Schema, model } = require('mongoose');

const testSchema = new Schema({
    name: String,
    age: Number,
    isGirl: Boolean
});


const TestModel = model('Test', testSchema);

module.exports = TestModel;
