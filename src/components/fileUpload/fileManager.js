import React, {Component} from 'react';
import {firebaseApp} from '../../firebase/firebase';
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton'
import MassonryLayout from '../massonry layout/massonry';
import DragBox from '../draggable/dragBox';



const brakePoints = [350, 500, 750];

class FileManagerContainer extends Component {
  
  state = {
    isUploading: false,
    progress: 0,
    images:[]
  };

  componentDidMount() {
    const itemsRef = firebaseApp.database().ref('images');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          url: items[item].url,
        });
      }
      this.setState({
        images: newState
      });
    });
  }

  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  handleProgress = (progress) => this.setState({progress});
  handleUploadError = (error) => {
    this.setState({isUploading: false});
    console.error(error);
  }
  handleUploadSuccess = (filename) => {
    this.setState({ progress: 100, isUploading: false});
    firebaseApp
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => {
          const itemsRef = firebaseApp.database().ref('images');
          const image = {url}
          itemsRef.push(image);
          this.setState({avatarURL: url})});
  };
  render() {
    // const images = this.state.images.map( image => image.url);
    return (
      <div>
        <header>
        <div>
        <CustomUploadButton
           accept="image/*"
           storageRef={
            firebaseApp
           .storage()
           .ref('images')}
           onUploadStart={this.handleUploadStart}
           onUploadError={this.handleUploadError}
           onUploadSuccess={this.handleUploadSuccess}
           onProgress={this.handleProgress}
           style={{
           backgroundColor: 'red',
           color: 'white',
           padding: 10,
           borderRadius: 4,
           }}>
           Upload image
        </CustomUploadButton>
        </div>
        <div>
          <DragBox targetKey="DragBox"/>
        </div>

        </header>
        <MassonryLayout images = {this.state.images} brakePoints={brakePoints} /> 

      </div>
    );
  }
}
export default FileManagerContainer;