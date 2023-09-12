export default function currentPage(pathname){

  document.querySelector("#btn-home").classList.remove('current-page')
  document.querySelector("#btn-universe").classList.remove('current-page')
  document.querySelector("#btn-exploration").classList.remove('current-page')

  switch (pathname) {
    case "/":
      document.querySelector("#btn-home").classList.add('current-page')
      break;
  
    case "/universe":
      document.querySelector("#btn-universe").classList.add('current-page')
      break;

    case "/exploration":
      document.querySelector("#btn-exploration").classList.add('current-page')
      break;

    default:
      break;
  }
}