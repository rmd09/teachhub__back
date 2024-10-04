const { teachers, students } = require("../database/models");

const getMe = async(req, res, next) => {
    const teacher = await teachers.findById(req.jwtObject._id).populate("students", { password: 0, invitingJWT: 0 });
    if (teacher) {
        teacher.password = "";
        req.teacher = teacher;
        next();
    }
    else {
        res.status(401).send("Unauthorized");
    }
}

const changeStudent = async(req, res, next) => {
    const studentId = req.params.id;
    const teacher = await teachers.findById(req.jwtObject._id).populate("students", { password: 0 });
    const index = teacher?.students?.find((value) => {
        return value._id == studentId;
    });

    if (index) {
        try {
            const updatedStudent = await students.findByIdAndUpdate(studentId, req.body);
            next();
        } catch {
            res.status(400).send("Bad Request");
        }
    } else {
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

        req.jwtObject = { _id: newUser._id };
        req.body.needToRemember = true;

        const arrayOfStudents = req.teacher.students;
        arrayOfStudents.push(newUser._id);

        const teacherUpdated = await teachers.findByIdAndUpdate(req.teacher._id, { students: arrayOfStudents }).populate("students", { password: 0, invitingJWT: 0 });
        teacherUpdated.students.push(newUser); //Последний юзер не успевает подгрузиться, поэтому добавляем его вручную
        teacherUpdated.password = "";
        req.teacher = teacherUpdated;
        
        next();
    } catch (error) {
        console.log(error);
        res.status(400).send("Bad Request");
    }
    
}
const getNewStudentJwt = async(req, res, next) => {
    const studentId = req.params.id;
    const teacher = await teachers.findById(req.jwtObject._id).populate("students", { password: 0 });
    const index = teacher?.students?.find((value) => {
        return value._id == studentId;
    });
    if (index) {
        const student = await students.findById(studentId);
        if (!student.isRegistered) {
            req.invitingJWT = student.invitingJWT;
            next();
        } else {
            res.status(400).send("Пользователь уже зарегистрирован");
        }
    } else {
        res.status(401).send("Unauthorized");
    }
}

module.exports = {
    getMe,
    createNewStudent,
    getNewStudentJwt,
    changeStudent
}