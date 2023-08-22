import { Component } from "react";
import './index.css'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image : ''
          // initial state
        };
        // Bind the function in the constructor
        this.handleImage = this.handleImage.bind(this);
      }

    handleImage(e) {
        console.log(e.target.files[0])
        this.setState({image: e.target.files[0]})
    }
    handleApi() {
        // const {image} = this.state
        // const formData = new FormData()
        // formData.append('image', image)
        console.log("API logged")
        // axios.post('url', formData).then((res) => {
        // console.log(res)
    }

    render() {
        const {image} = this.state
        return(
            <div className="profile-container">
                <h1>Name: </h1>
                <p>Ph.No. : </p>
                <p>Aadhar Number: </p>
                <p>Address: </p>
                <p>Upload your photo: </p>
                <input type="file" onChange={this.handleImage} />
                {image ? <img className="upload-image" src={URL.createObjectURL(image)} alt='image1' /> : null}
                <button onClick={this.handleApi} disabled={!image}>Submit</button>
            </div>
        )
    }
}

export default Profile