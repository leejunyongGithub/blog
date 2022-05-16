import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";

const BlogHeaderWrap = styled.div`
  width: 100%;
  height: 10%;
  background: red;

  .header-menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    .header-title {
      position: absolute;
      left: 10px;
      top: 10px;
      font-size: 20px;
      font-weight: 500;
    }
    .header-btn {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }

  @media screen and (max-width: 500px) {
    .header-menu {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-cotent: center;
      align-items: center;
      .header-title {
        font-size: 20px;
        font-weight: 500;
      }
      .header-btn {
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
  }
`;

const BlogHeader = () => {
  const [windowSize, setWindowSize] = useState(0);

  const handleChangeSize = useCallback(() => {
      setWindowSize(window.innerWidth);
  }, [windowSize]);

  useEffect(() => {
    window.addEventListener("resize", handleChangeSize);
    return () => window.removeEventListener("resize", handleChangeSize);
  }, []);

  return (
    <BlogHeaderWrap id="blog-header">
      {windowSize <= 500 ? (
        <div className="header-menu">
          <span className="header-title">Blog-{windowSize}</span>
          <span className="header-btn">
            <button>버튼</button>
          </span>
        </div>
      ) : (
        <div className="header-menu">
          <span className="header-title">Blog-{windowSize}</span>
          <span>
            <ul>
              <li></li>
            </ul>
          </span>
        </div>
      )}
    </BlogHeaderWrap>
  );
};

export default BlogHeader;
