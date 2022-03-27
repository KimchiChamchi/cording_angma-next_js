import axios from "axios";
import Head from "next/head";

import { useEffect, useState } from "react";
import { Divider, Header, Loader } from "semantic-ui-react";
import ItemList from "../src/components/ItemList";

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>홈 코딩앙마</title>
        <meta name="description" content="코딩앙마 홈입"></meta>
      </Head>

      <>
        <Header as={"h3"} style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as={"h3"} style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}
/* create-next-app 으로 설치하면
1. 컴파일과 번들링이 자동으로 된다 (webpack과 babel)
2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영된다
3. 서버사이드 렌더링이 지원된다
4. 스태틱 파일을 지원한다
*/

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;

  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
