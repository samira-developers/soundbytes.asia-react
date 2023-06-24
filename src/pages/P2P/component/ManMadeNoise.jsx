import React from 'react'

function ManMadeNoise({ manMadeNoise, setManMadeNoise }) {
  return (

    <div className='col-5 d-flex align-items-center'>
      <label className='col-3' htmlFor="sys_ssn">
        Man Made Noise
      </label>

      <select class="form-select" id="sys_mm_noise" name="sys_mm_noise"
        defaultValue={manMadeNoise}
        onChange={(e) => setManMadeNoise(e.target.value)}
      >
        <option value="CITY">City</option>
        <option value="RESIDENTIAL">Residential</option>
        <option selected="" value="RURAL">Rural</option>
        <option value="QUIETRURAL">Quiet Rural</option>
        <option value="QUIET">Quiet</option>
        <option value="NOISY">Noisy</option>
      </select>
    </div>
  )
}

export default ManMadeNoise