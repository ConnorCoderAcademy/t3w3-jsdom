const themes = {
    light: {
        background: "white",
        text: "turquoise"
    },
    dark: {
        background: "grey",
        text: "white"
    }
}

function changeCSSTheme (themeName) {
    // console.log(themes[themeName]["background"]);
    // document.documentElement.style.setProperty("--background", themes[themeName]["background"]);
    // document.documentElement.style.setProperty("--text", themes[themeName]["text"]);
    for (const variable in themes[themeName]) {
        document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
    }
}

function toggleLightDark() {
    let currentBackgroundColour = getComputedStyle(document.documentElement).getPropertyValue('--background');
    console.log(currentBackgroundColour);
    if (currentBackgroundColour == "white") {
        changeCSSTheme("dark");
    } else {
        changeCSSTheme("light");
    }
}

