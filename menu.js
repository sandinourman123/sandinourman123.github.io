let menuItems = [
{Text: 'home', url: '/'},
  {Text: 'about', url: '/about.html'},
  {Text: 'teams', url: '/teaams.html'}
  ,{Text: 'blog', url: 'blog.html'},
  {Text: 'course', url: '/course.html'},
  {Text: 'portofolio', url: '/portofolio.htnl'},
]
let menu = document.createElement('ul')
menuItems. forEach(item => {
    let menuItems = document.createElement('li')
    let link = document.createElement('a')
    link.href = item.url
    link.textContent = item.Text
    menuItems.appendChild(link)
    menu.appendChild(menuItems)
})
document.body.appendChild(menu)