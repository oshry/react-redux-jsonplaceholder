import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from '../common/Spinner';
import {searchComments} from "../../actions/jphActions";
class Search extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            search: '',
            comments: [],
            q: false,
            delayTimer: 0,
            errors: {}
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidUpdate(){
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        var that = this;
        clearTimeout(this.state.delayTimer);
        this.state.delayTimer = setTimeout(() => {
            // Do the ajax stuff
            if(that.state.q != '' && typeof that.state.q !== 'undefined')
                that.props.searchComments(that.state.q)
        }, 1000); // Will do the ajax stuff after 1000 ms, or 1 s

    }
    onSubmit(e) {
        e.preventDefault();
    }
    render() {
        const { comments, loading } = this.props.jph;
        let searchContent;
        if(comments === null || loading){
            searchContent = <Spinner/>
        } else {
            if (comments) {
                const searchTable = comments.map((comment, key) => (
                    <tr key={key}>
                        <th scope="row">{comment.id}</th>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                    </tr>
                ));
                searchContent = (
                    <div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            {searchTable}
                            </tbody>
                        </table>
                    </div>
                );
            } else {
                searchContent = (
                    <div>Search</div>
                );
            }
        }

        return (
            <div className="feed">
                <form className="card card-sm col-lg-12" onSubmit={this.onSubmit}>
                    <div className="card-body row no-gutters align-items-center">
                        <div className="col-auto">
                            <i className="fas fa-search h4 text-body"></i>
                        </div>
                        <div className="col">
                            <input className="form-control form-control-lg form-control-borderless"
                                   name="q"
                                   type="text"
                                   onChange={this.onChange.bind(this)}
                                   placeholder="Search topics or keywords" />
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-lg btn-success" type="submit">Search</button>
                        </div>
                    </div>
                </form>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {searchContent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    jph: state.jph
});

export default connect(
    mapStateToProps,
    { searchComments }
)(Search);
