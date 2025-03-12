import {Navigate,Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute= props=>{
    const jwtToken = Cookies.set('jwt_token')
    if(jwtToken === undefined){
        return <Navigate to="/"/>
    } 
    return <Route {...props}/>
}
export default ProtectedRoute