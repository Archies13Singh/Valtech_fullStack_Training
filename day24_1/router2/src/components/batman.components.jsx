import {useNavigate,Outlet} from 'react-router-dom'


function BatmanComp(){

    let batNav = useNavigate()

    return<div>
            <button onClick={()=>batNav("/batman",{replace:true})}>Batman Page</button>
            <Outlet/>
    </div>
    
}



export default BatmanComp
