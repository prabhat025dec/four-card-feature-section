import React from "react";
import ReactDOM from "react-dom";



  function App(){
      return( <div>
                <div className="flex-container">
                <div className="first-card ">
                      <h1 class="reliable">Reliable, efficient delivery</h1>
                      <h1>Powered by Technology</h1>  
                </div>
                <div className=" second-card">
                     <p> Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful </p>        
                </div>
               
              </div>
              <div className="grid-container selected">
                    <div className="supervisor">
                    <h2 className="heading">Supervisor</h2>
                    <p className="heading-para">Monitors activity to identify project roadblocks</p>
                    <img className="img"src="./images/icon-supervisor.svg" alt="supervisor-icon"></img>
                    </div>
                    <div className="team"><h2 className="heading">Team Builder</h2>
                    <p className="heading-para">Scans our talent network to create the optimal team for your project</p>
                    <img className="img"src="./images/icon-team-builder.svg" alt="supervisor-icon"></img></div>
                    <div className="karma"><h2 className="heading">Karma</h2>
                    <p className="heading-para">Regularly evaluates our talent to ensure quality</p>
                    <img className="img"src="./images/icon-karma.svg" alt="supervisor-icon"></img></div>
                    <div className="calculator"><h2 className="heading">Calculator</h2>
                    <p className="heading-para">Uses data from past projects to provide better delivery estimates</p>
                    <img className="img"src="./images/icon-calculator.svg" alt="supervisor-icon"></img></div>       
              </div>
            </div>
        
       
      );
  }




  export default App;
