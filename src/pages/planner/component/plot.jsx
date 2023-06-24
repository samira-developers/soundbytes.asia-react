import React from 'react';
import SelectOption from "../../../features/selectOption.jsx";

function Plot() {
    return (
        <section className="col-12 rounded-2 mt-2 d-flex flex-wrap rounded-2 border overflow-hidden">
            <div className="col-12 h3 p-2 bg-header  border-bottom">
                Plot
            </div>
            <div className="col-6 p-4 d-flex justify-content-center align-items-center">
               <SelectOption name="Overlay" data={["low" , "medium" , "high"]}/>
            </div>
            <div className="col-6 p-4 d-flex justify-content-center align-items-center">
                <SelectOption name="Colour" data={["low" , "medium" , "high"]} disabled={true}/>
            </div>
            <div className="col-6 p-4 d-flex justify-content-center align-items-center">
                <SelectOption name="Format" data={["low" , "medium" , "high"]}/>
            </div>
        </section>
    );
}

export default Plot;