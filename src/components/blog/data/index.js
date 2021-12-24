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


import * as local from './local';

let getMainPost = local.getMainPost,
    getDisplayedPosts = local.getDisplayedPosts,
    getNumPosts = local.getNumPosts,
    getNumCategories = local.getNumCategories,
    getDisplayedCategories = local.getDisplayedCategories,
    getCategory = local.getCategory,
    getSinglePost = local.getSinglePost,
    getTagsList = local.getTagsList,
    getTag = local.getTag,
    getDatesList = local.getDatesList,
    getPostsOnDate = local.getPostsOnDate,
    getAuthorsList = local.getAuthorsList,
    getAuthor = local.getAuthor,
    addComment = local.addComment
    ;




    
export {
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