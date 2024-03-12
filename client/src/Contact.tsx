import React from "react";


const Contact = () => {

  return (
    <div>
      <div className="container-sm">
      <h1>Email: gneuenhaus@outlook.com</h1>
      </div>
      <div className="container-sm">
      <h4>Send in Comments </h4>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input type="text" className="form-control" id="inputFirstName" placeholder="First Name"/>
          </div>
          <div className="form-group col-md-6">
            <input type="text" className="form-control" id="inputLastName" placeholder="Last Name"/>
          </div>
          <div className="form-group col-md-6">
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
          </div>
        </div>
        <div className="form-group">
          <textarea className="form-control" id="inputComment" rows={5 as any} placeholder="Add your comment"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </div>
    </div>
  )
}

export default Contact;