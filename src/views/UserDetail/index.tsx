import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserPost from '../../components/UserPost';
import useMyStore from '../../zustand';
import { useHistory } from 'react-router';

const useStore = useMyStore;

const UserDetail = () => {
  const history = useHistory();
  const { userId }: any = useParams();
  const getUserDetails = useStore((state) => state.getUserDetails);
  const getUserPosts = useStore((state) => state.getUserPosts);
  const userDetail = useStore((state) => state.userDetail);
  const userPosts = useStore((state) => state.userPosts);

  useEffect(() => {
    (async function () {
      await getUserDetails(userId);
      await getUserPosts(userId);
    })();
  }, []);

  const renderPosts = () => {
    if (userPosts && userPosts.length) {
      return userPosts.map((value) => <UserPost key={value.id} {...value} />);
    }
  };

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div style={{ margin: 10 }}>
      <h2>{userDetail?.name}</h2>
      <h3>{userDetail?.email}</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <h3>Posts</h3>
        <button
          style={{ width: 150, marginTop: 10, height: 30 }}
          onClick={handleClick}
        >
          Go back!
        </button>
      </div>
      {renderPosts()}
    </div>
  );
};

export default UserDetail;
