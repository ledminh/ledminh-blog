import SubTitle from "./SubTitle";
import Title from "./Title";
import EntriesList from "./EntriesList";
import Pagination from "./Pagination";


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

    },

    {
        id: "cat-123332",
        feature_image_url: "https://loremflickr.com/640/360",
        title: "Food",
        meta_data:  {
            cat_subtitle: "Food is my life"
        }
    },

    {
        id: "cat-1234112",
        feature_image_url: "https://loremflickr.com/640/360",
        title: "Technology",
        meta_data:  {
            cat_subtitle: "Technology changes the way we live"
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
            <Pagination />
        </>
    );
}

export default Category;
