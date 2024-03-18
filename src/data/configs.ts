interface NavigationTypes {
  side: 'side';
  top: 'top';
  bottom: 'bottom';
  wheel: 'wheel';
  bar: 'bar';
}
interface Configs {
  navigationType: NavigationTypes;
}

export const CONFIGS = {
  navigationType: 'wheel',
  theme: window.matchMedia('(prefers-color-scheme: dark)'),
  
}