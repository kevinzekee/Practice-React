import { useNavigate } from 'react-router-dom';

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