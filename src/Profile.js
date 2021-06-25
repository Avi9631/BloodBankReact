import React, { Component } from 'react'
import './Profile.css'
import axios from 'axios';

export class Profile extends Component {

    constructor(props) {
        super(props)
        if(localStorage.getItem('key')==null || localStorage.getItem('key')==undefined){
            window.location='/';
            alert('Yor are not logged in');
        }
        this.state = {
            data: []
        }
        this.handleEditProfile = this.handleEditProfile.bind(this);
    }

    componentDidMount() {
        const API_URL = 'http://localhost:8080/user/profile?'+'id='+localStorage.getItem("user_id");
        axios.get(API_URL, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("key")
            }
        })
            .then(res => {
                const datas = res.data;
                this.setState({ data: datas });
                console.log(datas);
            })
            .catch(err => {
                console.log(err)
            });
    }

    handleEditProfile(event) {
        const API_URL= "http://localhost:8080/updateProfile"
        event.preventDefault();
        const data = new FormData(event.target);
        const postdata = {
            id: localStorage.getItem("user_id"),
            name: this.state.data.name,
            group: this.state.data.group,
            city: data.get('update-city'),
            state: data.get('update-state'),
            email: localStorage.getItem("user_id"),
            password: data.get('update-pass'),
            mobile: this.state.data.mobile
        };
        console.log("Post Data: "+postdata);
        axios.post(API_URL, postdata,  {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("key")
            }
        })
            .then(response => {
                console.log(response.data);
                window.location='/profile';
            })
            .catch(err => {
                console.log(err);
            });
    }


    render() {
        return (
            <div>
                <div class="container">
                    <div class="main-body">
                        <div class="row gutters-sm">
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex flex-column align-items-center text-center">
                                            <div class="mt-3">
                                                <h4>{this.state.data.name}</h4>
                                                <button data-toggle="modal" data-target="#edit-ticket-modal"
                                                    class="btn btn-primary">Edit Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-8">
                                <div class="card mb-3">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Full Name</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                {this.state.data.name}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                {this.state.data.email}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Mobile</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                {this.state.data.mobile}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">City</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                {this.state.data.city}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">State</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                {this.state.data.state}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Blood Group</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                {this.state.data.group}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <br />
                <br />
                <div id="edit-ticket-modal" class="modal fade">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title ">Edit Profile</h4>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>


                            <div class="modal-body ">
                                <form onSubmit={this.handleEditProfile}>
                                    <div class="form-group">
                                        <input type="password" class="form-control" name="update-pass" placeholder="Your Password" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="update-city" placeholder="Your City" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="update-state" placeholder="Your State" />
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-danger">Update Profile</button>
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

export default Profile
