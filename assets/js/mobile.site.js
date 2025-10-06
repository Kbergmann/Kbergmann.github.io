/* assets/js/mobile.site.js */
(function () {
  const qs  = (s, r=document) => r.querySelector(s);
  const qsa = (s, r=document) => Array.from(r.querySelectorAll(s));

  // ----- 1) Build mobile nav list from existing desktop nav -----
  const desktopNav = qs('nav.nav');
  const mobileList = qs('.mobile-nav-list');
  if (desktopNav && mobileList) {
    const items = qsa('a', desktopNav).map(a => {
      const li = document.createElement('li');
      const clone = a.cloneNode(true);
      clone.removeAttribute('id');
      li.appendChild(clone);
      return li;
    });
    mobileList.replaceChildren(...items);
  }

  // ----- 2) Drawer open/close + focus trap -----
  const btn = qs('.mobile-menu-btn');
  const drawer = qs('#mobileDrawer');
  const backdrop = qs('.mobile-drawer-backdrop');
  const closeBtn = qs('.mobile-drawer-close');

  function setOpen(open) {
    drawer?.setAttribute('aria-hidden', String(!open));
    btn?.setAttribute('aria-expanded', String(open));
    if (backdrop) backdrop.hidden = !open;
    document.documentElement.classList.toggle('no-scroll', open);
    if (open) {
      // focus first link
      const firstLink = qs('a', drawer);
      firstLink && firstLink.focus();
    } else {
      btn && btn.focus();
    }
  }
  btn?.addEventListener('click', () => setOpen(drawer.getAttribute('aria-hidden') === 'true'));
  closeBtn?.addEventListener('click', () => setOpen(false));
  backdrop?.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
  // simple focus trap
  drawer?.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusables = qsa('a,button,[tabindex]:not([tabindex="-1"])', drawer)
      .filter(el => !el.hasAttribute('disabled'));
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
    else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
  });
  // close drawer when a mobile link is clicked (smooth UX)
  mobileList?.addEventListener('click', (e) => {
    const t = e.target;
    if (t && t.tagName === 'A') setOpen(false);
  });
  // close if we grow past mobile width
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) setOpen(false);
  });

  // ----- 3) External links open in new tab -----
  qsa('a[href^="http"]').forEach(a => {
    // keep same-tab for your own domain if desired; otherwise always new tab:
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });

  // ----- 4) Disable lightbox for People sections -----
  // Any gallery item inside sections with ids (or classes) for people
  const peopleSelectors = ['#current-people', '#former-people', '.people-gallery-section'];
  document.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    const inPeople = item.closest(peopleSelectors.join(', '));
    if (inPeople) {
      // Stop any lightbox logic the site might run
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
  }, true);

  // ----- 5) Lightbox swipe support + next/prev -----
  const lb = qs('.lightbox');
  if (lb) {
    let touchStartX = null;
    lb.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].clientX; }, {passive:true});
    lb.addEventListener('touchend', (e) => {
      if (touchStartX == null) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      // threshold for swipe
      if (Math.abs(dx) > 50) {
        const dir = dx < 0 ? 'next' : 'prev';
        const btn = qs(`.lightbox .nav.${dir}`);
        btn && btn.click();
      }
      touchStartX = null;
    }, {passive:true});

    // Keyboard arrows (in case not already wired)
    document.addEventListener('keydown', (e) => {
      if (lb.getAttribute('aria-hidden') === 'false') {
        if (e.key === 'ArrowRight') qs('.lightbox .nav.next')?.click();
        if (e.key === 'ArrowLeft')  qs('.lightbox .nav.prev')?.click();
      }
    });
  }

  // ----- 6) Snap to top when switching gallery subsections -----
  // If your subsection buttons have .gallery-nav-item and toggle sections,
  // this ensures we scroll to the top of the new section on tap.
  const galleryNav = qs('#gallery .gallery-nav');
  if (galleryNav) {
    galleryNav.addEventListener('click', (e) => {
      const btn = e.target.closest('.gallery-nav-item');
      if (!btn) return;
      // allow your existing handler to switch sections first
      setTimeout(() => {
        const activeSec = qs('#gallery .gallery-section.active');
        activeSec && activeSec.scrollIntoView({behavior: 'smooth', block: 'start'});
      }, 0);
    });
  }

    // ---- Mobile gallery hamburger (dropdown) ----
    (function () {
      const btn = document.querySelector('.gallery-menu-btn');
      const menu = document.getElementById('galleryMenu');
      const list = document.querySelector('.gallery-menu-list');
      const backdrop = document.querySelector('.gallery-menu-backdrop');
      const sourceBtns = Array.from(document.querySelectorAll('#gallery .gallery-nav .gallery-nav-item'));
    
      if (!btn || !menu || !list || !sourceBtns.length) return;
    
      // Build list from existing tabs
      list.innerHTML = sourceBtns.map(b => {
        const label = b.textContent.trim();
        const key = b.dataset.section;
        return `<li><a href="#" role="menuitem" data-section="${key}">${label}</a></li>`;
      }).join('');
    
      function openMenu() {
        btn.setAttribute('aria-expanded', 'true');
        menu.hidden = false; backdrop.hidden = false;
        // focus first item
        const first = menu.querySelector('a[role="menuitem"]');
        first && first.focus();
      }
      function closeMenu() {
        btn.setAttribute('aria-expanded', 'false');
        menu.hidden = true; backdrop.hidden = true;
        btn.focus();
      }

        function openMenu() {
          btn.setAttribute('aria-expanded', 'true');
          menu.hidden = false; backdrop.hidden = false;
          document.documentElement.classList.add('no-scroll');   // add this
          const first = menu.querySelector('a[role="menuitem"]'); first && first.focus();
        }
        function closeMenu() {
          btn.setAttribute('aria-expanded', 'false');
          menu.hidden = true; backdrop.hidden = true;
          document.documentElement.classList.remove('no-scroll'); // add this
          btn.focus();
        }
    
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        if (open) closeMenu(); else openMenu();
      });
      backdrop.addEventListener('click', closeMenu);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') closeMenu();
      });
      window.addEventListener('resize', () => {
        if (window.innerWidth > 900 && btn.getAttribute('aria-expanded') === 'true') closeMenu();
      });
    
      // Activate section when an item is clicked (delegated)
      list.addEventListener('click', (e) => {
        const a = e.target.closest('a[role="menuitem"]');
        if (!a) return;
        e.preventDefault();
        const key = a.getAttribute('data-section');
        // trigger the original tab’s click so all existing logic runs (including scroll fixes)
        const orig = document.querySelector(`#gallery .gallery-nav .gallery-nav-item[data-section="${key}"]`);
        if (orig) orig.click();
        closeMenu();
      });
    })();
})();