export default class extends window.Controller {
  connect () {
    let sideBar = document.querySelector('#mySidebar')
    let mustBeHide = document.getElementsByClassName('must-be-hide')
    let mustBeCenter = document.getElementsByClassName('must-be-center')
    let menuOptions = document.querySelectorAll('#mySidebar .nav-link')
    let btnOpenCloseNav = document.querySelector('#btnOpenCloseNav')
    let profileDropdown = document.querySelector('#profile-dropdown')
    let subMenu = document.querySelectorAll('[id^="menu-"]')
    let openWithClick = document.querySelectorAll('.open-with-click')
    let menuParentOptions = document.querySelectorAll('[id^="parent-"]')
    let profileDiv = document.querySelector('#headerMenuCollapse > div')
    let navTitle = document.querySelectorAll('.nav-title')

    function toggleProfileDropdown (resize = false) {
      if (!resize) {
        profileDropdown.classList.toggle('w-100')

        profileDropdown.querySelector('#small-block').classList.toggle('d-none')

        profileDropdown.querySelector('#span-avatar').classList.toggle('me-3')
      } else {
        profileDropdown.classList.add('w-100')

        profileDropdown.querySelector('#small-block').classList.add('d-none')

        profileDropdown.querySelector('#span-avatar').classList.remove('me-3')
      }
    }

    function removeClassFromElements (elements, cls) {
      elements.forEach(element => {
        element.classList.remove(cls)
      })
    }

    function addClassToElements (elements, cls) {
      elements.forEach(element => {
        element.classList.add(cls)
      })
    }

    function toggleToElements (elements, cls) {
      elements.forEach(element => {
        element.classList.toggle(cls)
      })
    }

    function getWidthAndHeight () {
      return {
        w: window.innerWidth,
        h: window.innerHeight
      }
    }

    function evaluateCollapse () {
      let w = getWidthAndHeight().w

      if (w < 768) {
        sideBar.classList.add('aside')
        profileDropdown.querySelector('#span-avatar').classList.add('me-3')

        sideBar.classList.remove('width-collapse')
        sideBar.classList.remove('p-0')
        profileDiv.classList.remove('border-bottom')
        profileDiv.classList.remove('border-white')
        profileDiv.classList.remove('pb-1')
        sideBar.classList.remove('show')
        profileDropdown.classList.remove('w-100')
        profileDropdown.querySelector('#small-block').classList.remove('d-none')

        removeClassFromElements(menuParentOptions, 'border-bottom')
        removeClassFromElements(menuParentOptions, 'border-white')
        removeClassFromElements(menuParentOptions, 'pt-1')
        removeClassFromElements(mustBeHide, 'd-none')
        removeClassFromElements(mustBeCenter, 'justify-content-center')
        removeClassFromElements(menuOptions, 'justify-content-center')
        removeClassFromElements(subMenu, 'd-none')
        removeClassFromElements(navTitle, 'd-none')
      } else {
        removeClassFromElements(subMenu, 'show')

        if (sideBar.classList.contains('show')) {
          sideBar.classList.remove('p-0')
          profileDiv.classList.remove('border-bottom')
          profileDiv.classList.remove('border-white')
          profileDiv.classList.remove('pb-1')
          removeClassFromElements(subMenu, 'd-none')
          removeClassFromElements(mustBeHide, 'd-none')
          removeClassFromElements(mustBeCenter, 'justify-content-center')
          removeClassFromElements(menuOptions, 'justify-content-center')
          removeClassFromElements(menuParentOptions, 'border-bottom')
          removeClassFromElements(menuParentOptions, 'border-white')
          removeClassFromElements(menuParentOptions, 'pt-1')
          removeClassFromElements(navTitle, 'd-none')
        } else {
          toggleProfileDropdown(true)
          sideBar.classList.add('p-0')
          profileDiv.classList.add('border-bottom')
          profileDiv.classList.add('border-white')
          profileDiv.classList.add('pb-1')
          sideBar.classList.add('width-collapse')
          sideBar.classList.remove('aside')
          addClassToElements(mustBeHide, 'd-none')
          addClassToElements(mustBeCenter, 'justify-content-center')
          addClassToElements(menuOptions, 'justify-content-center')
          addClassToElements(subMenu, 'd-none')
          addClassToElements(menuParentOptions, 'border-bottom')
          addClassToElements(menuParentOptions, 'border-white')
          addClassToElements(menuParentOptions, 'pt-1')
          addClassToElements(navTitle, 'd-none')
        }
      }
    }

    function openCloseSidebar () {
      toggleProfileDropdown()

      sideBar.classList.toggle('aside')
      sideBar.classList.toggle('width-collapse')
      sideBar.classList.toggle('show')
      sideBar.classList.toggle('p-0')
      profileDiv.classList.toggle('border-bottom')
      profileDiv.classList.toggle('border-white')
      profileDiv.classList.toggle('pb-1')

      toggleToElements(mustBeHide, 'd-none')
      toggleToElements(mustBeCenter, 'justify-content-center')
      toggleToElements(menuOptions, 'justify-content-center')
      toggleToElements(subMenu, 'd-none')
      toggleToElements(menuParentOptions, 'border-bottom')
      toggleToElements(menuParentOptions, 'border-white')
      toggleToElements(menuParentOptions, 'pt-1')
      toggleToElements(navTitle, 'd-none')

      removeClassFromElements(subMenu, 'show')
    }

    function run () {
      evaluateCollapse()
      window.onresize = evaluateCollapse
      openWithClick.forEach(e => {
        e.onclick = x => {
          let w = getWidthAndHeight().w
          if (w >= 768 && !sideBar.classList.contains('aside')) {
            openCloseSidebar()
          }
        }
      })

      btnOpenCloseNav.onclick = e => {
        openCloseSidebar()
      }
    }

    run()
  }
  disconnect () {}
}
