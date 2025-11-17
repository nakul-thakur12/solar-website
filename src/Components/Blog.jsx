const Blog = () => {
  const posts = [
    {
      title: 'Benefits of Solar Energy',
      date: 'Nov 7, 2025',
      category: 'Solar Tips',
      excerpt: 'Learn about the numerous benefits of switching to solar energy...'
    },
    {
      title: 'Solar Panel Maintenance Guide',
      date: 'Nov 5, 2025',
      category: 'Maintenance',
      excerpt: 'Keep your solar panels in perfect condition with our maintenance guide...'
    },
    {
      title: 'Government Incentives for Solar',
      date: 'Nov 1, 2025',
      category: 'Incentives',
      excerpt: 'Discover available government incentives for solar installation...'
    }
  ];

  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-darkBlue mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-textGray text-lg">
            Stay updated with solar energy tips and news
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg card-shadow overflow-hidden hover:shadow-lg transition">
              <div className="bg-lightBg h-48 flex items-center justify-center">
                <p className="text-textGray">Blog Image</p>
              </div>
              <div className="p-6">
                <span className="text-sm text-secondary font-semibold">{post.category}</span>
                <h4 className="text-xl font-heading font-bold text-darkBlue my-3">
                  {post.title}
                </h4>
                <p className="text-textGray text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-textGray">{post.date}</span>
                  <a href="#" className="text-primary font-semibold text-sm hover:text-secondary">Read More →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
