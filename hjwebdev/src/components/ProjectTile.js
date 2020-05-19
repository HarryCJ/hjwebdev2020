import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class ProjectTile extends Component {

  render(){
    return (
      <Link 
      	to={this.props.projectURL} 
      	history={this.props.history} 
      	className={`${this.props.defaultOpaque ? 'defaultOpaque' : ''} ${this.props.className ? this.props.className : ''} project-tile`}
      >
        {this.props.heading && this.props.heading}
        <img src={this.props.imgURL} className="w-100" alt={this.props.imgAlt} />
        <h3 className="mt-2 mb-0">{this.props.title}</h3>
      </Link>
    );
  }
}

const mapStateToProps = state => ({
  history: state.site.history,
});

export default connect(mapStateToProps)(ProjectTile);
