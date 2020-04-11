const themes = {
    blueprint: require('./themes/blueprint'),
    basic: require('./themes/basic'),
    flat: require('./themes/flat'),
    simple: require('./themes/simple'),
}

module.exports = {
    getTheme({ theme, customTheme }) {
        if (theme === 'custom') {
            return customTheme
        } else {
            return themes[theme]
        }
    },
}
