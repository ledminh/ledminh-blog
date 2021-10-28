import SubTitle from "./SubTitle";
import Title from "./Title";
import EntriesList from "./EntriesList";


const categories = [
    {
        id: "cat-12345",
        feature_image_url: "https://loremflickr.com/640/360",
        title: "Nature",
        meta_data:  {
            cat_subtitle: "Something about nature"
        }
    },

    {
        id: "cat-12346",
        feature_image_url: "https://loremflickr.com/640/360",
        title: "Human",
        meta_data:  {
            cat_subtitle: "Something about human"
        }

    }
]


const Category = () => {
    
    const onClickHandleMaker = () => {

        return () => {

        }
    }

    return (
        <>
            <Title title="Categories"/>
            <SubTitle>
                List of all categories
            </SubTitle>
            <EntriesList 
                    entries={categories} 
                    onClickHandleMaker={onClickHandleMaker}
                    />
        </>
    );
}

export default Category;
