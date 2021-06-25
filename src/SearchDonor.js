import React, { Component } from 'react'
import image from './images/cardimg.jpg'
import './App.css'
import axios from 'axios'


class SearchDonor extends Component {

    constructor(props) {
        super(props)

        if(localStorage.getItem('key')==null || localStorage.getItem('key')==undefined){
            window.location='/';
            alert('Yor are not logged in');
        }
        this.state = {
            data: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        const API_URL = 'http://localhost:8080/user/getAll';
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

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        console.log(data.get('city'));
        console.log(data.get('group'));
        const API_URL = 'http://localhost:8080/getDonor?city=' + data.get('city') + '&group=' + data.get('group');

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
            })

    }

    render() {
        const dataList = this.state.data.map(x => {
            return (
                <div className="col-md-3 col-sm-6 vd">
                    <div className="bkjiu">
                        <img src={image} alt />
                        <h4>{x.name}</h4>
                        <p><b>Blood group: </b>{x.group}</p>
                        <p><b>City: </b>{x.city}</p>
                        <p><b>State: </b>{x.state}</p>
                        <p><b>Contact: </b>{x.mobile}</p>
                    </div>
                </div>
            );
        });
        return (
            <div>
                <section id="process" className="donation-care">
                    <div className="container">
                        <div className="row session-title">
                            <h2>Search Blood</h2>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="city" placeholder="Your Search" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <select id="ticket-type" name="group" className="form-control">
                                            <option value>-- Select Blood Group --</option>
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
                                </div>
                                <div className="col-lg-3">
                                    <button type="submit" className="btn btn-danger" style={{ width: '100%' }}>Search</button>
                                </div>
                            </div>
                        </form>
                        <br />
                        <div className="row">
                            {
                                (dataList.length == 0) ?
                                    <p className="text-center">No results found</p> :
                                    dataList
                            }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default SearchDonor
