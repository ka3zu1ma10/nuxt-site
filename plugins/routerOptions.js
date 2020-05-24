export default async ({ app }) => {
  app.router.afterEach(() => {
    let navClass = document.querySelector(".btn-hamburger").classList.length
    if (navClass > 1) {
      document.querySelector(".btn-hamburger").classList.remove("active")
      document.querySelector("nav").classList.remove("active")
    }
  })
}
