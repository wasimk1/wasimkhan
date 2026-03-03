document.addEventListener("DOMContentLoaded", function () {
  // --- Footer year auto-update ---
  try {
    const footerElem = document.getElementById("footer-copy");
    const startYear = 2022;
    const now = new Date();
    const currentYear = now.getFullYear();
    footerElem.textContent = `©${startYear}-${currentYear} Wasim Khan | All Rights Reserved | Mumbai`;

  } catch (err) {
    console.error("Footer year update error:", err);
  }

  // --- Experience calculation (job start -> today) ---
  try {
    const jobStartDate = new Date("Oct 10, 2022");
    const today = new Date();

    function getYearMonthDifference(start, end) {
      let startYear = start.getFullYear();
      let startMonth = start.getMonth();
      let endYear = end.getFullYear();
      let endMonth = end.getMonth();

      let years = endYear - startYear;
      let months = endMonth - startMonth;

      if (months < 0) {
        years--;
        months += 12;
      }
      return { years, months };
    }

    const diff = getYearMonthDifference(jobStartDate, today);
    // Format: "X" if months == 0, otherwise "X.Y"
    const experienceFormatted =
      diff.months === 0 ? `${diff.years}` : `${diff.years}.${diff.months}`;

    const landingElem = document.getElementById("jobyeareofxperience");
    const aboutElem = document.getElementById("about-jobyeareofxperience");

    if (landingElem) landingElem.textContent = experienceFormatted;
    else console.warn("Element with id 'jobyeareofxperience' not found.");

    if (aboutElem) aboutElem.textContent = experienceFormatted;
    else console.warn("Element with id 'about-jobyeareofxperience' not found.");
  } catch (err) {
    console.error("Experience calculation error:", err);
  }
});
