if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/.github.io/sw.js', { scope: '/.github.io/' })
  })
}
