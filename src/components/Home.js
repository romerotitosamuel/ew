import { Link } from 'react-router-dom'
import logo50 from '../styles/images/logoWor50px.png'


const Home = () => {
    return (<>
        <div className='homePage'>
            <div className='homeHeader'>
                <img src={logo50} alt="No hay logo" />
            </div>
            <i className="material-icons" >preview</i>
            <Link to='/add'>Hacia add</ Link>
        </div>

    </>)
}
export default Home