// Configuration constants
const SCROLL_CONFIG = {
  NAVBAR_OFFSET_REM: 4, // Offset in rem units to account for fixed navbar
  SCROLL_BEHAVIOR: "smooth",
};

/**
 * Smoothly scrolls to a target element by its ID
 * @param {string} targetId - The ID of the target element
 */
export const smoothScrollTo = (targetId) => {
  const targetElement = document.getElementById(targetId);

  if (!targetElement) {
    console.warn(`Element with ID "${targetId}" not found`);
    return;
  }

  // Calculate offset in pixels from rem value
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  const offsetPixels = SCROLL_CONFIG.NAVBAR_OFFSET_REM * rootFontSize;

  // Calculate target position accounting for navbar height
  const elementTop = targetElement.getBoundingClientRect().top;
  const targetPosition = elementTop + window.scrollY - offsetPixels;

  // Perform smooth scroll
  window.scrollTo({
    top: targetPosition,
    behavior: SCROLL_CONFIG.SCROLL_BEHAVIOR,
  });
};
