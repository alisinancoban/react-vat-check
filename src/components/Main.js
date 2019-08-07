import React, { Component } from 'react';
import { ValidDisplay } from './ValidDisplay';
import { InvalidDisplay } from './InvalidDisplay';
import { VATService}  from '../services/VATService';
/* import { ReactComponent as Logo } from '../img/img.png'; */
const vatService = new VATService();

class Main extends Component {

    constructor(props){
        super(props);

        this.state = {
            number: '0',
            name: '',
            address: '',
            isValid: false,
            input: 'GB979053087',
            showStatus: false
        };

        this.checkVatNumber = this.checkVatNumber.bind(this);
    }

    checkVatNumber() {           
        const vatNumber = this.state.input;
        
        vatService
            .check(vatNumber)
            .then((data) => {
                console.log(data);
                console.log(data[vatNumber].number);
                this.setState({number: data[vatNumber].number});
                this.setState({name: data[vatNumber].name});
                this.setState({address: data[vatNumber].address});
                this.setState({isValid: data[vatNumber].isValid});
                this.setState({showStatus: true});
            })
            .catch(error => console.log(error.message));
            
    }

    render() {
        let display = null;
        if(this.state.showStatus)
        {
            if(this.state.isValid){
                display = <ValidDisplay 
                    number={this.state.number}
                    name={this.state.name}
                    address={this.state.address}
                    isValid={this.state.isValid} />;
            }
            else{
                display = <InvalidDisplay />;
            }
        }
        
        return (            
            <div> 
                <div className="row mb-4">
                    <div className="col-6 pr-5">
                        <div className="row">
                            <div className="col-12 font-l">
                                Check The Value Added Tax Number
                            </div>
                            <div className="col-12 font-s">
                                VAT Checker allows you to check the validity of a VAT number prior to applying the 0% rate when selling goods or services to EU countries.
                            </div>
                        </div>
                    </div>
                    <div className="col-6 img">
                        {/* <Logo /> */}
                    </div>
                </div>
                {display}
                <div className="col-6 mx-auto mt-3 text-center">
                    <div className="row">
                        <input type="text"
                            name="vatNumber"
                            id="vatNumber"  
                            value = {this.state.input} 
                            className="vatNumber col-12 form-control"
                            onChange={e => this.setState({ input: e.target.value })} >
                        </input>
                        <button className="btn btn-primary btn-check col-2" onClick={this.checkVatNumber}>
                        Check
                        </button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export { Main };