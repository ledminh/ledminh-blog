import photoStudioLogo from "./imgs/photo-studio-app.png";
import aReactBlogLogo from "./imgs/a-react-blog.png";

export const projects = [
    {
        id: "p-0001",
        title: "A React Blog",
        description: () => (<div>
                                <p>This is a <b>React Blog</b></p>
                                <p>This is a <b>React Blog</b></p>
                                <p>This is a <b>React Blog</b></p>
                                <p>This is a <b>React Blog</b></p>
                            </div>),
        logo: aReactBlogLogo
    },
    {   id: "p-0002",
        title: "Virtual Studio",
        description: () => (<div>This is a virtual <b>studio</b></div>),
        logo: photoStudioLogo
    }
]