For some people, motion can be harmful.

The prefers-reduced-motion CSS media query allows us to disable animations for these folks. For our animations that are entirely in CSS (eg. CSS transitions, CSS keyframe animations), this works great 💯

What about for our animations in JavaScript, though? For example, when we use a library like React Spring or Framer Motion? We need to manage it ourselves, and it becomes a pretty tricky endeavour.

For these cases, is the use-prefers-reduced-motion hook.
