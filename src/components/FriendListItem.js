import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './FriendListItem.css';

class FriendListItem extends Component {

  render () {
    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div><span>{this.props.name} </span><i className={classnames('fa', { 'fa-male': this.props.gender === 'male' }, { 'fa-female': this.props.gender === 'female' }, { 'fa-transgender-alt': this.props.gender === 'other' })} /></div>
          <div><small>xx friends in common</small></div>
        </div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.starFriend(this.props.id)}>
            <i className={classnames('fa', { 'fa-star': this.props.starred }, { 'fa-star-o': !this.props.starred })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.deleteFriend(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.boolean,
  starFriend: PropTypes.func.isRequired,
  onTrashClick: PropTypes.func.isRequired
}

export default FriendListItem
