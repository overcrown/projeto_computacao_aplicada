import { Component } from 'react'
import './styles.css'
import ImageBoot from '../../assets/boot.png'
import ProfilePhoto from '../../assets/profile.png'
import Input from '../Input'

const initialState = {
    chat: false,
    messageInput: '',
    messageUser: '',
    messageBoot: ''
}

export default class Boot extends Component {

    state = {
        ...initialState
    }

    send = message => {
        this.setState({ messageUser: message })
        this.setState({ messageInput: '' })
    }

    render() {
        return (
            <>
                {this.state.chat ? (
                    <div className="boot_chat_container">
                        <i className="uil uil-times close_icon"
                            onClick={(() => {
                                this.state.chat ? this.setState({ chat: false }) : this.setState({ chat: true })
                            })}
                        />
                        <div className="boot_chat">
                            <div className="header_chat">
                                <img src={ProfilePhoto} alt="ProfilePhoto" />
                                <h1>Amarelinho</h1>
                            </div>
                            <div className="user_message">
                                <p>{this.state.messageUser}</p>
                            </div>
                            <div className="user_input">
                                <Input
                                    value={this.state.messageInput}
                                    onChangeText={messageInput => this.setState({ messageInput })}
                                />
                                <button
                                    className="boot_button"
                                    onClick={() => { this.send(this.state.messageInput) }}
                                >
                                    <i className="uil uil-message boot_icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                ) :
                    <div className="initial_state">
                        <div className="initial_message">
                            <p>Olá, posso ajudar?</p>
                        </div>
                        <img
                            src={ImageBoot} alt="BootImage"
                            onClick={(() => {
                                this.state.chat ? this.setState({ chat: false }) : this.setState({ chat: true })
                            })}
                        />
                    </div>
                }
            </>
        )
    }
}
