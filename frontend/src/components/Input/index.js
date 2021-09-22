import React from "react";
import { TextInput } from 'react-native-web'
import './styles.css'

const Input = props => {
    return (
        <div className="input">
            <TextInput {...props} />
        </div>
    )
}

export default (Input);
