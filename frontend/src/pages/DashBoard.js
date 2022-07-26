import { useEffect,useState }from 'react'
//import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
//import classes from './DashBoard.module.css';
import StudentDashBoard from '../components/Student/Dashboard'
import LectureDashBoard from '../components/Lecture/Dashboard'

// components
//import WorkoutDetails from '../components/WorkoutDetails'
//import WorkoutForm from '../components/WorkoutForm'

const DashBoard = () => {
  //const {workouts, dispatch} = useWorkoutsContext()
  const { user } = useAuthContext();
  // create useState for answer
  const [userState, setuserState] = useState("null");

  useEffect(() => {
    // const fetchWorkouts = async () => {
    //   const response = await fetch('/api/workouts', {
    //     headers: {'Authorization': `Bearer ${user.token}`},
    //   })
    //   const json = await response.json()

    //   if (response.ok) {
    //     dispatch({type: 'SET_WORKOUTS', payload: json})
    //   }
    // }

    if (user) {
      // fetchWorkouts()
      getUserState();
      //console.log(user)
    }
  // }, [dispatch, user])
  }, [user])

  const getUserState = async () => {
    if (!user) {
      return
    }

    const response = await fetch('/api/val/userState' , {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      setuserState(json.type);
    }
  }

  if (userState === "Student") {
    return (
      // <div className={classes.DashBoard}>
      //   <h1>Student</h1>
      // </div>
      
      //send user to StudentDashBoard
      <StudentDashBoard userState={userState} />


    )
  } else if (userState === "Lecturer" || userState === "coordinator" || userState === "Lecture with coordinator") {
    return (
      // go to LectureDashBoard, send userState and user
      <LectureDashBoard userState={userState} user={user} />
      // <LectureDashBoard userState= {userState} />
    )
  } else if (userState === "don't know") {
    return (
      <h1>"DashBoard don't know"</h1>
    )
  } else {
    return (
      <h1>loading</h1>
    )
  }
    
 
 

  // return (
  //   <div className={classes.DashBoard}>
  //     {/* <div className="workouts">
  //       {workouts && workouts.map((workout) => (
  //         <WorkoutDetails key={workout._id} workout={workout} />
  //       ))}
  //     </div> */}
  //     {/* <WorkoutForm /> */}

  //     {/* add button when click go to handleClick
  //     <button onClick={handleClick}>click</button>
  //     show ok
  //     <h1>{answer}</h1> */}
  //     <h1>"src/page/DashBoard"</h1>


  //   </div>
  // )
}

export default DashBoard