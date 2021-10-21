
const PostIntro = () => (
    <article className="post-intro">
        <img src="https://picsum.photos/875/400" className="feature-image" />
        <div className="title">This is the title</div>
        <section className="meta-data">
            <span className="categories">Life Style, Image Posts</span>
            <span className="tags">people</span>
            <span className="date-created">May 17, 2015</span>
            <span className="comment-link">5 Comments</span>
            <span className="author">Minh Le</span>
        </section>
        <section className="excerpt">
            It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. 
        </section>
        <footer>
            <a href="">Continue Reading</a>
            <button className="share">S</button>
        </footer>
    </article>
);

export default PostIntro;