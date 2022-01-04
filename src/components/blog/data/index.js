import * as local from './local';
import * as wp_ledminh from './wp-ledminh';


let initData = local.initData,
    loadPosts = local.loadPosts,
    getMainPost = local.getMainPost,
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



// let loadPosts = wp_ledminh.loadPosts,
//     initData = wp_ledminh.initData,
//     getMainPost = wp_ledminh.getMainPost,
//     getDisplayedPosts = wp_ledminh.getDisplayedPosts,
//     getNumPosts = wp_ledminh.getNumPosts,
//     getNumCategories = wp_ledminh.getNumCategories,
//     getDisplayedCategories = wp_ledminh.getDisplayedCategories,
//     getCategory = wp_ledminh.getCategory,
//     getSinglePost = wp_ledminh.getSinglePost,
//     getTagsList = wp_ledminh.getTagsList,
//     getTag = wp_ledminh.getTag,
//     getDatesList = wp_ledminh.getDatesList,
//     getPostsOnDate = wp_ledminh.getPostsOnDate,
//     getAuthorsList = wp_ledminh.getAuthorsList,
//     getAuthor = wp_ledminh.getAuthor,
//     addComment = wp_ledminh.addComment
//     ;

    
export {
    loadPosts,
    initData,
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