const projects = [
  {
    title: "Project 1",
    link: "#",
    image: "images/docloc.png",
  },
  {
    title: "Project 2",
    link: "#",
    image: "images/docloc.png",
  },
  {
    title: "Project 3",
    link: "#",
    image: "images/docloc.png",
  },
  {
    title: "Project 4",
    link: "#",
    image: "images/docloc.png",
  },
  {
    title: "Project 5",
    link: "#",
    image: "images/docloc.png",
  },
  {
    title: "Project 6",
    link: "#",
    image: "images/docloc.png",
  },
];

function Works() {
  return (
    <div id="works" className="min-h-screen">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6 md:mb-12">
        Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full h-[300px] relative shadow-xl hover:-translate-y-2 transition-transform duration-500"
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-80 transition-opacity duration-500">
                <h3 className="text-white text-lg font-semibold">
                  {project.title}
                </h3>
                <img
                  src="images/link.svg"
                  alt="external link"
                  className="w-6 h-6 ml-2"
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
