import { NextPage } from 'next';

const Misc: NextPage<unknown> = () => {
    return (
        <section className="grid gap-6" id="misc">
            <div className="mx-auto lg:w-11/12 flex flex-col items-center">
                <p className="text-gray-700 text-center md:text-left text-justify mb-6 max-w-2xl">
                    You can download my CV here.
                </p>

                {/* CV Download Button */}
                <a
                    href="CV_Germani.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                >
                    Download CV
                </a>
            </div>
        </section>
    );
};

export default Misc;

