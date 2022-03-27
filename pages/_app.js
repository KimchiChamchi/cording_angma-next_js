import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/components/Footer";
import Top from "../src/components/Top";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

/* 
페이지 전환 시 레아이웃을 유지할 수 있다
페이지 전환 시 상태값을 유지할 수 있다.
componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다
추가적인 데이터를 페이지로 주입시켜주는게 가능하다
글로벌 CSS를 이곳에 선언한다


위의 props로 넘어온 Component는 현재 페이지를 의미한다
페이지를 전환할 때 이 Component props가 변경된다

 */
