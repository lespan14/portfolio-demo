import React from "react"; 
import { Navbar, Container, Nav, Button,Col} from 'react-bootstrap';

class Contact extends React.Component {
  render() {
    return (
      <section>
        <h1 style={{width: "100%", textAlign: "center", margin: "40px 0"}}>Contact</h1>
        <div className="container" style={{padding:"5%"}}>
          
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h2 className="title-left">Send Message</h2>
                      </div>
                      <div>
                        <form className="contactForm">
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:1"
                                  data-msg="Enter your name please"
                                />
                                
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter email"
                                />
                                
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  data-rule="minlen:1"
                                  data-msg="Please enter"
                                />
                                
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="3"
                                  data-rule="required"
                                  data-msg="Please write something"
                                  placeholder="Message"
                                ></textarea>
                                
                              </div>
                            </div>
                            <div className="col-md-12">
                              <Button variant="outline-secondary" type="submit" className="button-rouded" alt='Go to top'>Send Message</Button>{' '}
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h2 className="title-left">Basic Information</h2>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          This is the contact form, you can fill the format.
                          <br />
                          Simply fill the from and feel free to contact me!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              
            </div>
          
        

        
      </section>
    
      
    );
  }
}

export default Contact;
