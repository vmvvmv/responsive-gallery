import React from 'react';
import DragBox from '../dragAndDrop/dragBox';
import FileUploadButton from '../fileUpload';
import './navbar.css';

const Navbar = ()=>{
  return(
    <header>
      <div>
        <FileUploadButton/>
      </div>
      <div>
        <DragBox targetKey="DragBox">
          <div className="trashBox"/>
        </DragBox>
      </div>
    </header>
  )
}

export default Navbar;