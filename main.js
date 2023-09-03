  browser.windows.getCurrent().then((windowInfo) => {
    const newState = windowInfo.state === "normal" ? "maximized" : "normal";
    browser.windows.update(windowInfo.id, { state: newState });
  });