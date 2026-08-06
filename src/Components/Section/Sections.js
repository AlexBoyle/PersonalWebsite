import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Section from "./Section";




let Sections = {
    "Experience": <Section name="Experience" key="Experience"><Experience></Experience></Section>,
    "Projects": <Section name="Projects" key="Projects"><Projects></Projects></Section>,
    "Bio": <Section name="Bio" key="Bio"><Projects></Projects></Section>
}

export default Sections;
