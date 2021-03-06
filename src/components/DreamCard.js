import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { likeDream } from '../actions/dreamActions';
import { Link } from 'react-router-dom';


class DreamCard extends Component {

  render() {
    const { dream, dreams } = this.props;

    return (
      <div key={dream.id} className='DreamCard'>
        <Link to={`/dreams/${dream.id}`}><h1 className='card-title'>{dream.name}</h1></Link>
        <br />
        <img src="http://beautifuldecay.com/wp-content/uploads/2012/05/Takeshi-Suga-Photography-1.jpg" alt="" className="media" />
        <br />
        <button onClick={() => this.props.likeDream(dream, dreams)}>Like</button> {dream.likes}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dreams: state.dreams
  }
}

export default connect(mapStateToProps, {likeDream})(DreamCard)
