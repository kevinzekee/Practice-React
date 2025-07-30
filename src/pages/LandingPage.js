import { useNavigate } from "react-router-dom"
import '../styles/landing.css'

function LandingPage(){
    const navigate = useNavigate();
    const handleNavigation = (path) =>{
        navigate(path)
    }

    return(
        <div className="main-container">
            <div className="second-container">
                <h1>Quick Menu</h1>
                <p>This is a practice repository for React Fundamentals. All concepts tackled here are discussions from my university, not all concepts of React are discussed.
                    Information posted here may be wrong, I have written the concepts in the way that I understood. Moreover, this is meant to be a simple reviewer, no fancy UI or packages, this site was made with the intention of applying concepts shown here as a practice.
                </p>
                <p>And yes, I didn't create a dashboard with a backend that actually lets me 'post' here as if it were a blog site, this is written and hard coded, and I am too lazy to create said dashboard.
                </p>
                <h2>Props</h2>
                <button className="home-buttons" onClick={() => handleNavigation('/PropsPage')}>Props Practice Code</button>
                <h2>Hooks: useState 1</h2>
                <button className="home-buttons" onClick={() => handleNavigation('/CounterPage')}>useState Practice Code</button>
                <h2>Hooks: useState 2</h2>
                <button className="home-buttons" onClick={() => handleNavigation('/TemperaturePage')}>useState Practice Code</button>
            </div>
        </div>
    )

    
}

export default LandingPage