import React from 'react';
import {firebaseApp, addImageToStorage} from '../../firebase';
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';

const FileUploadButton = ()=>{
  return(
    <CustomUploadButton
      accept="image/*"
      storageRef={
       firebaseApp
      .storage()
      .ref('images')}
      onUploadError={(error) => { console.error(error); }}
      onUploadSuccess={addImageToStorage}
      style={{
      backgroundColor: 'red',
      color: 'white',
      padding: 10,
      borderRadius: 4,
      }}>
      Upload image
    </CustomUploadButton>
  )
}

export default FileUploadButton;