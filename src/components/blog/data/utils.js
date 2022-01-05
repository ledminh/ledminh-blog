export const convertTitleToSlug = (title) => title.toLowerCase().split(" ").splice(0).join("-");
export const convertDateToSlug = (date) => date.replace(',', '').toLowerCase().split(" ").splice(0).join("-");

export const formatDate = (d) => (new Date(d)).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})
