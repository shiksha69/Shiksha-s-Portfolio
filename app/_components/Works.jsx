const projects = [
  {
    title: "Enterprise Application",
    link: "https://www.figma.com/design/KxbLjmqhVe8RUsXW3k5b9O/Untitled?node-id=0-1&p=f&t=f1cT5DAjZOoPNJFW-0",
    image: "images/work1.png",
  },
  {
    title: "Food Delivery App",
    link: "https://www.figma.com/design/KxbLjmqhVe8RUsXW3k5b9O/Untitled?node-id=0-1&p=f&t=f1cT5DAjZOoPNJFW-0",
    image: "images/work2.png",
  },
  {
    title: "Docloc",
    link: "https://www.figma.com/design/KxbLjmqhVe8RUsXW3k5b9O/Untitled?node-id=0-1&p=f&t=f1cT5DAjZOoPNJFW-0",
    image: "images/work3.png",
  },
];

function Works() {
  return (
    <div id="works" className="min-h-screen flex flex-col justify-center">
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
