import {createSlice} from '@reduxjs/toolkit';
import {apiCallBegan}from './api';

const slice = createSlice({
	name: 'posts',
	initialState: {
		list[],
		loading:false
	},
	reducers:{
		postsRequested: (posts, action)=>{
			posts.loading = true
		},
		postsReceived: (posts, action)=>{
			posts.list = action.payload;
			posts.loading = false
		},
		postsRequestFailed:(posts, action)=>{
			posts.loading = false;
		}
	}
})
export default slice.reducer;

const {postsRequested, postsReceived,
           postsRequestFailed} = slice.actions;

const url = "/posts";

export const loadPosts = () => (dispatch) => {
	return dispatch(
		apiCallBegan({
			url,
			onStart: postsRequested.type,
			onSuccesss: postsReceived.type,
			onError:postsRequestedFailed.type,
		}))
}