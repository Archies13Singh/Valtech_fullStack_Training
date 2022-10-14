import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"


let Users = ()=>{
    let [heroes, setHeroes] = useState([])
    let [nhero, createHero] = useState({ title : '', firstname : '', lastname : ''})
    let [ehero, modifyHero] = useState({ _id:'', title : '', firstname : '', lastname : ''});
    let [toggle, toggleHandler] = useState(false);
    // read
    let refresh = ()=>{
        axios.get("http://localhost:2525/data").then(res=>{
            setHeroes(res.data)
        })
    }

    useEffect(()=>{
       refresh()
    },[])

    // create
    let addHero = ()=>{
        axios.post("http://localhost:2525/data",nhero).then(res=>{
            createHero({ title : '', firstname : '', lastname : ''})
            refresh();
        }).catch(err => console.log("Error ", err))
    }
    let clickHandler = (evt)=>[
        createHero({...nhero,[evt.target.id]:evt.target.value})
    ]
    // delete
    let deleteHero = (hid)=>{
        axios.delete("http://localhost:2525/delete/"+hid).then(res=>refresh()).catch(err=>console.log(err))
    }


    // update
    let clickUpdateHandler = (evt)=>{
        modifyHero({...ehero, [evt.target.name] : evt.target.value})
    }
    let updateHero = ()=>{
        axios.post("http://localhost:2525/update/"+ehero._id, ehero).then(res=>{
            refresh();
            modifyHero({ _id:'', title : '', firstname : '', lastname : ''})
            toggleHandler(false)
        }).catch(err => console.log("Error ", err))
    }

    let editHero = (hid)=>{
        axios.get("http://localhost:2525/edit/"+hid).then(res => {
            modifyHero(res.data);
            toggleHandler(true)
        })
    }
 

    return<div>
        <h2>Users List</h2>
        {!toggle &&<div>
            <h3>Create Hero</h3>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input value={nhero.title} onInput={(evt)=> clickHandler(evt) } className="form-control" id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <input value={nhero.firstname} onInput={(evt)=> clickHandler(evt) } className="form-control" id="firstname" />
            </div>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <input value={nhero.lastname} onInput={(evt)=> clickHandler(evt) } className="form-control" id="lastname" />
            </div>
            <button onClick={addHero} type="submit" className="btn btn-primary">Submit</button>
 
        </div>}
        {
            toggle && <div>
            <h3>Update Hero</h3>
            <div className="mb-3">
                <label htmlFor="edit_title" className="form-label">Title</label>
                <input name="title" value={ehero.title} onInput={(evt)=> clickUpdateHandler(evt) } className="form-control" id="edit_title" />
            </div>
            <div className="mb-3">
                <label htmlFor="edit_firstname" className="form-label">First Name</label>
                <input name="firstname" value={ehero.firstname} onInput={(evt)=> clickUpdateHandler(evt) } className="form-control" id="edit_firstname" />
            </div>
            <div className="mb-3">
                <label htmlFor="edit_lastname" className="form-label">Last Name</label>
                <input name="lastname" value={ehero.lastname} onInput={(evt)=> clickUpdateHandler(evt) } className="form-control" id="edit_lastname" />
            </div>
            <button onClick={updateHero} type="submit" className="btn btn-primary">Update Hero</button>

        </div>
        }
        <table className="table">
            <thead> 
                <tr>
                <th scope="col">Si#</th>
                <th scope="col">Title</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                </tr>
            </thead>
            <tbody>
                {
                    heroes.map(function(hero,idx){
                        return<tr key={hero._id}>
                        <td>{idx+1}</td>
                        <td>{hero.title}</td>
                        <td>{hero.firstname}</td>
                        <td>{hero.lastname}</td>
                        <button onClick={()=>editHero(hero._id)}  className="btn btn-primary" style={{color:"black"}}>Edit</button>
                        <button onClick={()=>deleteHero(hero._id)}  className="btn btn-danger" style={{color:"black"}}>Delete</button>
                    </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}




export default Users