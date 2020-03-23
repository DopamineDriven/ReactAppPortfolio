import React, { useState } from 'react';
import Container from '../Container/Container.jsx'

const Contact = () => {
    const [inputEmail, setInputEmail] = useState("");
    const [historyList, setHistoryList] = useState([]);
    return (
        <Container fluid>
            <div className>
                <input onChange={e => {
                        setInputEmail(e.target.value)
                        setHistoryList([...historyList, e.target.value])
                    }}
                    placeholder="enter email"
                />
                <br />
                {inputEmail}
                <hr />
                <br />
                <ul>
                    {historyList.map(rec=> {
                        return (
                            <div className="echo">
                                {rec}
                            </div>
                        )
                    })}
                </ul>
            </div>
        </Container>
    )
}

export default Contact;