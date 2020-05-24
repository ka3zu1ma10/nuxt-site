export default async ({ app }) => {
  app.router.afterEach(() => {
    let navClass = document.querySelector(".btn-hamburger").classList
    if (navClass.indexOf("active") >= 0) {
      document.querySelector(".btn-hamburger").classList.remove("active")
      document.querySelector("nav").classList.remove("active")
    }
  })
}
