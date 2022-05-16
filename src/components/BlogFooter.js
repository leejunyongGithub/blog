import styled from "styled-components";

const BlogFooterWrap = styled.div`
  width: 100%;
  height: 10%;
  background: #4fadf8;
  .footer-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    .footer-content {
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: gray;
    }
  }
`;

const BlogFooter = () => {
  return (
    <BlogFooterWrap>
      <div className="footer-content">
        <span>copyright. 2022 개발자 : 이준용</span>&nbsp;
        <span> email : junyong0751@gamil.com </span>
      </div>
    </BlogFooterWrap>
  );
};

export default BlogFooter;
