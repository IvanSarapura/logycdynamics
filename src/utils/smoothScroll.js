export const smoothScrollTo = (targetId) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const offset =
      4 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 4rem in pixels
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  }
};
