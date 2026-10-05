export const THEME_KEY = 'theme'
export const DARK_QUERY = '(prefers-color-scheme: dark)'

// Runs before first paint so a saved or system dark theme never flashes light.
export const themeScript = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');var d=t==='dark'||(t!=='light'&&matchMedia('${DARK_QUERY}').matches);document.documentElement.dataset.theme=d?'dark':'light'}catch(e){}})()`
