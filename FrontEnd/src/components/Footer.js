import React from 'react';

export default function Footer(props){  
  return (
    <section className="footer">
      <div className="container">
          <div className="row">
              <div className="col">
                  <p>© University of Houston-Downtown 2016 | All Rights Reserved.</p>
              </div>
              <div className="col">
                  <a href="#">Home |</a>
                  <a href="#">Degree Programs</a>
              </div>
          </div>
          <a id="to_top"><img src={require('../assets/images/arrow-top.png')} alt="" />top</a>
      </div>
  </section>  
  )
}