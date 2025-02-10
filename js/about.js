// JS for flipping cards

function toggleFlipped(element, level) {
    let parent = element;
    for (let i = 0; i < level; i++) {
      parent = parent.parentElement;
      if (!parent) return; // Safety check
    }
    parent.classList.toggle("flipped");
  }

document.addEventListener("click", (event) => {
  let target = event.target;

  // Check if the clicked element matches any of the selectors
  if (
    target.classList.contains("bubble") ||
    target.classList.contains("bubble-blue")
  ) {
    toggleFlipped(target, 2);
  } else if (
    target.classList.contains("plus") ||
    target.classList.contains("xsign")
  ) {
    toggleFlipped(target, 3);
  }
});