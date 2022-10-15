import { increaseLimit } from "../utils/limitIncrease.mjs";

// Empty variables for use whit endpoints to api
const id = "";
const name = "";
const symbol = "";

const email = "";
const password = "";

export const fetchParams = {
  params: {
    offset: true,
  },
  limit: increaseLimit(),
  sort: "created",
  _author: true,
  _comments: true,
  _reactions: true,
};

// Base url for the api
export const baseURL = `https://nf-api.onrender.com/api/v1`;

// Endpoint for registrations and login
export const login = `/social/auth/login`;
export const register = `/social/auth/register`;
export const API_SOCIAL_URL = `https://nf-api.onrender.com/api/v1/social`;

// Endpoint for everything related to profile
export const profile = `/social/profiles/`;
export const getProfile = `/social/profiles/${name}`;
export const media = `/social/profiles/${name}/media`;
export const follow = `/social/profiles/${name}}/follow`;
export const unFollow = `/social/profiles/${name}/unfollow`;

// Endpoint for everything related to posts
export const getPosts = `/social/posts/?_author=true&_comments=true&_reactions=true&limit=100`;
export const createNewPost = `/social/posts/`;
export const getPostsById = `/social/posts/${id}`;
export const putPost = `/social/posts/`;
export const deletePost = `/social/posts/`;
export const reactPost = `/social/posts/${id}/react/${symbol}`;
export const comments = `/social/posts/${id}/comment`;
