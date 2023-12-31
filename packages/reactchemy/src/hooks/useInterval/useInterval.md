Use [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) in functional React component with the same API.
Set your callback function as a first parameter and a delay (in milliseconds) for the second argument. You can also stop the timer passing `null` instead the delay or even, execute it right away passing `0`.

The main difference between the `setInterval` you know and this `useInterval` hook is that its arguments are "dynamic". You can get more information in the Dan Abramov's [blog post](https://overreacted.io/making-setinterval-declarative-with-react-hooks/).
