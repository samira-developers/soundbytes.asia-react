import React from 'react'

function Path({path , setPath}) {
    return (
        <div className='col-5 d-flex align-items-center'>
            <label className='col-3' htmlFor="sys_ssn">
                Path
            </label>
            <select class="form-select" id="sys_path_sorl" name="sys_path_sorl"
                defaultValue={path}
                onChange={(e) => setPath(e.target.value)}
            >
                <option value="SHORTPATH">Short Path</option>
                <option value="LONGPATH">Long Path</option>
            </select>
        </div>
    )
}

export default Path