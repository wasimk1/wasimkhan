# Theme restore point

Before applying Modern Editorial, the complete sage/gold design was saved as Git tag `before-modern-editorial` (commit `9ad5c819c3efb7cd4b824fe55b0af71fc3ec9a3d`). It is also published as Sites version 2.

To restore the theme without losing later content edits, remove `src/editorial.css` from the styles list in `angular.json`, restore the hero heading's line break from the tag, and restore the previous favicon and theme-color metadata. Compare any later changes before restoring files wholesale. Build and republish after restoration. Avoid hard-resetting the repository.

The Modern Editorial theme retains the existing developer illustration in monochrome; no real portrait was supplied.
