The useBoop hook allows you to apply an animated boop effect to an element in React. The boop effect consists of a combination of movement, rotation, and scaling of the element.

Usage
The useBoop hook accepts an object as a parameter that contains various settings for the boop effect:

x (optional, default: 0): The horizontal displacement of the element during the boop effect.
y (optional, default: 0): The vertical displacement of the element during the boop effect.
rotation (optional, default: 0): The rotation angle of the element during the boop effect.
scale (optional, default: 1): The scaling of the element during the boop effect.
timing (optional, default: 150): The duration of the boop effect in milliseconds.
springConfig (optional, default: { tension: 300, friction: 10 }): The configuration for the spring animation that generates the boop effect.
The useBoop hook returns an array that contains the applied style and a function to trigger the boop effect.
