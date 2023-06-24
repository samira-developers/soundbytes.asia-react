import React from 'react';
import SelectOption from "../../../features/selectOption.jsx";
import DatePickerViews from "../../../features/DatePickerViews.jsx";
import InputNumber from "./inputNumber.jsx";
import TimePicker from "../../../features/timePicker.jsx";

function Plot() {

    return (
        <section className="col-6 rounded-2 mt-2 d-flex flex-wrap rounded-2 border overflow-hidden">
            <div className="col-12 h3 p-2 bg-header  border-bottom">
                System
            </div>
            <div className="col-12 d-flex align-items-center flex-wrap justify-content-between p-4">
                <SelectOption name="SSN Source"/>
            </div>
        </section>
    );
}

export default Plot;