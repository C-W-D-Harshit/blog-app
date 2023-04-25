import initDB from "../../../../helpers/initDB";
import blog from "../../../../models/blogModel";

export default async function handler(req, res, next) {
  switch (req.method) {
    case "GET":
      await getBlog(req, res);
      break;
    case "DELETE":
      await deleteBlog(req, res);
      break;
    case "PUT":
      await updateBlog(req, res);
      break;
  }
}
const getBlog = async (req, res) => {
  const id = await req.query.pid;
  const _blog = await blog.findById(id);
  if (!_blog) {
    res.status(400).json({
      success: false,
      message: "Blog not found",
      blog: [],
    });
    return;
  }
  res.status(200).json({
    success: true,
    blog: _blog,
  });
};

const deleteBlog = async (req, res) => {
  const id = await req.query.pid;
  await blog.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
  });
};

const updateBlog = async (req, res) => {
  const id = await req.query.pid;
  const _blog = await blog.findByIdAndUpdate(id, req.body);
  if (!_blog) {
    res.status(400).json({
      success: false,
    });
  }
  res.status(200).json({
    success: true,
    blog: _blog,
  });
};
