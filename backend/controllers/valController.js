const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// login a user
const getUserState = async (req, res) => {
//   const {email, password} = req.body

//   try {
//     const user = await User.login(email, password)

//     // create a token
//     const token = createToken(user._id)

//     res.status(200).json({email, token})
//   } catch (error) {
//     res.status(400).json({error: error.message})
//   }
    //console.log(req.user);


    // crete json object for student data
    const student = [
        {
            "e_num": "2001e001",
            "current_batch": "E01"
        },
        {
            "e_num": "2001e002",
            "current_batch": "E01"
        },
        {
            "e_num": "2001e003",
            "current_batch": "E01"
        },
        {
            "e_num": "2001e004",
            "current_batch": "E01"
        },
        {
            "e_num": "2001e005",
            "current_batch": "E01"
        },
        {
            "e_num": "2001e006",
            "current_batch": "E01"
        },
        {
            "e_num": "2001e007",
            "current_batch": "E01"
        },
        {
            "e_num": "2001e008",
            "current_batch": "E01"
        },
        {
            "e_num": "2001e009",
            "current_batch": "E01"
        }
    ]
    // create json object for teacher data
    const teacher = [
            {
                "email": "amal@gmail.com",
                "student_e_num": [
                    "2001e001",
                    "2001e002",
                    "2001e003"
                ]
            },
            {
                "email": "isuru@gmail.com",
                "student_e_num": [
                    "2001e004",
                    "2001e005",
                    "2001e006"
                ]
            },
            {
                "email": "channa@gmail.com",
                "student_e_num": [
                    "2001e007",
                    "2001e008",
                    "2001e009"
                ]
            }
    ]
    
    // create json object for subject data
    const subject = [
        {
            "subject_ID": "AB1010",
            "subject_name": "first subject",
            "deparment": "computer",
            "corrdinator_email": "amal@gmail.com",
            "semester": "1"
        },
        {
            "subject_ID": "AB1020",
            "subject_name": "second subject",
            "deparment": "computer",
            "corrdinator_email": "isuru@gmail.com",
            "semester": "1"
        },
        {
            "subject_ID": "AB1030",
            "subject_name": "third subject",
            "deparment": "computer",
            "corrdinator_email": "amal@gmail.com",
            "semester": "1"
        },
        {
            "subject_ID": "AB1040",
            "subject_name": "fourth subject",
            "deparment": "computer",
            "corrdinator_email": "isuru@gmail.com",
            "semester": "1"
        },
        {
            "subject_ID": "AB1050",
            "subject_name": "fifth subject",
            "deparment": "computer",
            "corrdinator_email": "amal@gmail.com",
            "semester": "1"
        },
        {
            "subject_ID": "AB1060",
            "subject_name": "sixth subject",
            "deparment": "computer",
            "corrdinator_email": "channa@gmail.com",
            "semester": "1"
        }
    ]


    // function for checking if student is in the database
    const checkStudent = (e_num) => {
        for (let i = 0; i < student.length; i++) {
            if (student[i].e_num === e_num) {
                return true
            }
        }
        return false
    }
    // function for checking if teacher is in the database
    const checkLecture = (email) => {
        for (let i = 0; i < teacher.length; i++) {
            if (teacher[i].email === email) {
                return true
            }
        }
        return false
    }

    // function for checking if coordinator is in the database
    const checkCoordinator = (email) => {
        for (let i = 0; i < subject.length; i++) {
            if (subject[i].corrdinator_email === email) {
                return true
            }
        }
        return false
    }



    const myArray = req.user.email.split("@");
    let useType = ""
    if (myArray[1] == "eng.jfn.ac.lk" && checkStudent(myArray[0])) {
        useType = "Student"
    //} else if (myArray[1] == "eng.jfn.ac.lk" && checkLecture(myArray[0])) {
    } else if ( checkLecture(req.user.email)) {
        useType = "Lecture"
        if (checkCoordinator(req.user.email)) {
            useType = "Lecture with coordinator"
        }
    } else if ( checkCoordinator(req.user.email)) {
        useType = "coordinator"
    }
    else {
        useType = "don't know"
    }
    console.log(useType)

    res.status(200).json({type: useType});

}

module.exports = { getUserState }