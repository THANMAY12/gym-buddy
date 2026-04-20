import React, { useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()
  const{user}=useAuthContext()


  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/workouts`,{
        headers:{
          'Authorization':`Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
      }
    }
    if (!user || !user.token) return
        fetchWorkouts()
    
  }, [dispatch,user])
      if (!workouts) {
  return <p>Loading workouts...</p>
}
  return (
    <div className='home'>
           
        
      <div className='workouts'>
         <div className="workout-details">
          Total Workouts: {workouts?.length || 0}
      </div>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
          {workouts && workouts.length === 0 && (
          <div className="empty">
            <h3>No workouts yet</h3>
            <p>Add your first workout to get started</p>
          </div>
        )}
      </div>

      <WorkoutForm />
    </div>
  )
}

export default Home