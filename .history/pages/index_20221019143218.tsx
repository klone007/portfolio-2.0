import type { GetServerSideProps, GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import Head from 'next/head';
import Link from 'next/link';
import { sanityClient } from '../sanity';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects:Project[];
  socials: Social[];
}


const Home = ({pageInfo, skills, experiences, projects, socials} : Props) => {
  return (
    <div 
    className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden  z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo?.name} -Portfolio</title>
      </Head>
      
      <Header socials = {socials} />
      
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />

      </section>
     
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      
      <section id="experience" className="snap-start">
        <WorkExperience experiences={experiences} />
      </section>

     
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>


      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
       
      
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img 
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
            src="https://avatarfiles.alphacoders.com/865/86518.png" alt=""/>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };

};

export const getServerSideProps = async () => {

  const pageInfoQuery =groq`
  *[_type == "pageInfo"][0]
`;
  const experiencesQuery =groq`
  *[_type == "experience"]{
    ...,
    technologies[]->
   }
  `;  
  const skillsQuery =groq`
  *[_type == "skill"]
`; 
   const projectsQuery =groq`
   *[_type == "project"]{
    ...,
    technologies[]->
   }
  `;  
  const socialsQuery =groq`
  *[_type == "social"]
  `;
	const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery); 
	const skills: Skill[]  = await sanityClient.fetch(skillsQuery); 
	const experiences: Experience[] = await sanityClient.fetch(experiencesQuery); 
	const projects: Project[] = await sanityClient.fetch(projectsQuery); 
	const socials: Social[] = await sanityClient.fetch(socialsQuery); 



  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
}
