import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Message = {
  __typename?: 'Message';
  successful?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  deleteUser?: Maybe<Message>;
  updatePassword?: Maybe<Message>;
};


export type MutationCreateUserArgs = {
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type MutationDeleteUserArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationUpdatePasswordArgs = {
  username?: Maybe<Scalars['String']>;
  oldPassword?: Maybe<Scalars['String']>;
  newPassword?: Maybe<Scalars['String']>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  getAllUsers?: Maybe<Array<Maybe<User>>>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'username'>
  )> }
);


export const CreateUserDocument = gql`
    mutation createUser($name: String!, $username: String!, $password: String!) {
  createUser(name: $name, username: $username, password: $password) {
    id
    name
    username
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};