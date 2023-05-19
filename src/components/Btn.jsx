import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Btn.css';

const Btn = () => {

    const [isBtnActive, setIsBtnActive] = useState(false);

    return (
        <>
            <div className={`hamburger hamburger--collapse ${isBtnActive ? "is-active" : ""}`} onClick={e => setIsBtnActive(!isBtnActive)} >
                <div className="hamburger-box" >
                    <div className="hamburger-inner"></div>
                </div>
            </div>
            <div className={`nav ${isBtnActive ? "nav-active" : "" }`} >
                <div>
                    <div>
                        <Link to={"/"} onClick={e => setIsBtnActive(!isBtnActive)} >Usuarios</Link>
                    </div>
                    <div>
                        <Link to={"/new"} onClick={e => setIsBtnActive(!isBtnActive)} >Nuevo usuario</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Btn;