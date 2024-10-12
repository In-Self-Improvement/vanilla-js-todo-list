import { createRouter } from "./lib";
import { HomePage, LoginPage } from "./pages";
const router = createRouter({
  "/": HomePage,
  "/login": LoginPage,
});

function render() {
  const $root = document.querySelector("#root");

  const Page = router.getTarget();
  $root.innerHTML = `
      ${Page()}
    `;
}

function main() {
  router.subscribe(render);
  render();
}

main();
