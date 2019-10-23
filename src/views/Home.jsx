/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
// import { postsArray } from "variables/Variables.jsx";

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as HomeActions from './ReportList/actions';
import { connect } from 'react-redux';

import ReportList from 'components/ReportList/ReportList.jsx';


const mapStateToProps = ({ home }) => ({ home });

const mapDispatchToProps = dispatch => ({
  homeActions: bindActionCreators(HomeActions, dispatch),
});


export class Home extends Component {

  static propTypes = {
    home: PropTypes.object.isRequired,
    homeActions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.perPage = 6;
  }

  componentDidMount() {
    this.props.homeActions.fetchPostInfo();
    this.props.homeActions.resetPostList();
    this._loadPage(1);
  }

  _loadPage(pageNum) {
    this.props.homeActions.fetchPostList(this.perPage, pageNum);
    this.pageNum = pageNum;
  }

  render() {

    const {
      postInfo: { postCount, tagInfo },
      postList,
      loadMore,
    } = this.props.home.toJS();


    console.error({postList});
    return (
      <ReportList data={postList} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
