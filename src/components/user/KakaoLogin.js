import KakaoLogin from 'react-kakao-login';

const LoginWithKakao = () => {
    return <KakaoLogin token={'1da4996513f2ad5ab840e4af1bcba99d'} />;
};

export default LoginWithKakao;

//tsx 로 파일을 만드니 오류가 나옵니다. 무엇이 문제일까요..ㅠ

/* 'KakaoLogin'은(는) JSX 구성 요소로 사용할 수 없습니다.
  해당 인스턴스 형식 'KakaoLogin'은(는) 유효한 JSX 요소가 아닙니다.
    'render()'에서 반환되는 형식은 해당 형식 간에 호환되지 않습니다.
      'JSX.Element | Element' 형식은 'ReactNode' 형식에 할당할 수 없습니다.
        'Element' 형식은 'ReactNode' 형식에 할당할 수 없습니다.
          'Element' 형식에 'ReactPortal' 형식의 key, type, props 속성이 없습니다.ts(2786) */
