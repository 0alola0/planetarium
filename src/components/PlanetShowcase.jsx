import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PLANETS from '../PLANETS.json'
import ImageDivision from './ImageDivision';
import StatFooter from './StatFooter';
import StatusBtns from './StatusBtns';
import TextDivision from './TextDivision';

const planetShowcase = () => {
    let {name} = useParams()
    const planet = PLANETS.find((p) => p.name == name)
    const [currentStatus, setCurrentStatus] = useState({
        status: "overview",
        text: planet.overview.content,
        image: planet.images.planet,
        source: planet.overview.source,
    })

    useEffect(() => {
        setBtnStatus("overview")
    }, [planet])

    const setBtnStatus = (value) => {
        let tempText = planet.overview.content
        let currentImage = planet.images.planet
        let tempSource = planet.overview.source
        if(value== "structure"){
            tempText = planet.structure.content
            currentImage = planet.images.internal
            tempSource = planet.structure.source
        } else if (value== "geology"){
            tempText = planet.geology.content
            currentImage = planet.images.geology
            tempSource = planet.geology.source
        } else{
            tempText = planet.overview.content
            currentImage = planet.images.planet
            tempSource = planet.overview.source
        }
        setCurrentStatus({...currentStatus, status: value, text: tempText, image: currentImage, source: tempSource})
    }
    

  return (
    <div>
        <div className="top-text-btns">
                    <StatusBtns number={"01"} active={currentStatus.status=="overview"? true : false} bgColor={planet.color} statusBtn={"overview"} btnText={"OVERVIEW"} setBtnStatus={setBtnStatus}/>
                    <StatusBtns number={"02"} active={currentStatus.status=="structure"? true : false} bgColor={planet.color} statusBtn={"structure"} btnText={"STRUCTURE"} setBtnStatus={setBtnStatus}/>
                    <StatusBtns number={"03"} active={currentStatus.status=="geology"? true : false} bgColor={planet.color} statusBtn={"geology"} btnText={"SURFACE"} setBtnStatus={setBtnStatus}/>
        </div>
        <div className="landing-container">
            <ImageDivision planet={planet} currentStatus={currentStatus}/>
            <div className="landing-text-container">
                <div className="landing-text">
                    <TextDivision planet={planet} currentStatus={currentStatus}/>
                </div>
                <div className="text-btns">
                    <StatusBtns number={"01"} active={currentStatus.status=="overview"? true : false} bgColor={planet.color} statusBtn={"overview"} btnText={"OVERVIEW"} setBtnStatus={setBtnStatus}/>
                    <StatusBtns number={"02"} active={currentStatus.status=="structure"? true : false} bgColor={planet.color} statusBtn={"structure"} btnText={"INTERNAL STRUCTURE"} setBtnStatus={setBtnStatus}/>
                    <StatusBtns number={"03"} active={currentStatus.status=="geology"? true : false} bgColor={planet.color} statusBtn={"geology"} btnText={"SURFACE GEOLOGY"} setBtnStatus={setBtnStatus}/>
                </div>
            </div>
        </div>

        <StatFooter planet={planet}/>
    </div>
  );
}

export default planetShowcase;
