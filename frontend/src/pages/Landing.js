import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div className="landing">
      
      <div className="hero">
        <h1>Track Your Workouts Smarter </h1>
        <p>
          Log your exercises, track reps & weight, and stay consistent with your fitness journey.
        </p>

        <div className="buttons">
          <Link to="/signup" className="btn primary">Get Started</Link>
          <Link to="/login" className="btn outline">Login</Link>
        </div>
      </div>

      <div className="features">
        <div className="card">
          <h3>Track Progress</h3>
          <p>Monitor your reps, weight, and improvement over time.</p>
        </div>

        <div className="card">
          <h3>Stay Consistent</h3>
          <p>Keep all your workouts organized in one place.</p>
        </div>

        <div className="card">
          <h3>Secure</h3>
          <p>Your data is protected with authentication.</p>
        </div>
      </div>

    </div>
  )
}

export default Landing