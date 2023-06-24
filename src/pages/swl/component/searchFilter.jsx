import React from 'react';
import InputNumber from "./inputNumber.jsx";

function SearchFilter() {
    return (
        <section className="col-12 d-flex align-items-center justify-content-center">
            <div className="col-12 d-flex flex-wrap border rounded-2">
                <h4 className="col-12 d-flex align-items-center justify-content-between bg-header p-2 border-bottom">
                    Search Filters
                </h4>
                <div className="col-12 p-3 d-flex flex-wrap justify-content-center align-content-between">
                    <InputNumber text="Latitude"/>
                    <InputNumber text="Longitude"/>
                </div>
            </div>
        </section>
    );
}

export default SearchFilter;