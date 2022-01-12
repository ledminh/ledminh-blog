import Wrapper from "./Wrapper";

const ReactBlogPage = () => {
    
    return (
        <Wrapper>
            <p>There is a blog integrated into this website. You can visit it through <a href="/blog">this link</a> or click on Blog in the top menu</p> 
            <p>You can find it in this website’s source code posted on <a href="https://github.com/ledminh/ledminh-blog">Github</a> by following the path <code><i>“./src/components/blog”</i></code>.</p>
            <p>It is my first attempt to build a blog for myself. I coded it from scratch using React. Actually, it is an U.I. that can get data from three sources: local, my personal blog, and any other wordpress blog that has CORS enabled. User can switch between these three sources using a menu right below the navigation bar of the blog.</p>
            <ol>
                <li>The first source is local source. It is the file data.js that can be found by following the path <code><i>“./src/components/blog/data/local/data.js”</i></code>.</li>
                <li>The second source is my personal blog at <a href="https://www.ledminh.com">this address</a>. It is a wordpress blog and the content is mainly about science in Vietnamese. I used the package wpapi to query data from its REST API and then display in this react blog.</li>
                <li>The third source is any wordpress website that has CORS enabled. User can enter the address of the source and all of its content will be displayed.</li>
            </ol>
            <p>I’m really proud of this project because it is the most complicated project I built on React so far. I have always wanted to build my own blog from scratch and this project is the proof that the task is doable for me. My next plan is to make it become a real blog (by adding mongoDB database, admin panel, editor, etc..).</p>
        </Wrapper>
    );
}


export default ReactBlogPage;

