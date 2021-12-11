import { find } from "lodash";
import { getHomePosts, categories, tags } from "../../data";


import { Home } from "../statuses/actionTypes";


const getItemFromID = (id, items) => find(items, {id: id});





const initialState = {
    homePosts: getHomePosts().map((p, i) => ({...p, 
                                arrID: i, 
                                categories: p.categoryIDs.map((catID) => {
                                    let cat = getItemFromID(catID, categories);

                                    return {
                                        title: cat.title,
                                        slug: cat.slug
                                    }
                                }),
                                tags: p.tagIDs.map(tagID => {
                                    let tag = getItemFromID(tagID, tags);

                                    return tag.name;
                                })
                                })),
    categories: categories     
}


const dataReducer = (state = initialState, action) => {
    if(action.type === Home.SET_CURRENT_PAGE){
        const prevPage = action.page - 1;
            
        let beginID = prevPage*action.numItemsPerPage,
            endID = currentPage*action.numItemsPerPage;

        
        let newState = {
            ...state,
            posts: getHomePosts(beginID, endID).map((p, i) => ({...p, 
                arrID: i, 
                categories: p.categoryIDs.map((catID) => {
                    let cat = getItemFromID(catID, categories);

                    return {
                        title: cat.title,
                        slug: cat.slug
                    }
                }),
                tags: p.tagIDs.map(tagID => {
                    let tag = getItemFromID(tagID, tags);

                    return tag.name;
                })
                }))
        }


        return newState;
    }

    return state;
};

export default dataReducer;