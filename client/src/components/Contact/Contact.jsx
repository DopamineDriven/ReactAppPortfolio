import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

class Contact extends Component {
    constructor () {
        super()

        this.state= {
            name: "",
            email: "",
            message: ""
        }
    }

    render() {
    return (
        <div className="justify-content center shadow-lg p-3 mb-5 rounded">
        <Form style={{width: '75%'}} className="justify-content center shadow-lg p-3 mb-5 rounded">
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
            <FormGroup>
                <Label for="message"></Label>
                <Input
                    placeholder="message"
                    type="textarea"
                    name="message"
                    onChange={this.handleChange} 
                />
            </FormGroup>

            <Button>
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