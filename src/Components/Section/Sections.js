import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Section from "./Section";




let Sections = {
    "Experience": <Section name="Experience"><Experience></Experience></Section>,
    "Projects": <Section name="Projects"><Projects></Projects></Section>,
    "Bio": <Section name="Bio"><Projects></Projects></Section>
}

export default Sections;
