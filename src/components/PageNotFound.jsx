import React from 'react';
import { Route, Routes, Link} from 'react-router-dom'


const PageNotFound = () => {
  return (
    <div className="error-wrapper">
        <h1 className="error-heading">OOPS, YOU MUST HAVE TRIED TO ACCESS A WRONG URL</h1>
        <p className="error-text">here's a cute dog to keep you company in this sad emptiness</p>
        <img src="https://media.tenor.com/OreYfkCCOD4AAAAM/doggo-intensifies-dog-smile.gif" alt="" />
        <Link to={"/"}><button className="error-btn">press me to get to an actual page</button></Link>
    </div>
  );
}

export default PageNotFound;
