# TODO: Add Zoom Animation to SolarConnect Button

## Steps:

- [x] User approval obtained for edit plan
- [x] Create TODO.md and breakdown steps
- [x] Edit src/app/solarconnect/page.tsx to replace `<a>` with `<motion.a>` + Framer Motion props (whileHover={{ scale: 1.05 }}, spring transition)
- [x] Verify edit success (diff shows motion.a added correctly)
- [x] Update TODO.md with progress

**Task complete:** Button now smoothly zooms in on hover (scale 1.05) and zooms out on leave, using Framer Motion spring animation. Complements existing Tailwind hovers.

**To test:** Run `npm run dev` and visit http://localhost:3000/solarconnect, hover the "Fill Out the Form" button.
