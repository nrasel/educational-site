import React from 'react';
import background from '../utilities/images/campus-building.jpg'
import './Home.css'

const Home = () => {
    const headerImage = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '70vh'
    }
    return (
        <div>
            <div className="position-title" style={headerImage}>
                <div className="university-title">
                    <h1 className="title-fontSize">Academy University</h1>
                    <span className="lead">There is always something exciting happening in A.U</span>
                </div>
                
            </div>
            
        </div>
    );
};

export default Home;