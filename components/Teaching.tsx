import data from './data/teaching.json';

const Teaching = (): JSX.Element | null => {
  if (!data || data.length === 0) return null;

  return (
    <section className="grid" id="teaching">
      <div className="mx-auto lg:w-11/12">
        <h2 className="text-xl font-bold mt-12 mb-4 text-center md:text-left">Teaching</h2>
        <div className="flex flex-col gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="shadow-lg w-full"
            >
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between text-gray-500 text-sm mb-1">
                  <span>{item.university}</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-gray-700 font-semibold text-lg">{item.role}</h3>
                <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 text-sm">
                  {item.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teaching;