import FriendListItem from './FriendListItem';
import s from '../FriendList/FriendList.module.css';
import PropTypes from 'prop-types';
const FriendList = props => {
  const { friends } = props;
  return (
    <ul className={s.friendList} style={{backgroundColor:"rgb(255, 255, 255)"}}>
      {friends.map(el => (
        <FriendListItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default FriendList;


FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
