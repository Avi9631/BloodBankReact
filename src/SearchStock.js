import React, { Component } from 'react'
import image2 from './images/cardimg.jpg'
import './App.css'
import axios from 'axios';

class SearchStock extends Component {

    constructor(props) {
        super(props)

        if(localStorage.getItem('key')==null || localStorage.getItem('key')==undefined){
            window.location='/';
            alert('Yor are not logged in');
        }
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        var API_URL= 'http://localhost:8080/user/getTotStock'; 
        axios.get(API_URL, {headers:{
            "Authorization": "Bearer "+localStorage.getItem("key")
        }})
            .then(res => {
                const datas = res.data;
                this.setState({ data: datas });
                console.log(datas);
            })
            .catch(err => {
                console.log(err)
            });

    }


    render() {
        var msg= "Apos";
        const dataList = this.state.data.map(x => {
            return (
                <div className="col-md-3 col-sm-6 vd" >
                    <div className="bkjiu" data-toggle="modal" data-target="#stock-ticket-modal">
                        <img src={image2} />
                        <h4><b>Blood group: </b>{x.gr}</h4>
                        <p><b>Availability: </b>{x.qty} units</p>
                    </div>
                </div>);
        })

        return (
            <div>
                <section id="process" className="donation-care">
                    <div className="container">
                        <div className="row session-title">
                            <h2>Blood Stock at Blood Bank</h2>
                        </div>

                        <div className="row">
                            {dataList}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default SearchStock
