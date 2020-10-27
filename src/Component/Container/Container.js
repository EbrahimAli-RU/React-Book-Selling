import React, { Component } from 'react'
import axios from 'axios'
// import axios from '../../axios/base-axios'
import { connect } from 'react-redux'
import Error from '../UI/Error/Error'
import Auxilary from '../../hoc/Auxilary'
// import store from '../../Store/store'

import Classes from './Container.css'
import Card from './Card/Card'
import NoDataFound from './NoDataFound/NoDataFound'

class Container extends Component {
    state = {
        success: false,
        error: false,
        message: null
    }

    openDetailPage = (id) => {
        // axios.get(`book/${id}`).then(response => {
        //     console.log(response.data.data.book)
        // }).catch(err => {
        //     console.log(err)
        // }) 
    }

    searchButtonHandler = () => {

    }
    addWishListHandler = (id) => {
        console.log(this.state.error, this.state.success, id)
        this.setState({ success: false, error: false })
        axios.post('/user/addWishList', { id: id }, {
            headers: {
                Authorization: `Bearer ${this.props.isAuthenticate}`
            }
        }).then(res => {
            this.setState({ success: true, message: res.data.message })
            setTimeout(() => {
                this.setState({ success: false, message: null })
            }, 1000)
            console.log(res.data.message)
        }).catch(err => {
            this.setState({ error: true, message: err.response.data.message })
            setTimeout(() => {
                this.setState({ error: false, message: null })
            }, 1000)
            console.log(err.response.data)
        })
    }
    render() {

        const books = this.props.list.map((el, i) => {
            return (
                <Card bookName={el.bookName}
                    edition={el.edition}
                    price={el.price}
                    author={el.authorName}
                    detailPage={() => this.openDetailPage(el._id)}
                    addWishList={(id) => this.addWishListHandler(id)}
                    pic={el.coverphoto}
                    key={i + 1}
                    id={el._id} />
            )
        })
        let book = books
        if (this.props.list.length === 0) {
            book = <NoDataFound />
        }
        return (
            <Auxilary>
                {this.state.error ? <Error data={this.state.message} /> : null}
                {this.state.success ? <Error data={this.state.message} /> : null}
                <div className={Classes.Container}>
                    {book}
                </div>
            </Auxilary>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticate: state.token,
    };
};

export default connect(mapStateToProps)(Container)
