import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json';

const About = (): JSX.Element => {
  const { about } = personalInfo;

  return (
    <section className="grid gap-12" id="about">
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
        {/* Profile image */}
        <div className="mb-6 md:mb-0 md:mr-8 w-full max-w-[260px]">
          <ProfileImage />
        </div>

        {/* Text content */}
        <div className="flex flex-col max-w-xl w-full justify-evenly text-center md:text-left">
          <h1 className="text-4xl font-bold pb-4 md:pb-0">{personalInfo.name}</h1>

          <p>
            PhD Candidate in{' '}
            {about?.department?.link
              ? <ExtLink href={about.department.link}>{about.department.name}</ExtLink>
              : about?.department?.name || ""
            }{' '}
            at{' '}
            {about?.college?.link
              ? <ExtLink href={about.college.link}>{about.college.name}</ExtLink>
              : about?.college?.name || ""
            }.
          </p>

          {about?.interest && (
            <p className="text-sm text-gray-600 mt-2">
              Research Interests: {about.interest}
            </p>
          )}

          <p className="text-sm text-gray-400 mt-2">
            Under construction...<br />
            Re-architecting this site with some modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;