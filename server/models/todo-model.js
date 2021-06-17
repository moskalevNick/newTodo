const { Schema, model } = require("mongoose")

const schema = new Schema({
    todo: { type: String, required: true },
    important: { type: Boolean, required: true },
    checked: { type: Boolean, required: true },
  })

module.exports = model("Todo", schema)