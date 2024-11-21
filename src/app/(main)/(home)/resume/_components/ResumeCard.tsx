const ResumeCard = () => {
  return (
    <section className="realtive z-100 text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        {degree.map((iterm: any) => (
          <div className="-m-4 text-center">
            <div className="p-4 w-full">
              <div className="border border-gray-800 bg-black/80 px-4 py-6 rounded-lg">
                <p className="leading-relaxed">{iterm.years}</p>
                <h2 className="title-font font-medium text-xl text-gray-900 dark:text-gray-400">
                  {iterm.institute}
                </h2>
                <p className="leading-relaxed">{iterm.degree}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeCard;

const degree = [
  {
    id: 1,
    degree: "Ph.D. in Horriblensess",
    institute: "University, Los Angeles, CA",
    years: "2021-2023",
  },
  {
    id: 2,
    degree: "Ph.D. in Horriblensess",
    institute: "University, Los Angeles, CA",
    years: "2021-2023",
  },
  {
    id: 3,
    degree: "Ph.D. in Horriblensess",
    institute: "University, Los Angeles, CA",
    years: "2021-2023",
  },
];
