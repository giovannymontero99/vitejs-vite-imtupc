import React, { useState, useEffect } from 'react';

const Tabla = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        let getAllData = async (url = '') => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error();
                const responseJson = await response.json()
                setUserData(responseJson)
            } catch (err) {
                console.error(err);
            }
        };
        return () => getAllData('http://localhost:8080/all');
    }, []);
    return (
        <>
            <div style={{ width: '100vw' }}>
                <table className="table table-dark" style={{ width: '90%', margin: "auto" }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Pais</th>
                            <th scope="col">Configuraciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map(user => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td> {user.nombre} </td>
                                <td> {user.apellido} </td>
                                <td> {user.email} </td>
                                <td> {user.pais} </td>
                                <td>
                                    <button id={user.id} type="button" className="btn btn-danger" onClick={e => window.confirm("Estas seguro de eliminar?")} >Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Tabla;