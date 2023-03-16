import React from 'react';

const TextDivision = ({planet,currentStatus}) => {
  return (
    <div>
        <h1 className="planet-name-header">{planet.name}</h1>
        <p className="planet-text">{currentStatus.text}</p>
        <p className="source-text">Source <a href={currentStatus.source} target="_blank" className="source-anchor">Wikipedia</a></p>
    </div>
  );
}

export default TextDivision;
