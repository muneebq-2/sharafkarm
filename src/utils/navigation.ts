export const scrollToSection = (sectionId: string, offset = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: 'smooth',
    });
  }
};

export const scrollToHash = (hash: string) => {
  const sectionId = hash.replace('#', '');
  if (sectionId) {
    requestAnimationFrame(() => scrollToSection(sectionId));
  }
};
