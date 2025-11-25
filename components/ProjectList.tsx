import ProjectItem from './ProjectItem';
import data from './data/projects.json';

const ProjectList = (): JSX.Element => {
  return (
    <section className="grid" id="publications">
      <div className="mx-auto lg:w-11/12">
        <h2 className="text-xl font-bold mt-12 mb-4 text-center md:text-left">Data</h2>
        <div className="flex flex-col gap-6">
          {data.map((project, index) => (
            <ProjectItem project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
