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
import { iconsArray } from "variables/Variables.jsx";

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ReportList extends Component {

  static propTypes = {
    data: PropTypes.array,
    goHome: PropTypes.bool,
  };

  static defaultProps = {
    data: [
      {
        title: '示例报告',
        date: new Date()
          .toLocaleString('chinese', { hour12: false })
          .replace(/\//gi, '-'),
        url: '/',
      },
    ],
    goHome: false,
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            {this.props.data.map((p, i) => {
              return (
                <Col md={12}>
                  <Card
                    title={
                      <Link to={p.url}>
                        <h3 className="post-title" title={p.title}>
                          {p.title}
                        </h3>
                      </Link>
                    }
                    category={i}
                    content={
                      <Link className="thumb" to={p.url}>
                        <h3>
                          Content-test
                        </h3>
                      </Link>
                    }
                  />
                </Col>
              );
            })}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ReportList;
