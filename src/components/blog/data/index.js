/*
import { getMainPost as getMainPostLocal,
        getDisplayedPosts as getDisplayedPostsLocal,
        getNumPosts as getNumPostsLocal,
        getNumCategories as getNumCategoriesLocal,
        getDisplayedCategories as getDisplayedCategoriesLocal,
        getCategory as getCategoryLocal,
        getSinglePost as getSinglePostLocal,
        getTagsList as getTagsListLocal,

} from "./localIndex";

*/


//import * as local from './local';
import * as wp_ledminh from './wp-ledminh';


let initData = wp_ledminh.initData,
    loadPosts = wp_ledminh.loadPosts,
    getMainPost = wp_ledminh.getMainPost,
    getDisplayedPosts = wp_ledminh.getDisplayedPosts,
    getNumPosts = wp_ledminh.getNumPosts,
    getNumCategories = wp_ledminh.getNumCategories,
    getDisplayedCategories = wp_ledminh.getDisplayedCategories,
    getCategory = wp_ledminh.getCategory,
    getSinglePost = wp_ledminh.getSinglePost,
    getTagsList = wp_ledminh.getTagsList,
    getTag = wp_ledminh.getTag,
    getDatesList = wp_ledminh.getDatesList,
    getPostsOnDate = wp_ledminh.getPostsOnDate,
    getAuthorsList = wp_ledminh.getAuthorsList,
    getAuthor = wp_ledminh.getAuthor,
    addComment = wp_ledminh.addComment
    ;




    
export {
    initData,
    loadPosts,
    getMainPost,
    getDisplayedPosts,
    getNumPosts,
    getNumCategories,
    getDisplayedCategories,
    getCategory,
    getSinglePost,
    getTagsList,
    getTag,
    getDatesList,
    getPostsOnDate,
    getAuthorsList,
    getAuthor,
    addComment
};