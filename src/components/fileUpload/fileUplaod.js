import React, {Component} from 'react';
import {firebaseApp} from '../../firebase/firebase';
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton'
import MassonryLayout from '../massonry layout/massonry';

let brakePoints = [350, 500, 750];
let images = [];
const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92,643, 777, 999, 1, 402];
for(let i = 0; i< imgId.length; i++){
	const ih = 200 + Math.floor(Math.random()*10)*15;
	images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
}

console.log(images);

console.log(firebaseApp.storage())

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
        newState.push(items[item].url);
      }
      console.log(newState);
      this.setState({
        images: newState
      });
    });
  }

  handleChangeUsername = (event) => this.setState({username: event.target.value});
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
          console.log(url);
          const itemsRef = firebaseApp.database().ref('images');
          const image = {url}
          itemsRef.push(image);
          this.setState({avatarURL: url})});
  };
  render() {
    return (
      <div>
        <form>
          <CustomUploadButton
            accept="image/*"
            storageRef={firebaseApp
            .storage()
            .ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
            style={{
            backgroundColor: 'steelblue',
            color: 'white',
            padding: 10,
            borderRadius: 4
          }}>
            Upload image
          </CustomUploadButton>
        </form>
        <MassonryLayout images = {this.state.images} brakePoints={brakePoints} /> 
      </div>
    );
  }
}
export default FileManagerContainer;