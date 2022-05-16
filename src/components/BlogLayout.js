import styled from "styled-components";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogFooter from "./BlogFooter";

const BlogLayoutWrap = styled.div`
  width: 100%;
  height: 100vh;
  background: yellow;
  display: flex;
  flex-direction: column;
  justifiy-content: space-around;
`;

const BlogLayout = () => {
  return (
    <BlogLayoutWrap>
      <BlogHeader />
      <BlogContent />
      <BlogFooter />
    </BlogLayoutWrap>
  );
};

export default BlogLayout;
