import { useNavigate } from 'react-router-dom';
import '../styles/landing.css'
function HomeButton(){
    const navigate = useNavigate();
    const handleHome = () => {
        navigate("/")
    }
    return(
    <button onClick={handleHome}>Back to Menu</button>
    )
}


export default HomeButton;