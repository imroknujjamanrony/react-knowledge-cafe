const Blog = ({ blog }) => {
  console.log(blog);
  const { author, cover, author_img } = blog;
  return (
    <div>
      <img src={cover} alt="" />
      <div className="flex justify-between py-5 items-center">
        <img className="w-[50px]" src={author_img} alt="" />
        <h3 className="text-2xl">Author: {author}</h3>
      </div>
    </div>
  );
};

export default Blog;
