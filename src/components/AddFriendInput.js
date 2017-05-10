import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

const genders = ['male', 'female', 'other'];

class AddFriendInput extends Component {

  render () {
    return (
      <form
        onSubmit={this.handleFormSubmit.bind(this)}>
        <input
          type="text"
          autoFocus="true"
          className={classnames('form-control', styles.addFriendInput)}
          placeholder="Type the name of a friend"
          value={this.state.name}
          onChange={this.handleNameChange.bind(this)}
           />
        <select
          value={this.state.gender}
          onChange={this.handleGenderChange.bind(this)}
           >
          {
            genders.map((gender, index) => {
              return <option key={index} value={gender}>{gender}</option>
            })
          }
        </select>
        <input
          type="submit"
          value="Add friend" />
      </form>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      gender: this.props.gender || 'male',
    };
  }

  handleNameChange (e) {
    this.setState({ name: e.target.value });
  }

  handleGenderChange (e) {
    this.setState({ gender: e.target.value });
  }

  handleFormSubmit (e) {
    e.preventDefault();
    this.props.addFriend(this.state.name, this.state.gender);
    this.setState({ name: '', gender: 'male' });
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
}

export default AddFriendInput
