import React, { Component } from 'react'
import axios from 'axios'
import Classes from './SignUp.css'
import Input from '../UI/Input/Input'
import SubmitButton from '../UI/SubmitButton/SubmitButton'

class SignUp extends Component {
    state = {
        SignUpForm : {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First name'
                },
                value: ''
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'last name'
                },
                value: ''
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Phone number'
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: ''
            },
            confirmPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm Password'
                },
                value: ''
            }
        }
    }

    SubmitHandler = (e) => {
        e.preventDefault();
        let formData = {};
        for(let key in this.state.SignUpForm) {
            formData[key] = this.state.SignUpForm[key].value
        }
        // axios.post('/user/signup', formData).then(response => {
        //     console.log(formData)
        // }).catch( err => {
        //     console.log(formData)
        //     console.log(err)
        // })
        axios.post('/user/signup',{...formData},{
            headers: {
                contentType: 'application/json' 
            }
        }).then(res => {
            if(res.data.status === "success") {
                this.props.history.push("/")
            }
            console.log(res)
        }).catch(err => {
            alert(err.response.data.message)
            console.log(this.props)
        })
    }

    inputHandler = (e, inputIdentifyer) =>{
        const UpdatedSignupForm = { ...this.state.SignUpForm };
        const UpdatedSignupElement ={
            ...UpdatedSignupForm[inputIdentifyer]
        }
        UpdatedSignupElement.value = e.target.value
        UpdatedSignupForm[inputIdentifyer] = UpdatedSignupElement;
        this.setState({ SignUpForm: UpdatedSignupForm })
        // this.setState({ SignUpForm: UpdatedSignupForm})
    }
    render() {
        let FormElementArray = [];
        for( let key in this.state.SignUpForm) {
            FormElementArray.push({
                id: key,
                config: this.state.SignUpForm[key]
            })
        }
        let Form = FormElementArray.map(el => {
            return(
            <Input 
                key={el.id}
                userInput={(event) => this.inputHandler(event, el.id)}
                elementType={el.config.elementType} 
                elementConfig={el.config.elementConfig} 
                value={el.config.value}/>)
        })
        return(
            <div className={Classes.gg}>
                <div className={Classes.Signup}>
                <h1 style={{
                    position: 'relative',
                    marginTop: '15%',
                    marginBottom:'4vh',
                    textAlign: 'center'
                }}>Book Selling </h1>
                <h2 style={{
                    marginBottom: '12%',
                    textAlign: 'center'
                }}><i>Wellcome</i></h2>
                <form onSubmit={this.SubmitHandler}>
                    {Form}
                    <SubmitButton name="Sign Up"/>
                </form>
                </div>
            </div>
        )
    }
}

export default SignUp