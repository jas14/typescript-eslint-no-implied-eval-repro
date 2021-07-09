const maybeUndefined: () => void | undefined = undefined
const noop = () => { /* noop */ }

setTimeout(
  maybeUndefined || noop,
  500
)
