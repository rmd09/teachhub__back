const { students, teachers} = require("../database/models");
const bcrypt = require("bcryptjs");

const checkEmptyFields = (req, res, next) => {
    const username = req.body?.username;
    const password = req.body?.password;
    
    if (username && password && username != "" && password != "") {
        next();
    }
    else {
        res.status(400).send({ message: "Заполните все поля!" });
    }
}

const checkHasFieldsGreateValue = (req, res, next) => {
    const username = req.body.username;
    if (username.includes(" ")) {
        res.status(400).send({ message: "Имя пользователя не должно содержать пробелов!" });
    }
    else {
        next();
    }
}

const checkUniqueTeacherUsername = async(req, res, next) => {
    const temp = await teachers.exists({ username: req.body.username });
    if (temp) {
        res.status(400).send({ message: "Пользователь с таким именем уже существует" });
    }
    else {
        next();
    }
    
}

const checkUniqueStudentUsername = async(req, res, next) => {
    const temp = await students.exists({ username: req.body.username });
    if (temp) {
        res.status(400).send({ message: "Пользователь с таким именем уже существует" });
    }
    else {
        next();
    }
    
}

const hashPassword = async(req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

const createNewTeacher = async(req, res, next) => {
    try {
        const newTeacher = await teachers.create({
            username: req.body.username,
            password: req.body.password
        });
        req.jwtObject = { _id: newTeacher._id.toString(), username: newTeacher.username };
        newTeacher.password = "";
        req.userCreated = newTeacher;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
const fillUsernameAndPasswordOfStudent = async(req, res, next) => {
    try {
        const student = await students.findByIdAndUpdate(req.student._id, { username: req.body.username, 
                                                                            password: req.body.password, 
                                                                            isRegistered: true, 
                                                                            invitingJWT: "" }
        );
        student.invitingJWT = ""; //Не успевает подгрузить изменения, поэтому делаем вручную
        req.jwtObject = { _id: student._id, username: student.username };
        req.userCreated = student;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    checkEmptyFields,
    checkUniqueTeacherUsername,
    checkUniqueStudentUsername,
    hashPassword,
    createNewTeacher,
    checkHasFieldsGreateValue,
    fillUsernameAndPasswordOfStudent
}