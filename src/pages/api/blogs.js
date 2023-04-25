import ApiFeatures from "../../../features/search";
import initDB from "../../../helpers/initDB";
import blog from "../../../models/blogModel";

export default async function handler(req, res, next) {
  const resultPerPage = process.env.RPP;
  const blogCount = await blog.countDocuments();
  const apiFeature = new ApiFeatures(blog.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const blogs = await apiFeature.query;
  if (!blogs) {
    res.status(400).json({
      success: false,
    });
  }
  res.status(200).json({
    success: true,
    blogCount,
    blogs,
  });
}
