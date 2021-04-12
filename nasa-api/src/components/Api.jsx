import React, { Component } from 'react'
import axios from 'axios'

//pr 

class Api extends Component {

    constructor(props){
      super(props);
  
      this.state = {
        roverChoosen: "curiosity",
        cameraChoosen: "",
        firstResponsePhoto: "",
        error: "",
        loading: "",
        initialRequestMade: false
      };
    }
  
    //seleccionar rover
    handleRoverSelection = (event) => {
      this.setState({
        roverChoosen: event.target.value,
        cameraChoosen: ""
      });
    }
  
    // seleccionar camara
    handleCameraSelection = (event) => {
      this.setState({ cameraChoosen: event.target.value });
    }
  
    // evento btn
    handleSubmit = (event) => {
  
      //cargar imagen
  
      this.setState({
        loading: "Loading...",
      });
  
  
      let baseUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.roverChoosen}/photos?sol=1000&camera=${this.state.cameraChoosen}&api_key=A43aVjmwYTQkakXUl9JBNbF5DW5gVRxLIEk0a61d`;

  
      axios.get(baseUrl)
      .then((res) => {
        if (res.data.Error) { 
          this.setState({
            error: res.errors
          });
        } else { 
          let photoVal = "";
          
          //poner img si esta vacio 
          if (!!res.data.photos[0]) {
            photoVal = res.data.photos[0].img_src;
          } else {
            photoVal = null;
          }
  
          //
          
          this.setState({
            firstResponsePhoto: photoVal,
            loading: "",
            initialRequestMade: true
          });
        }
      });
    }
  
   //cuando no se encuentra nada
    renderPhotoOrWhale() {
      
      if (!this.state.firstResponsePhoto && this.state.initialRequestMade) {
        return (
          <div>
            <p>No photos found!</p>
            <img alt="none found" src={'https://eldiariodecoahuila.com.mx/wp-content/uploads/2020/06/TI2qItoi_400x400.jpg'}/>;
          </div>
        );
      } else { 
        return <img alt="" src={this.state.firstResponsePhoto}/>;
      }
    }
  
    
    render() {
  
      let roverCameras = {
        "spirit": [
          {
            abbrev: "NAVCAM",
            name:	"Navigation Camera"
          },
          {
            abbrev: "PANCAM",
            name:	"Panoramic Camera"
          }
        ],
        "curiosity": [
          {
            abbrev: "FHAZ",
            name: "Front Hazard Avoidance Camera"
          },
          {
            abbrev: "RHAZ",
            name:	"Rear Hazard Avoidance Camera"
          },
          {
            abbrev: "MAST",
            name:	"Mast Camera"
          },
          {
            abbrev: "CHEMCAM",
            name:	"Chemistry and Camera Complex"
          },
          {
            abbrev: "NAVCAM",
            name:	"Navigation Camera"
          },
        ],
        "opportunity": [
          {
            abbrev: "NAVCAM",
            name:	"Navigation Camera"
          },
          {
            abbrev: "PANCAM",
            name:	"Panoramic Camera"
          }
        ]
      }
  
      return (
        <div className="Api">
        <div className = "container mt-5">
          <div className = "row">
          <div className = "col">
          <label>ROVER
            <br />
            <select class = "form-select"   value={this.state.roverChoosen} onChange={this.handleRoverSelection}>
              <option value="curiosity">Curiosity</option>
              <option value="spirit">Spirit</option>
              <option value="opportunity">Opportunity</option>
            </select>
          </label>
          </div>
          <div className = "col">
          <label>CAMERA
            <br />
            <select class = "form-select"
                value={this.state.cameraChoosen} 
                onChange={this.handleCameraSelection}>
                {roverCameras[this.state.roverChoosen].map((cameraObj) =>
                <option key={cameraObj.abbrev} value={cameraObj.abbrev}>{cameraObj.name}</option>
              )}
            </select>
          </label>
          </div>
             <br/>
          <div className = "row">
            <div className = "col">
          <button type = "button" class = "btn btn-outline-secondary btn-lg"
           onClick={this.handleSubmit}>Buscar</button>
           <p>{this.state.loading}</p>
            {this.renderPhotoOrWhale()}
          </div>
          </div>

        </div>
        </div>
        </div>
      );
    }
  }

  export default Api;
   