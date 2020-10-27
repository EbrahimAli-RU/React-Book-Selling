import React, { Component } from 'react';
import axios from 'axios'

import * as test from '../../Check'
import Classes from './SellBook.css'
import Auxilary from '../../hoc/Auxilary'
import Navigation from '../../Component/SellBook/Navigation/Navigation'
import SideDrawer from '../../Component/Navigation/SideDrawer/SideDrawer'
import Input from '../../Component/UI/Input/Input/Input'
import InputImage from '../../Component/UI/Input/InputImage/InputImage'
import InputCopy from '../../Component/UI/Input/InputCopy/Input'
import SubmitButton from '../../Component/UI/SubmitButton/SubmitButton'
import Footer from '../../Component/Footer/Footer'

class SellBook extends Component {
    state = {
        aboutBook: null,
        sellerInfo: null,
        missingPageInfo: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: '1-10 like this,'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            isTouched: false
        },
        showSideDrawer: false,
        isDisabled: true,
        missingPage: 'no'
    }
    componentDidMount() {
        this.setState({
            aboutBook: test.aboutBook(),
            sellerInfo: test.sellerInfo()
        })
    }
    checkValidity = (value, rules) => {
        let isvalid = false;
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

    showSideDrawerHandler = () => {
        this.setState({ showSideDrawer: true })
    }
    closeSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    inputHandler = (e, inputIdentifyer) => {
        e.preventDefault();
        if (inputIdentifyer === 'coverphoto' || inputIdentifyer === 'photo') {
            console.log('Photo')
            const UpdatedSignInForm = { ...this.state.aboutBook };
            const UpdatedSigninElement = {
                ...UpdatedSignInForm[inputIdentifyer]
            }
            UpdatedSigninElement.value = e.target.files[0];
            UpdatedSigninElement.value1 = URL.createObjectURL(e.target.files[0])
            console.log(UpdatedSigninElement.value)
            UpdatedSigninElement.valid = this.checkValidity(UpdatedSigninElement.value, UpdatedSigninElement.validation)
            UpdatedSigninElement.isTouched = true;
            UpdatedSignInForm[inputIdentifyer] = UpdatedSigninElement;
            this.setState({ aboutBook: UpdatedSignInForm })
        } else if (inputIdentifyer === 'missingPageInfo') {
            // const UpdatedSignInForm = { ...this.state.missingPageInfo };
            const UpdatedSigninElement = {
                ...this.state.missingPageInfo
            }
            UpdatedSigninElement.value = e.target.value
            console.log(UpdatedSigninElement.value)
            UpdatedSigninElement.valid = this.checkValidity(UpdatedSigninElement.value, UpdatedSigninElement.validation)
            UpdatedSigninElement.isTouched = true;
            // UpdatedSignInForm[inputIdentifyer] = UpdatedSigninElement;
            this.setState({ missingPageInfo: UpdatedSigninElement })
        }
        else {
            console.log('aboutBook', inputIdentifyer)
            const UpdatedSignInForm = { ...this.state.aboutBook };
            const UpdatedSigninElement = {
                ...UpdatedSignInForm[inputIdentifyer]
            }
            UpdatedSigninElement.value = e.target.value
            console.log(e.target.value)
            UpdatedSigninElement.valid = this.checkValidity(UpdatedSigninElement.value, UpdatedSigninElement.validation)
            UpdatedSigninElement.isTouched = true;
            UpdatedSignInForm[inputIdentifyer] = UpdatedSigninElement;
            // console.log(UpdatedSignInForm[inputIdentifyer])
            this.setState({ aboutBook: UpdatedSignInForm })

        }

    }

    sellerInputHandler = (e, inputIdentifyer) => {
        const UpdatedSignInForm = { ...this.state.sellerInfo };
        const UpdatedSigninElement = {
            ...UpdatedSignInForm[inputIdentifyer]
        }
        UpdatedSigninElement.value = e.target.value
        UpdatedSigninElement.valid = this.checkValidity(UpdatedSigninElement.value, UpdatedSigninElement.validation)
        UpdatedSigninElement.isTouched = true;
        UpdatedSignInForm[inputIdentifyer] = UpdatedSigninElement;
        this.setState({ sellerInfo: UpdatedSignInForm })
    }

    print = () => {
        console.log(this.state.aboutBook)
    }
    onRadioChangeHandler = (e) => {
        this.setState({ missingPage: e.target.value })
    }
    bookHandler = (e) => {
        e.preventDefault();
        // this.setState({ loading: true });
        const aboutBookData = {};
        for (let formElement in this.state.aboutBook) {
            aboutBookData[formElement] = this.state.aboutBook[formElement].value;
        }
        const sellerInfoData = {};
        for (let formElement in this.state.sellerInfo) {
            sellerInfoData[formElement] = this.state.sellerInfo[formElement].value;
        }
        let missingPageValue = 'no'
        if (this.state.missingPage === 'yes') {
            missingPageValue = this.state.missingPageInfo.value
        }
        const order = {
            ...aboutBookData,
            seller: {
                ...sellerInfoData
            },
            missingPage: missingPageValue
        };
        const fd = new FormData();
        fd.append('coverphoto', order.coverphoto);
        fd.append('photo', order.photo);
        fd.append('bookName', order.bookName)
        fd.append('authorName', order.authorName)
        fd.append('edition', order.edition)
        fd.append('language', order.language)
        fd.append('missingPage', order.missingPage)
        fd.append('numberOfPage', order.numberOfPage)
        fd.append('price', order.price);
        fd.append('publication', order.publication);
        fd.append('name', order.seller.name);
        fd.append('mobile', order.seller.mobile)
        fd.append('division', order.seller.division)
        fd.append('distict', order.seller.distict)
        fd.append('subDistict', order.seller.subDistict)
        axios.post('http://127.0.0.1:8000/api/v1/book', fd).then(res => {
            console.log(res.data.data)
        }).catch(err => {
            console.log(err.response.data)
        })
        console.log(order);
        // this.props.onOrderBurger(order, this.props.token);
    };
    render() {
        // console.log(this.state)
        let aboutBookArray = [];
        for (let key in this.state.aboutBook) {
            aboutBookArray.push({
                id: key,
                config: this.state.aboutBook[key]
            })
        }
        let aboutForm = aboutBookArray.map(el => {
            if (el.id === 'bookName' || el.id === 'authorName' || el.id === 'publication') {
                return (
                    <Input
                        key={el.id}
                        changed={(event) => this.inputHandler(event, el.id)}
                        elementType={el.config.elementType}
                        elementConfig={el.config.elementConfig}
                        Invalid={el.config.valid}
                        ShouldValidate={el.config.validation}
                        Touched={el.config.isTouched}
                        value={el.config.value}
                    />)
            } else if (el.id === 'coverphoto' || el.id === 'photo') {
                return (
                    <InputImage
                        key={el.id}
                        coverPhotoHandler={(event) => this.inputHandler(event, el.id)}
                        elementType={el.elementType}
                        elementConfig={el.elementConfig}
                        // Invalid={el.config.valid}
                        // Touched={el.config.isTouched}
                        value={el.config.value1}
                    />)
            } else {
                return (
                    <InputCopy
                        key={el.id}
                        changed={(event) => this.inputHandler(event, el.id)}
                        elementType={el.config.elementType}
                        elementConfig={el.config.elementConfig}
                        Invalid={el.config.valid}
                        Touched={el.config.isTouched}
                        value={el.config.value}
                    />)
            }
        })

        let sellerInfoArray = [];
        for (let key in this.state.sellerInfo) {
            sellerInfoArray.push({
                id: key,
                config: this.state.sellerInfo[key]
            })
        }
        let sellerForm = sellerInfoArray.map(el => {
            if (el.id === 'name' || el.id === 'mobile') {
                return (
                    <Input
                        key={el.id}
                        changed={(event) => this.sellerInputHandler(event, el.id)}
                        elementType={el.config.elementType}
                        elementConfig={el.config.elementConfig}
                        Invalid={el.config.valid}
                        Touched={el.config.isTouched}
                        value={el.config.value}
                    />)
            } else {
                return (
                    <InputCopy
                        key={el.id}
                        changed={(event) => this.sellerInputHandler(event, el.id)}
                        elementType={el.config.elementType}
                        elementConfig={el.config.elementConfig}
                        Invalid={el.config.valid}
                        Touched={el.config.isTouched}
                        value={el.config.value}
                    />)
            }

        })

        let missingPageForm = null
        if (this.state.missingPage === 'yes') {
            missingPageForm = (<Input
                changed={(event) => this.inputHandler(event, 'missingPageInfo')}
                elementType={this.state.missingPageInfo.elementType}
                elementConfig={this.state.missingPageInfo.elementConfig}
                Invalid={this.state.missingPageInfo.valid}
                Touched={this.state.missingPageInfo.isTouched}
                value={this.state.missingPageInfo.value}
            />)
        }

        return (
            <Auxilary>
                <SideDrawer
                    show={this.state.showSideDrawer}
                    close={this.closeSideDrawerHandler} />
                <Navigation Clicked={this.showSideDrawerHandler} />
                <div className={Classes.Container}>
                    <form >
                        {aboutForm}
                        <p style={{ display: 'inline-block', marginLeft: '5%' }}>Missing page:  </p>
                        <input type="radio" id="no" name="missingPage" value="no"
                            checked={this.state.missingPage === 'no' ? true : false}
                            onChange={this.onRadioChangeHandler} />
                        <label htmlFor="no">No</label>
                        <input type="radio" id="yes" name="missingPage" value="yes"
                            checked={this.state.missingPage === 'yes' ? true : false}
                            onChange={this.onRadioChangeHandler} />
                        <label htmlFor="yes">Yes</label>
                        {missingPageForm}
                        <h3 style={{ marginLeft: '5%' }}>Seller</h3>
                        {sellerForm}
                        <button onClick={this.bookHandler}>CHECK</button>
                        <SubmitButton name="Submit" />
                    </form>
                </div>
                <Footer />
            </Auxilary>
        );

    }
}

export default SellBook;