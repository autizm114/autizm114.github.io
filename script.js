const links = document.querySelectorAll('[data-page]');
function goPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el = document.getElementById(name);
  if(el) el.classList.add('active');
  links.forEach(a=>a.classList.toggle('active', a.dataset.page===name));
}
links.forEach(a=>a.addEventListener('click', e=>{e.preventDefault();goPage(a.dataset.page)}));
// buttons
document.querySelectorAll('button[data-page]').forEach(b=>b.addEventListener('click',e=>goPage(e.target.dataset.page)));