import React, { Component } from 'react'
import axios from 'axios'
import Classes from './SignUp.css'
import Input from '../../Component/UI/Input/Input' //'../UI/Input/Input'
import SubmitButton from '../../Component/UI/SubmitButton/SubmitButton'

class SignUp extends Component {
    state = {
        SignUpForm: {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                isTouched: false
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'last name'
                },
                validation: {},
                value: ''
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Phone number'
                },
                value: '',
                validation: {
                    required: true,
                    length: 11
                },
                valid: false,
                isTouched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false
            },
            confirmPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false
            }
        },
        isDisabled: true
    }

    checkValidity = (value, rules) => {
        let isvalid = false;
        if (!rules.required) {
            isvalid = true
        }
        if (rules.required) {
            isvalid = value.trim() !== ''
        }
        if (rules.minLength) {
            isvalid = value.length >= 8;
        }
        if (rules.length) {
            isvalid = value.length === 11 && value.startsWith('01')
        }

        return isvalid
    }

    SubmitHandler = (e) => {
        e.preventDefault();
        let formData = {};
        for (let key in this.state.SignUpForm) {
            formData[key] = this.state.SignUpForm[key].value
        }
        axios.post('/user/signup', { ...formData }, {
            headers: {
                contentType: 'application/json'
            }
        }).then(res => {
            if (res.data.status === "success") {
                this.props.history.push("/")
            }
        }).catch(err => {
            alert(err.response.data.message)
        })
    }

    inputHandler = (e, inputIdentifyer) => {
        const UpdatedSignupForm = { ...this.state.SignUpForm };
        const UpdatedSignupElement = {
            ...UpdatedSignupForm[inputIdentifyer]
        }
        UpdatedSignupElement.value = e.target.value
        UpdatedSignupElement.valid = this.checkValidity(UpdatedSignupElement.value, UpdatedSignupElement.validation)
        UpdatedSignupElement.isTouched = true;
        UpdatedSignupForm[inputIdentifyer] = UpdatedSignupElement;
        this.setState({ SignUpForm: UpdatedSignupForm })
        const isDis = this.Checkdisibility(UpdatedSignupForm);
        this.setState({ isDisabled: isDis })
        // this.setState({ SignUpForm: UpdatedSignupForm})
    }

    Checkdisibility(g) {
        let isDis = true;
        if (g.phone.valid && g.password.valid && g.password.valid && g.confirmPassword.valid) {
            isDis = false;
        }
        return isDis;
    }
    render() {
        let FormElementArray = [];
        for (let key in this.state.SignUpForm) {
            FormElementArray.push({
                id: key,
                config: this.state.SignUpForm[key]
            })
        }
        let Form = FormElementArray.map(el => {
            return (
                <Input
                    key={el.id}
                    userInput={(event) => this.inputHandler(event, el.id)}
                    elementType={el.config.elementType}
                    elementConfig={el.config.elementConfig}
                    Invalid={el.config.valid}
                    Touched={el.config.isTouched}
                    value={el.config.value} />)
        })
        return (
            <div className={Classes.gg}>
                <div className={Classes.Signup}>
                    <h1 style={{
                        position: 'relative',
                        marginTop: '15%',
                        marginBottom: '4vh',
                        textAlign: 'center'
                    }}>Book Selling </h1>
                    <h2 style={{
                        marginBottom: '12%',
                        textAlign: 'center'
                    }}><i>Wellcome</i></h2>
                    <form onSubmit={this.SubmitHandler}>
                        {Form}
                        <SubmitButton name="Sign Up" Checkdisibility={this.state.isDisabled} />
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp