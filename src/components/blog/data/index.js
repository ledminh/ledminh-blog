import {init, LOCAL_DATA, WP_DATA} from "./core";


let loadPosts, getMainPost, 
    getDisplayedPosts, getNumPosts, 
    getNumCategories, getDisplayedCategories,
    getCategory, getSinglePost, getTagsList,
    getTag, getDatesList, getPostsOnDate, 
    getAuthorsList, getAuthor, addComment;


const initData = async (dataSource, wp_address) => {

    const coreFuncs =  await init(dataSource, wp_address);

    loadPosts = coreFuncs.loadPosts;
    getMainPost = coreFuncs.getMainPost; 
    getDisplayedPosts = coreFuncs.getDisplayedPosts;
    getNumPosts = coreFuncs.getNumPosts;
    getNumCategories = coreFuncs.getNumCategories;
    getDisplayedCategories = coreFuncs.getDisplayedCategories;
    getCategory = coreFuncs.getCategory;
    getSinglePost = coreFuncs.getSinglePost; 
    getTagsList = coreFuncs.getTagsList;
    getTag = coreFuncs.getTag;
    getDatesList = coreFuncs.getDatesList; 
    getPostsOnDate = coreFuncs.getPostsOnDate;
    getAuthorsList = coreFuncs.getAuthorsList; 
    getAuthor = coreFuncs.getAuthor;
    addComment = coreFuncs.addComment;

}







export {
    LOCAL_DATA,
    WP_DATA,
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