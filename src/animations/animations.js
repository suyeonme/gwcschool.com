import gsap from 'gsap';

const tl = gsap.timeline({
  defaults: { ease: 'power2.inOut' },
});

export const showNav = (container, circle, wrapper, links) => {
  tl.to(container.current, {
    duration: 0,
    css: { visibility: 'visible' },
  })
    .to(
      circle.current,
      {
        duration: 1.5,
        css: { width: '2000px', height: '2000px' },
      },
      '-=0.5',
    )
    .to(circle.current, { duration: 0, css: { visibility: 'hidden' } })
    .to(wrapper.current, { opacity: 1, duration: 0.3 })
    .from(links, { duration: 0.6, y: 10, opacity: 0 }, '-=0.2');
};

export const hideNav = (container, circle, wrapper) => {
  tl.to(wrapper.current, { opacity: 0, duration: 0.2 })
    .to(circle.current, { duration: 0, css: { visibility: 'visible' } })
    .to(circle.current, {
      duration: 1.5,
      css: { width: '0px', height: '0px' },
    })
    .to(
      container.current,
      {
        duration: 0,
        css: { visibility: 'hidden' },
      },
      '-=1',
    );
};

export const reveal = (stagger = 0.4, ...el) => {
  gsap.to([...el], {
    y: 0,
    opacity: 1,
    stagger,
    duration: 1,
    ease: 'power3.out',
  });
};

export const slideImg = (img) => {
  gsap.to(img, {
    x: 0,
    scale: 1,
    duration: 1.3,
    ease: 'power3.out',
  });
};
