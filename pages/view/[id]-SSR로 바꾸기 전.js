import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import Item from "../../src/components/Item";

const Post = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  function getData() {
    axios.get(API_URL).then((res) => {
      setItem(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            로딩중
          </Loader>
        </div>
      ) : (
        <Item item={item} />
      )}
    </>
  );
};

export default Post;

/*
Next js 모든 페이지 사전 렌더링 (Pre-rendering)
더 좋은 퍼포먼스
검색엔진최적화(SEO)

1. 정적 생성
2. Server Side Rendering (SSR, Dynamic Rendering)

차이점은 언제 html 파일을 생성하는가

[정적 생성]
- 프로젝트가 빌드하는 시점에 html파일들이 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로, 넥스트 js는 정적 생성을 권고
- 정적 생성된 페이지들은 CDN에 캐시
- getStaticProps / getStaticPaths

[서버사이드 렌더링]은 매 요청마다 html을 생성
- 항상 최신 상태 유지
- getServerSideProps

*/
