export const LoginPage = () => {
  return /* HTML */ `
    <div>
      <h1>로그인 페이지</h1>
      <form>
        <label for="username">사용자 이름:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label for="password">비밀번호:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">로그인</button>
      </form>
    </div>
  `;
};
