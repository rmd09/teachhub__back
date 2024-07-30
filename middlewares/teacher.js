const { teachers, students } = require("../database/models");

const getMe = async(req, res, next) => {
    const teacher = await teachers.findById(req.jwtObject._id).populate("students", { password: 0 });
    if (teacher) {
        teacher.password = "";
        req.teacher = teacher;
        next();
    }
    else {
        res.status(401).send("Unauthorized");
    }
}

const createNewStudent = async(req, res, next) => {
    const body = req.body;
    try {
        const newUser = await students.create({
            ...body,
            isRegistered: false
        });
        req.jwtObject = newUser._id;
        const arrayOfStudents = req.teacher.students;
        arrayOfStudents.push(newUser._id);
        const temp = await teachers.findByIdAndUpdate(req.teacher._id, { students: arrayOfStudents });
        next();
    } catch (error) {
        console.log(error);
        res.status(400).send("Bad Request");
    }
    
}

module.exports = {
    getMe,
    createNewStudent
}