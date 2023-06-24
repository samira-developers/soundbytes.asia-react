// import React from 'react'

// function Test() {
//    const downloadT  = () => {
//     const element = document.createElement("a");
//     const file = new Blob([document.getElementById('myInput')?.innerText], {type: 'text/plain'});
//     element.href = URL.createObjectURL(file);
//     let uuid = Math.floor( Math.random() * (1 , 1000) + 1)
//     element.download = "myFile.txt"+uuid;
//     document.body.appendChild(element); // Required for this to work in FireFox
//     element.click();
//    }
//   return (
//     <div>
//         <div contentEditable="true" name="myInput" id="myInput">
//             rhiadsfkljflkj
//         </div>
//         <a onClick={downloadT}>hello</a>
//     </div>
//   )
// }

// export default Test



import React, { useState } from 'react';
import fs from 'fs';

function Test() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSaveFile = () => {
    const filePath = '/src/file.txt'; // آدرس فایل مورد نظر
    fs.writeFile(filePath, inputText, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleSaveFile}>ذخیره فایل</button>
    </div>
  );
}
export default Test;