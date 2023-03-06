import React from "react";
import axios from "axios";

function App()  {
  


  return (
      <div>
          Add New Customer Data
          <div>
              <div className="page">
                  <img src="./bangalore.png" padding="200px" height="80" />
                  <h4>email:-johndoe@email.com</h4>
                  <h6>Bangalore</h6>
              </div>
              <img src="./delhi.png" padding="0" height="80" />
              <h4>email:-johndoe@email.com</h4>
              <h6>delhi</h6>

              <img src="./hyderbad.png" padding="0" height="80" />
              <h4>email:-johndoe@email.com</h4>
              <h6>hyderbad</h6>

              <img src="./mumbai.png" padding="0" height="80" />
              <h4>email:-johndoe@email.com</h4>
              <h6>mumbai</h6>
          </div>
      </div>
  );
}

export default App;
