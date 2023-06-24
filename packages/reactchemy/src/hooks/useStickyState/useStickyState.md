The useState React hook is great for state that should be freshly initialized on every visit, but what about for state that should be persisted between sessions?

A good example of this is filters. If I set a filter to sort based on price instead of newest items, that value should "stick", so that if I come back to this site in a week, it remembers that I want to sort by price.

The useStickyState hook works just like useState, except it backs up to (and restores from) localStorage.
