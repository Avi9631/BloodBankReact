import React, { Component } from 'react'
import axios from 'axios';

export class StockDetailModal extends Component {

    constructor(props) {
        super(props)
        console.log(this.props.pow);

        this.state = {
            data: [],
            pow: this.props.pow
        }
    }


    componentDidMount() {
        var link = 'http://localhost:8080/user/getStock?group='+this.state.pow;
        console.log(link);
        axios.get(link)
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

        return (
            <div>
                <div id="stock-ticket-modal" class="modal fade">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title ">Stock Detail</h4>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <ul>
                                {this.state.data.map(x => {
                                    return (
                                        <li style={{ padding: '5px' }}>
                                            <p><b>Blood group: </b>{x.group}</p>
                                            <p><b>Quantity: </b>{x.qty}</p>
                                            <p>Date: {x.date}</p>
                                            <hr />
                                        </li>
                                    );
                                })}
                            </ul>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StockDetailModal
