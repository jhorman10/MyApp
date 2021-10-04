export interface User {
  address: object;
  company: object;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export type UserPosts = {
  userId: string;
  id: string;
  body: string;
  title: string;
};

export interface MyState {
  users: User[];
  userDetail: User | undefined;
  userPosts: UserPosts[];
  isLoading: boolean;
  getUsers: () => void;
  getUserDetails: (userId: string | number) => void;
  getUserPosts: (userId: string | number) => void;
}
