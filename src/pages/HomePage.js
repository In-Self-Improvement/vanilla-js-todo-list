export const HomePage = () => {
  return /* HTML */ `
    <div>
      <h1>환영합니다!</h1>
      <p>여기는 간단한 홈페이지입니다.</p>
      <button onclick="location.href='/login'">로그인하기</button>
    </div>
  `;
};
