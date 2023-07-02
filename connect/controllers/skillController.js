var Skills = require("../modules/skill");

var getAllSkills = async (req, res) => {
    var skill = await Skills.find();
    res.send(skill);
};

var getOneSkill = async (req, res) => {
    var skill = await Skills.findOne({_id: req.params.id});
    res.send(skill);
};

var postOneSkill = async (req, res) => {
    await Skills.create(req.body);
    res.send({msg:"success"});
};

var deleteSkill = async (req, res) => {
    await Skills.deleteOne({_id: req.params.id});
    res.send({msg:"deleted"});
};

var updateSkill = async (req, res) =>{
    await Skills.findByIdAndUpdate({_id:req.params.id}, req.body);
    res.send({msg:"success"});
};
var getAllUserSkill = async (req, res) =>{
    var skill = await Skills.find({userId: req.params.userId});
    res.send (skill);
}

module.exports = {
    getAllSkills,
    getOneSkill,
    postOneSkill,
    deleteSkill,
    updateSkill,
    getAllUserSkill,
}