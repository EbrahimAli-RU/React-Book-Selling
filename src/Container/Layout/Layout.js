import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import Container from '../../Component/Container/Container'
import Footer from '../../Component/Footer/Footer'
import Auxilary from '../../hoc/Auxilary'
import NavigationItems from '../../Component/Navigation/NavigationItems'
import SearchBox from '../../Component/Navigation/SearchBox/SearchBox'
import Error from '../../Component/UI/Error/Error'
import Classes from './Nav.css'
import SideDrawer from '../../Component/Navigation/SideDrawer/SideDrawer'
import Spinner from '../../Component/UI/Spinner/Spinner'
import Input from '../../Component/UI/Input/Input/Input'
import * as intialState from '../../utils/layout'

class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isFound: false,
            showSideDrawer: false,
            query: '',
            list: [],
            length: 0,
            error: false,
            showSpinner: false,
            filter: null,
        }
        this.cancel = ''
    }


    showSideDrawerHandler = () => {
        this.setState({ showSideDrawer: true })
    }

    closeSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    componentDidMount() {
        this.setState({ filter: intialState.layout() })
        axios.get(`/book?slug=${this.state.query}`)
            .then(response => {
                this.setState({ list: response.data.data.books, isFound: true })
            }).catch(err => {
                console.log(err.response)
                console.log('Error')
            })
    }

    inputChangeHandler = (e) => {
        let query = e.target.value
        query = query.trim();
        query = query.replace(/\s+/g, ' ').trim();
        this.setState({ query }, () => {
        });


    }

    fetchDataFromApi = (query) => {
        console.log(`Check`)
        let searchURL = `/book`
        if (this.state.query || !query.length === 0) {
            searchURL = `/book?slug=${query}`
        }
        if (this.cancel) {
            this.cancel.cancel();
        }
        this.cancel = axios.CancelToken.source();
        axios.get(searchURL).then(response => {

            setTimeout(() => {
                this.setState({
                    showSpinner: false,
                    list: response.data.data.books,
                    length: response.data.data.books.length,

                })
            }, 500)
        }).catch(err => {
            console.log('Error')
        })
    }

    searchForBook = () => {
        if (this.state.query.length === 0) {
            // alert('Search Box is Empty!');
            this.setState({ error: true })
            setTimeout(() => {
                this.setState({ error: false })
            }, 1000)
        } else {
            this.setState({ showSpinner: true })
            this.fetchDataFromApi(this.state.query)
        }

    }
    render() {

        let FormElementArray = [];
        for (let key in this.state.filter) {
            FormElementArray.push({
                id: key,
                config: this.state.filter[key]
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
                {this.props.error ? <Error show data={this.props.message} /> : null}
                {this.props.success ? <Error show data={this.props.message} /> : null}
                { this.state.isFound ? <Auxilary>
                    {this.state.showSpinner ? <Spinner /> : null}
                    {this.state.error ? <Error show={this.state.error} data="Search box is empty" /> : null}
                    <header className={Classes.Header}>
                        <NavigationItems navDivName={Classes.SearchBox1}
                            navSearchButton={Classes.Searchbtn}
                            queryLength={this.state.query.length}
                            token={this.props.token}
                            wish={Classes.gg}
                            user={Classes.User}
                            sellBook={Classes.SellBook}
                            showSideDrawer={this.showSideDrawerHandler}
                            searchBook={this.inputChangeHandler}
                            clicked={this.searchForBook}
                        />
                    </header>
                    <SearchBox
                        SearchBoxName={Classes.SearchBox}
                        SearchBoxButton={Classes.Searchbtn}
                        findBook={this.inputChangeHandler}
                        clicked={this.searchForBook} />
                    <SideDrawer
                        show={this.state.showSideDrawer}
                        close={this.closeSideDrawerHandler} />
                    <main style={{ display: 'flex' }}>
                        <div className={Classes.MainLeft}>
                            <h2>Filter</h2>
                            {Form}
                            <h2>Sort By:</h2>
                            <div>
                                <input type="checkbox" id="price" />
                                <label htmlFor="price">Price</label>
                            </div>
                            <div>
                                <input type="checkbox" id="edition" />
                                <label htmlFor="edition">Edition</label>
                            </div>
                        </div>
                        <Container className={Classes.Container} list={this.state.list} length={this.state.length} />
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </Auxilary> : null}
            </Auxilary>
        )

    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        success: state.wishList.success,
        error: state.wishList.error,
        message: state.wishList.message,
    }
}

export default connect(mapStateToProps)(Layout)
