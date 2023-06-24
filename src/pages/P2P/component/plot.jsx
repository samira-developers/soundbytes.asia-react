import React from 'react';

function Plot({plot , setPlot}) {
    return (
        <section className="col-12 rounded-2 mt-2 d-flex flex-wrap rounded-2 border overflow-hidden">
            <div className="col-12 h3 p-2 bg-header  border-bottom">
                Plot
            </div>
            <div className="col-12 p-4">
                <label className="p-2">Source Text</label>
                <input type="checkbox" checked={plot}  onChange={()=> plot ? setPlot(false) : setPlot(true)}/>
            </div>
        </section>
    );
}

export default Plot;