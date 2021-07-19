const mongoose = require("mongoose")

mongoose
  .connect(
    "mongodb+srv://zafar:zafar@blogpost.mnpcc.mongodb.net/multivendor?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Connection Successful !")
  })
  .catch((e) => {
    console.log("Connection Error: " + e)
  })
