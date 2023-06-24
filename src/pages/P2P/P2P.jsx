import React, { useState } from 'react';
import Maps from '../../features/maps';
import TextComponent from "./component/titleComponent.jsx";
import TitleComponent from "./component/titleComponent.jsx";
import Plot from "./component/plot.jsx";
import RunProductionBtn from "./component/runProductionBtn.jsx";
import System from "./component/system.jsx";
import TxSite from "./component/txSite.jsx";
import RxSite from "./component/rxSite.jsx";

function P2P() {

    const [plot, setPlot] = useState(false)
    const [date, setDate] = useState({
        year: "", month: ''
    })
    const [trafic, setTrafic] = useState("")
    const [power, setPower] = useState("")
    const [manMadeNoise, setManMadeNoise] = useState("")
    const [sSNSource, setSSNSource] = useState("")
    const [path, setPath] = useState("")

    
    const sendFormData = ()=> {
      if(Plot === true) {
        console.log(plot ,
            date ,
            trafic,
            power,
            manMadeNoise,
            sSNSource,
            path );
      }
    }


    return (
        <section className="col-12  d-flex flex-wrap">
            <TitleComponent />
            <Maps />
            <RunProductionBtn funEvent={sendFormData}/>
            <Plot plot={plot} setPlot={setPlot} />
            <System
             date={date} setDate={setDate} 
             trafic={trafic} setTrafic={setTrafic}
             power={power} setPower={setPower}
             manMadeNoise={manMadeNoise} setManMadeNoise={setManMadeNoise}
             sSNSource={sSNSource} setSSNSource={setSSNSource}
             path={path} setPath={setPath}
             />
            <TxSite />
            <RxSite />
        </section>
    );
}   

export default P2P;