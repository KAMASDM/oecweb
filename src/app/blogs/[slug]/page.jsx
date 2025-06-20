import React from "react";
import BlogDetails from "@/components/blogs/BlogDetails";

const BlogDetail = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    return <div>Blog Not Found</div>;
  }

  return <BlogDetails slug={slug} />;
};

export default BlogDetail;
