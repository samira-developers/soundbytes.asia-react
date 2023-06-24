import React from 'react';
import SelectOption from "../../../features/selectOption.jsx";
import DatePickerViews from "../../../features/DatePickerViews.jsx";
import InputNumber from "./inputNumber.jsx";
import Trafic from './trafic.jsx';
import ManMadeNoise from './ManMadeNoise.jsx';
import SSNSource from './SSNSource.jsx';
import Path from './Path.jsx';

function System(props) {

    return (
        <section className="col-12 rounded-2 mt-2 d-flex flex-wrap rounded-2 border overflow-hidden">
            <div className="col-12 h3 p-2 bg-header  border-bottom">
                System
            </div>
            <div className="col-12 d-flex align-items-center flex-wrap justify-content-between p-4">
                <DatePickerViews date={props.date} setDate={props.setDate}/>
                <InputNumber text="Power" state={props.power} setState={props.setPower} />
                <Trafic trafic={props.trafic} setTrafic={props.setTrafic} />
                <ManMadeNoise manMadeNoise={props.manMadeNoise} setManMadeNoise={props.setManMadeNoise} />
                <SSNSource sSNSource={props.sSNSource} setSSNSource={props.setSSNSource} />
                <Path path={props.path} setPath={props.setPath} />
            </div>
        </section>
    );
}

export default System;