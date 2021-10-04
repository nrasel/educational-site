import React from 'react';
import img3 from '../../components/utilities/images/notfound.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div >
           <img className="notfound" src={img3} alt="" />
        </div>
    );
};

export default NotFound;