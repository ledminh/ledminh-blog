import Header from "./header";
import Introduction from "./introduction";
import Skills from "./skills";
import Academic from "./academic";
import Projects from "./projects";

const Home = () => {
   

    return (
        <div className="home">
            <Header />
            <Introduction />
            <Skills />
            <Academic />
            <Projects />
        </div>
    );
}

export default Home;


