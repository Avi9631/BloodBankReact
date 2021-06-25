import React, { Component } from 'react'
import './App.css'
import axios from 'axios'


class LogupPart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: ""
        }
        this.handleLogUp = this.handleLogUp.bind(this);
    }

    handleLogUp(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('group'));
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        const API_URL = 'http://localhost:8080/user/logUp';

        const postdata = {
            "id": data.get('email'),
            "name": data.get('name'),
            "group": data.get('group'),
            "city": data.get('city'),
            "state": data.get('state'),
            "email": data.get('email'),
            "password": data.get('pass'),
            "mobile": data.get('mob'),
            "userrole": ""
        };
        axios.post(API_URL, postdata)
            .then(res => {
                const datas = res.data;
                if(datas == true){
                    alert('Registered successfully!! Login Now');
                }else{
                    alert('User Already exists');
                }
                console.log(datas);
            })
            .catch(err => {
                console.log(err);
            });
    }


    render() {
        return (
            <div>
                <div id="logup" className="modal-body ">
                                    <form onSubmit={this.handleLogUp}>
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" placeholder="Your Email" />
                                        </div>
                                        
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" placeholder="Your Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" name="pass" placeholder="Your Password" />
                                        </div>
                                        <div className="form-group">
                                            <input type="tel" className="form-control" name="mob" placeholder="Your mob" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="city" placeholder="Your City" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="state" placeholder="Your State" />
                                        </div>
                                        <div className="form-group">
                                            <select id="ticket-type" name="group" className="form-control">
                                                <option value="">-- Select Blood Group --</option>
                                                <option value="Apos">A+</option>
                                                <option value="Aneg">A-</option>
                                                <option value="Bpos">B+</option>
                                                <option value="Bneg">B-</option>
                                                <option value="Oneg">O-</option>
                                                <option value="Opos">O+</option>
                                                <option value="ABpos">AB+</option>
                                                <option value="ABneg">AB-</option>
                                            </select>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-danger">Register</button>
                                        </div>
                                    </form>
                                </div>
            </div>
        )
    }
}

export default LogupPart
