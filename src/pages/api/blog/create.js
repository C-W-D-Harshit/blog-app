import initDB from "../../../../helpers/initDB";
import blog from "../../../../models/blogModel";

export default async function create(req, res, next) {
  const _blog = await blog.create(req.body);
  if (!blog) {
    res.status(404).json({
      succes: false,
      message: "Error creating blog",
    });
  }
  res.status(200).json({
    succes: true,
    blog: _blog,
  });
}
