const users = require("../models/user");

exports.getIndex = (req, res, next) => {
    return res.render("index");
};

exports.postLogin = (req, res, next) => {
    users.findOne({
        username: req.body.username,
        password: req.body.password
    }).then(user => {
        if (user) {
            if (req.body.username == "admin") {
                return res.send("MSEC{Flag_Here_Good_Luck}");
            }
            return res.send("Login thành công nhưng Lindo chỉ cho admin xem vlog thôi :v");
        }
        return res.send("Không đúng password của Lindo rồi @@");
    })
};