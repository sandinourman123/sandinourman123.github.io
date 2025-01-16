
let menuItems = [
  {Text: 'Home', url: '/'},
  {Text: 'About', url: '/about.html'},
  {Text: 'Teams', url: '/teams.html'},
  {Text: 'Blog', url: '/blog.html'},
  {Text: 'Course', url: '/course.html'},
  {Text: 'Portfolio', url: '/portfolio.html'},
]
let menu = document.createElement('ul');
menuItems.forEach(item => {
  let menuItems = document.createElement('li');
  let link = document.createElement('a');
  link.href = item.url;
  link.innerText = item.Text;
  menuItems.appendChild(link);
  menu.appendChild(menuItems);
})
document.body.appendChild(menu);