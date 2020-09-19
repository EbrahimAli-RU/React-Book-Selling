import React, { Component } from 'react'
import axios from 'axios' 
import { withRouter } from 'react-router-dom'
import NavDetail from '../../Component/Detail/NavDetail/NavDetail' 
import Auxilary from '../../hoc/Auxilary' 
import BookDetail from '../../Component/Detail/DetailBook/BookDetail'
import Footer from '../../Component/Footer/Footer' 
import SideDrawer from '../../Component/Navigation/SideDrawer/SideDrawer' 

class Detail extends Component {
    state = {
        showSideDrawer: false,
        isFound: false,
        Error: false,
        aboutBook: {},
        aboutSeller: {}
    }

    showSideDrawerHandler = () => {
        this.setState({ showSideDrawer: true })
    } 

    closeSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    componentDidMount() {
        axios.get(`${this.props.location.pathname}`)
            .then(response => {
                console.log(response.data.data)
                console.log(response.data.data.owner)
                this.setState({ 
                    isFound: true,
                    aboutBook: {...response.data.data},
                    aboutSeller: {...response.data.data.owner}
                })
            }).catch(err => {
                this.setState({ Error: true })
                console.log( err)
            })
    }
    
    render () {
        return(

            <Auxilary>
                { this.state.isFound ?   
                 <Auxilary>
                     <SideDrawer 
                show={this.state.showSideDrawer}
                close={this.closeSideDrawerHandler}/>
                <NavDetail 
                owner={ this.state.aboutSeller } 
                emp={this.state.aboutBook}
                Clicked={this.showSideDrawerHandler}
                />
                <BookDetail 
                    Book={this.state.aboutBook}
                    Seller={this.state.aboutSeller}
                />
                    <Footer />
                 </Auxilary>: null }
            </Auxilary>
        ) 
    }
    
}

export default withRouter(Detail)