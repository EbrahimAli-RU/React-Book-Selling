import React, { Component } from 'react'
import axios from 'axios'

import Container from '../../Component/Container/Container'
import Footer from '../../Component/Footer/Footer'
import Auxilary from '../../hoc/Auxilary'
import NavigationItems from '../../Component/Navigation/NavigationItems'
import SearchBox from '../../Component/Navigation/SearchBox/SearchBox'
import Error from '../../Component/UI/Error/Error'
import Classes from './Nav.css'
import SideDrawer from '../../Component/Navigation/SideDrawer/SideDrawer'
import Spinner from '../../Component/UI/Spinner/Spinner'

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
            showSpinner: false
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
        axios.get(`/book?slug=${this.state.query}`)
            .then(response => {
                this.setState({list: response.data.data.books, isFound: true })
            }).catch(err => {
                console.log(err.response)
                console.log('Error')
            })
    }

    inputChangeHandler = (e) => {
        let query = e.target.value
        query = query.trim();
        query = query.replace(/\s+/g, ' ').trim();
        this.setState( {query} , () => {
            // this.fetchDataFromApi(query)
            // console.log(query)
        });
        
        
    }

    fetchDataFromApi = ( query ) => {
        console.log(`Check`)
        let searchURL = `/book`
        if(this.state.query || !query.length===0) {
            searchURL = `/book?slug=${query}`
        }
        if( this.cancel ) {
            this.cancel.cancel();
        }
        this.cancel = axios.CancelToken.source();
        axios.get(searchURL, {
            params: {
                _limit: 1
            },
            cancelToken: this.cancel.token
        }).then(response => {

            setTimeout( () => {
                this.setState({
                    showSpinner: false,
                    list: response.data.data.books,
                    length:response.data.data.books.length,
                   
                })
            }, 100)
            // this.setState({
            //     list: response.data.data.books,
            //     length:response.data.data.books.length,
            //     showSpinner: false
            // })
        }).catch(err => {
            console.log('Error')
        })
    }

    searchForBook = () => {
        if(this.state.query.length === 0) {
            // alert('Search Box is Empty!');
            this.setState({error: true})
            setTimeout( () => {
                this.setState({error: false})
            }, 1000)
        } else{
            this.setState({ showSpinner: true })
            this.fetchDataFromApi(this.state.query)
        }
            
    }
    render() {
        return (
            <Auxilary>
                { this.state.isFound ? <Auxilary> 
                { this.state.showSpinner ? <Spinner /> : null }
               { this.state.error ? <Error Error={this.state.error}/> : null}
                <header className={Classes.Header}>
                <NavigationItems navDivName={Classes.SearchBox1}
                        navSearchButton={Classes.Searchbtn}
                        queryLength={this.state.query.length}
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
                    clicked={this.searchForBook}/>
                <SideDrawer 
                    show={this.state.showSideDrawer}
                    close={this.closeSideDrawerHandler}/>
                <main>
                    <Container list={this.state.list} length={this.state.length}/>
                </main>
                <footer>
                    <Footer />
                </footer>
                </Auxilary> : null}
            </Auxilary>
        )
            
    }
}

export default Layout
