figma.showUI(__html__, {
  width: 300,
  height: 320,
  themeColors: true,
});

figma.ui.onmessage = (msg) => {
  figma.closePlugin();
};
