import React, { Component } from 'react'
import axios from 'axios'



export class AminLoginModal extends Component {

    constructor(props) {
        super(props)
        this.handleAdminLog= this.handleAdminLog.bind(this);
    }


    handleAdminLog(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('username')); 
        console.log(data.get('password'));  
        var API_URL= "http://localhost:8080/login"
        axios.post(API_URL, {
            username: data.get('username'),
            password: data.get('password')
          })
          .then(response => {
            console.log(response.headers.authorization);
            if(response.headers.authorization != null  &&  response.headers.authorization!=""){
                localStorage.setItem("key", response.headers.authorization);
                localStorage.setItem("user_id", data.get("username"));
                localStorage.setItem("user_role", response.headers.role);
                console.log(localStorage.getItem("key"));
                window.location="/Admin";
            }
          })
          .catch(err=>{
              console.log(err);
          });
      }    

    render() {
        return (
            <div>
                <div id="admin-ticket-modal" className="modal fade">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 id="logupbtn" className="modal-title ">Admin Login</h4>

                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body" >
                                <form onSubmit={this.handleAdminLog}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="username" placeholder="Your Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="password" placeholder="Your Password" />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-danger">
                                            Admin Log In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}





export default AminLoginModal
