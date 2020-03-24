import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';

class Contact extends Component {
    constructor () {
        super()

        this.state= {
            name: "",
            email: "",
            message: ""
        }
        // data binding 
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    // methods
    handleChange = e => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    async handleSubmit (e) {
        this.setState({
            [e.preventDefault()]: e.target.value
        })

        const { name, email, message } = this.state

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
        e.preventDefault()
// f
    }

    // render
    render() {
    return (
        <div className="justify-content shadow-lg p-3 mb-5 rounded mt-5">
            <h2 className="text-left text-white">&nbsp;&nbsp;Contact</h2>
        <Form style={{width: '75%'}} onSubmit={this.handleSubmit} className="formy justify-content center shadow-lg p-3 mb-5 rounded">
            <FormGroup>
                <Label for="name"></Label>
                <Input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={this.handleChange} 
                    
                />
            </FormGroup>
            <FormGroup>
                <Label for="email"></Label>
                <Input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={this.handleChange} 
                />
            </FormGroup>
            <FormGroup >
                <Label for="message"></Label>
                <Input
                    placeholder="message"
                    type="textarea"
                    name="message"
                    onChange={this.handleChange} 
                />
            </FormGroup>

            <Button >
                Submit
            </Button>

        </Form>
        </div>
    )
    }
}

export default Contact;


// import React, { useState } from 'react';
// import Container from '../Container/Container.jsx'

// const Contact = () => {
//     const [inputEmail, setInputEmail] = useState("");
//     const [historyList, setHistoryList] = useState([]);
//     return (
//         <Container fluid>
//             <div className>
//                 <input onChange={e => {
//                         setInputEmail(e.target.value)
//                         setHistoryList([...historyList, e.target.value])
//                     }}
//                     placeholder="enter email"
//                 />
//                 <br />
//                 {inputEmail}
//                 <hr />
//                 <br />
//                 <ul>
//                     {historyList.map(rec=> {
//                         return (
//                             <div className="echo">
//                                 {rec}
//                             </div>
//                         )
//                     })}
//                 </ul>
//             </div>
//         </Container>
//     )
// }

// export default Contact;