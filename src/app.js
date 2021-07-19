  const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const cors = require("cors");

// routes
// const adminRoutes = require("./routes/admin/auth");
const productRoutes = require("./routes/product.js");
const categoryRoutes = require("./routes/category.js");
const cartRoutes = require("./routes/cart");
const authRoutes = require("./routes/auth");
const adminAuthRoutes = require("./routes/admin/auth");
const initialDataRoutes = require("./routes/admin/initialData");


require("./db/conn");

const User = require("./models/user");

const port = process.env.PORT || 5000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(cors());
app.use(express.json());

// app.use("/api", adminRoutes);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

// app.get("/", (req, res) => {
//   res.render("index");
// });
app.get("/register", (req, res) => {
  res.render("register.hbs");
});

app.post("/register", async (req, res) => {
  try {
    const pass = req.body.password;
    const cpass = req.body.cpassword;

    if (pass === cpass) {
      const customerReg = new Customer({
        fullname: req.body.fullName,
        email: req.body.email,
        age: req.body.age,
        password: req.body.password,
        cpassword: req.body.cpassword,
      });

      const cusReg = await customerReg.save();
      res.status(200).render("login");
    } else {
      res.send("Passwords do not match");
    }
  } catch (err) {
    res.status(404).send("Error occurred :" + err);
  }
});

app.get("/login", (req, res) => {
  res.render("login.hbs");
});

app.post("/login", async (req, res) => {
  try {
    const eMail = req.body.email;
    const passWord = req.body.password;

    const userMail = await Customer.findOne({ email: eMail });

    if (userMail.password === passWord) {
      res.status(201).render("index");
    } else {
      res.send("Invalid Login details");
    }
  } catch (err) {
    res.status(404).send("Invalid Login details ");
  }
});

app.use("/api/", productRoutes);

app.use("/api/", categoryRoutes);

app.use("/api/", authRoutes);

app.use("/api", initialDataRoutes);

app.use("/api/", adminAuthRoutes);

app.use("/api", cartRoutes);

console.log(process.env.NODE_ENV )
if (process.env.NODE_ENV === "production") {
  // Step 1:
  app.use(express.static(path.resolve(__dirname, "../admin/build")));
  // Step 2:
  app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "../admin/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
