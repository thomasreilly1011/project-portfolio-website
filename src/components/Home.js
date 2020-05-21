import React, { Fragment } from 'react';
import {NavigationBar} from './NavigationBar';

class Home extends React.Component {
   render () {
      return (
        <Fragment>
            <div id="home">
                <NavigationBar />
                <h1>{this.props.inputData.full_name}</h1>
                <h2 className="font-weight-light mb-0">{this.props.inputData.sub_title}</h2>

                <div className="icons">
                    <a href={this.props.inputData.github_link} className="icon"><i className="fab fa-github"></i></a>
                    <a href={this.props.inputData.linked_in_link}className="icon"><i className="fab fa-linkedin"></i></a>
                    <a href={this.props.inputData.twitter_link} className="icon"><i className="fab fa-twitter"></i></a>
                </div>
                
                <p className="scrolldown">
                    <a className="smoothscroll icon" href="#about"><i className="fas fa-chevron-circle-down"></i></a>
                </p>
            </div>
        </Fragment>
      )
   }
}

export default Home;
