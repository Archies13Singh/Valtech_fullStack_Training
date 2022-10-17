import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


function WonderWomenComp(){

    let qty = useParams()
    let batNav = useNavigate()

    return<div>
        <button onClick={()=>batNav("/wonderwomen"+qty,{replace:true})}>Wonderwomen Page</button>

    </div>
    
}



export default WonderWomenComp
