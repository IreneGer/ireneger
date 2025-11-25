import data from "./data/teaching.json";

const Teaching = (): JSX.Element | null => {
  if (!data || data.length === 0) return null;

  return (
    <section className="grid gap-6" id="teaching">
      <h2 className="text-xl font-bold mt-12 mb-4">Teaching</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-lg">
                {item.role} — {item.university}
              </p>
              <span className="text-gray-500">{item.date}</span>
            </div>
            <ul className="list-disc list-inside ml-4 space-y-1">
              {item.courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teaching;