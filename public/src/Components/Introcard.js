import React from 'react'
import './Introcard.css'
export default function Introcard() {
    return (
        <div>
           <div className="container-fluid">
    <div className="row">
        <div className="col-12 mt-3">
            <div className="card">
                <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img id="myimg" src="http://via.placeholder.com/300x180" alt="Card image cap"></img>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">ABOUT ME</h3>
                        <p className="card-text">Country/State : India/Maharashtra <br></br><br></br>
                      <p id="ssc"> <span className='edutitles'>SSC X:</span>MAHARASHTRA  [ 85% ] <br/>
                       &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Mona school,satara.<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  06/2013 - 04/2014 <br/></p><span><p id="hsc"> <span className='edutitles'>HSC XII:</span> MAHARASHTRA  [ 64% ] <br/>
                       &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chhatrapati Shahu Academy
.<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  06/2014 - 04/2016 <br/></p>
               </span><br></br>

              <p id="be"> <span className='edutitles'>BE:</span> Computer Science [ 85% ] <br/>
               &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;karmaveer bhaurao patil college of engineering and polytechnic,satara.<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  06/2016 - 11/2020</p> <span><p id="hsc"> <span className='edutitles'>HSC XII:</span> MAHARASHTRA  [ 64% ] <br/>
                       &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chhatrapati Shahu Academy
.<br/>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  06/2014 - 04/2016 <br/></p>
               </span><br></br>

                       
               
</p>
                    </div>
                </div>
                <div className="card-footer">
                    <small className="text-muted"></small>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}
