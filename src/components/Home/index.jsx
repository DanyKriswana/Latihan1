import { useNavigate } from "react-router-dom"

const Home = () => {
const navigate= useNavigate()

    return(
        <div>
            <h1>Home Page</h1>
            <button role={'button'} onClick={() => {navigate('/users')}}>Users list</button>
        </div>
    )
}

export default Home