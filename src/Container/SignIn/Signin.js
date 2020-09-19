import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Input from '../../Component/UI/Input/Input'
import Classes from './SignIn.css'
import SubmitButton from '../../Component/UI/SubmitButton/SubmitButton'


class SignIn extends Component {

    state = {
        SignInForm : {
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Phone number'
                },
                value: '',
                validation: {
                    required: true
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
                    minLength:8
                },
                valid: false
            }
        },
        isDisabled: false
    }

    checkValidity = (value, rules) => {
        let isvalid = false;
        if(rules.required) {
            isvalid = value.trim() !== ''
        }
        if(rules.minLength) {
            isvalid = value.length >= 8;
        }
        
        return isvalid
    }

    SubmitHandler = (e) => {
        e.preventDefault();
        let formData = {};
        for(let key in this.state.SignInForm) {
            formData[key] = this.state.SignInForm[key].value
        }

        console.log(formData)
        axios.post('/user/signin',{...formData}, {
            headers: {
                contentType: 'application/json' 
            }
        }).then(res => {
            console.log(formData)
        }).catch(err => {
            console.log(formData)
        })
    }

    inputHandler = (e, inputIdentifyer) =>{
        const UpdatedSignInForm = { ...this.state.SignInForm };
        const UpdatedSigninElement ={
            ...UpdatedSignInForm[inputIdentifyer]
        }
        UpdatedSigninElement.value = e.target.value
        // const [isValid, isDis] = this.checkValidity(UpdatedSigninElement.value, UpdatedSigninElement.validation)
        UpdatedSigninElement.valid =  this.checkValidity(UpdatedSigninElement.value, UpdatedSigninElement.validation)
        UpdatedSigninElement.isTouched = true;
        UpdatedSignInForm[inputIdentifyer] = UpdatedSigninElement;
        console.log(UpdatedSignInForm)
        this.setState({ SignInForm: UpdatedSignInForm})
    }

    render() {
        let FormElementArray = [];
        for( let key in this.state.SignInForm) {
            FormElementArray.push({
                id: key,
                config: this.state.SignInForm[key]
            })
        }
        let Form = FormElementArray.map(el => {
            return(
            <Input 
                key={el.id}
                userInput={(event) => this.inputHandler(event, el.id)}
                elementType={el.config.elementType} 
                elementConfig={el.config.elementConfig}
                Invalid={el.config.valid} 
                Touched={el.config.isTouched}
                value={el.config.value}/>)
        })
        return (
            <div className={Classes.gg}>
                <div className={Classes.SignIn}>
                <h1 style={{
                    position: 'relative',
                    marginTop: '20%',
                    marginBottom:'4vh',
                    textAlign: 'center'
                }}>Book Selling </h1>
                <h2 style={{
                    marginBottom: '15%',
                    textAlign: 'center'
                }}><i>Wellcome Back</i></h2>
                <form onSubmit={this.SubmitHandler}>
                    {Form}
                    <Link className={Classes.ForgotPassword} to="/forgot-password">Forgot Password?</Link>
                    <SubmitButton name="Log In" Checkdisibility={this.state.isDisabled}/>
                    <Link className={Classes.Wraper} to="/SignUp">Don't have account? Create one</Link>
                </form>
                </div>
            </div>
        )
    }

}
//Checkdisibility={this.state.isDisabled}

export default SignIn
