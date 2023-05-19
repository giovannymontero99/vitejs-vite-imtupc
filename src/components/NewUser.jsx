import React, {useEffect, useState} from 'react';


const NewUser = () => {


    const [user,setUser] = useState({});
    const [responseOk,setResponseOk] = useState(false)

    const handleUser = (e)=>{
        setUser({...user, [e.target.name] : e.target.value, name: `${user.name}`});
    }

    const sendData = ()=>{
        fetch('http://localhost:8080/add',{method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(user) }).then(res => res.ok ? setResponseOk(true): null)
    }

    responseOk ? window.alert('realizado') : null;





    return (
        <div style={{ width: "100vw" }} >
            <div className="NewUser" style={{ width: "16rem", margin: "auto", border: "1px solid #00000099", padding: "1rem" }} >
                <div>
                    <label htmlFor="name" className='form-label' >Nombre</label>
                    <input name='nombre' id='name' className="form-control" type="text" required  onChange={ e => handleUser(e)  } />
                </div>
                <div>
                    <label htmlFor="otrosNombres" className='form-label' >Otros Nombres</label>
                    <input name='otrosNombres' id='otrosNombres' className="form-control" type="text" required onChange={ e => handleUser(e) }/>
                </div>
                <div>
                    <label htmlFor="apellido" className='form-label' >Apellido</label>
                    <input name='apellido' id='apellido' className="form-control" type="text" required onChange={ e => handleUser(e) } />
                </div>
                <div>
                    <label htmlFor="pais" className='form-label' >Pais</label>
                    <select name='pais' id='pais' className="form-select" required onChange={ e => handleUser(e) } >
                        <option defaultValue>- Select -</option>
                        <option value="Colombia">Colombia</option>
                        <option value="EstadosUnidos">Estados Unidos</option>
                    </select>
                </div>
                <div>
                    <button style={{margin: "1rem 0"}}  type="button" className="btn btn-dark" onClick={ sendData } >Guardar</button>
                </div>
            </div>
        </div>

    )
}

export default NewUser;