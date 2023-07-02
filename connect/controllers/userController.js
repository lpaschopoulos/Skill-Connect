var User = require ("../modules/user.js");
const bcrypt = require ("bcrypt");
var jwt = require ("jsonwebtoken");

var signup = async (req, res) => {
    var checkUser = await User.findOne({email: req.body.email});
    if (checkUser){
        res.send({msg: "email already exist"});
        return;
    }
    bcrypt.genSalt(10, function (err, salt){
        bcrypt.hash(req.body.password, salt, async (err, hash)=>{
            var user = {email: req.body.email, password:hash};
            var createdUser = await User.create(user);
            var token = jwt.sign({id: createdUser._id}, "c21");
            res.send ({token});
            // res.send ({msg: "user saved successfully"});
        });
    });
};

var login = async (req, res) => {
    var user = await User.findOne({email: req.body.email});
    if(User){
        bcrypt.compare(req.body.password, user.password, function (err, result){
            if (result){
                //we create a token and then we send it back to the front
                //payload+token ===> token
                var token = jwt.sign({id: user._id}, "c21");
                res.send ({token});
            } else {
                res.send ({msg: "wrong password"});
            }
        });
    } else{
        res.send ({msg: "wrong email"});
    }


};

var verify = async (req, res) =>{
    if (!req.body.token){
        res.send({msg:false});

    }
    try {
        var payload = jwt.verify(req.body.token, "c21");
        if (payload){
            var user = await User.findOne({ _id:payload.id});
            if(user){
                var token = jwt.sign({ id: user._id}, "c21");
                res.send(user);
            } else {
                res.send("Invalid Token");
            }
        } else {
            res.send ("Invalid Token");
        }
    } catch (err) {
        res.send ("Invalid Token");
    }
};

module.exports ={
    signup,
    login,
    verify,
};
