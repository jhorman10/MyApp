import create, { GetState, SetState } from 'zustand';
import { MyState } from './types';

const USERS_DATA = 'https://jsonplaceholder.typicode.com/users';
const USERS_DATA_DETAILS = 'https://jsonplaceholder.typicode.com/users';
const USERS_POSTS = 'https://jsonplaceholder.typicode.com/posts?userId';

export default create(
  (setState: SetState<MyState>, getState: GetState<MyState>): MyState => {
    return {
      users: [],
      userPosts: [],
      userDetail: undefined,
      isLoading: false,
      getUsers: async () => {
        setState({ isLoading: true });
        const results = await fetch(USERS_DATA);
        const users = await results.json();
        setState({ users, isLoading: false });
      },
      getUserDetails: async (userId: string | number) => {
        setState({ isLoading: true });
        const results = await fetch(`${USERS_DATA_DETAILS}/${userId}`);
        const userDetail = await results.json();
        setState({ userDetail, isLoading: false });
      },
      getUserPosts: async (userId: string | number) => {
        setState({ isLoading: true });
        const results = await fetch(`${USERS_POSTS}=${userId}`);
        const userPosts = await results.json();
        setState({ userPosts, isLoading: false });
      },
    };
  }
);
