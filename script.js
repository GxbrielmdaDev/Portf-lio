function toggleMenu() {
  const menu = document.getElementById("mobilemenu")
  if (!menu) return
  menu.classList.toggle("active")
  const isActive = menu.classList.contains("active")
  menu.setAttribute("aria-hidden", (!isActive).toString())
}

document.addEventListener("click", (e) => {
  const target = e.target
  const mobile = document.getElementById("mobilemenu")
  if (!mobile) return
  if (mobile.classList.contains("active") && target.tagName === 'A' && mobile.contains(target)) {
    mobile.classList.remove("active")
    mobile.setAttribute("aria-hidden", "true")
  }
})

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    }
  })
})

document.querySelectorAll(".tecnologias-grid, .projetos-grid, .lojas-grid").forEach((el) => {
  el.classList.add("hidden")
  observer.observe(el)
})
