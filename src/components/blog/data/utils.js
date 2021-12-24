export const convertTitleToSlug = (title) => title.toLowerCase().split(" ").splice(0).join("-");
export const convertDateToSlug = (date) => date.replace(',', '').toLowerCase().split(" ").splice(0).join("-");

export const getEntriesOnPage = (entries, numItemsPerPage, pageNum) => {
    const prevPage = pageNum - 1;
            
    let beginID = prevPage*numItemsPerPage,
        endID = pageNum*numItemsPerPage;
    

    const endPrev = beginID === 0;
    const endNext = endID > entries.length - 1;

    const displayedEntries = entries.slice(beginID, endID);

    return [displayedEntries, endPrev, endNext];
}

export const getOtherPosts = (posts, mainPostID = posts[0].id) => {
    if(!mainPostID) mainPostID = posts[0].id;
    
    return posts.filter((p) => p.id !== mainPostID)
                .map(oP => ({
                    id: oP.id,
                    idInfo: {
                        id: oP.id
                    },
                    feature_image_url: oP.feature_image_url,
                    title: oP.title,
                    meta_data: {
                        date_created: oP.date_created,
                        author: oP.author
                    }
                }));
}