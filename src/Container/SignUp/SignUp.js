import React, { Component } from 'react'
import { connect } from 'react-redux'

import Classes from './SignUp.css'
import Input from '../../Component/UI/Input/Input'
import SubmitButton from '../../Component/UI/SubmitButton/SubmitButton'
import * as signUp from '../../utils/signUpState'
import * as actionType from '../../Store/actions/auth'
import Spinner from '../../Component/UI/Spinner/circleSpinner/circleSpinner'
import Auxilary from '../../hoc/Auxilary'
import Error from '../../Component/UI/Error/Error'

class SignUp extends Component {
    state = {
        SignUpForm: null,
        isDisabled: true
    }

    componentDidMount() {
        this.setState({
            SignUpForm: signUp.signUp()
        })
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

        return isvalid
    }

    SubmitHandler = (e) => {
        e.preventDefault();
        let formData = {};
        for (let key in this.state.SignUpForm) {
            formData[key] = this.state.SignUpForm[key].value
        }
        let pro = this.props;
        this.props.onSignUpHandler(formData, pro, '/user/signup')
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
    }

    Checkdisibility(g) {
        let isDis = true;
        if (g.email.valid && g.password.valid && g.firstName.valid && g.confirmPassword.valid) {
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
            <Auxilary>
                {this.props.error ? <Error show data={this.props.error.message} /> : null}
                <div className={Classes.gg}>
                    <div className={Classes.Signup}>
                        <h1 className={Classes.HeadingBookSelling}>Book Selling </h1>
                        <h2 className={Classes.WellComeHeading}><i>Wellcome</i></h2>
                        {this.props.loading ? <Spinner /> : <form onSubmit={this.SubmitHandler}>
                            {Form}
                            <SubmitButton name="Sign Up" Checkdisibility={this.state.isDisabled} />
                        </form>}
                    </div>
                </div>
            </Auxilary>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignUpHandler: (formData, propsPropertie, url) => dispatch(actionType.auth(formData, propsPropertie, url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)