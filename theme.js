/*
 * theme.js - Copyright (C) 2017-2018
 *
 * Generates theme.css.
 *
 * File is licenced under project's global licence.
 * See Licence.txt for more details.
 */
/**
 * @module theme
 */
const errors = require("./errors.js"),
    filename = "theme.js";

try {
    const fontColorContrast = require("font-color-contrast"),
        winTbColor = require("windows-titlebar-color"),
        Color = require("color");
} catch (err) {
    throw new errors.LoadingError(filename);
}

try {
    /**
     * Theme - Generates theme.css.
     * @extends Color
     */
    class Theme extends Color {
        /**
         * @param {string} [color=""] The hex Color.
         * @throws {InternalError}
         */
        constructor(color = "") {
            try {
                winTbColor.reload();
                if (color === "") {
                    if (winTbColor.isSupported)
                        color = winTbColor.accentData.ColorizationColor;
                    else
                        color = "#8bc34a";
                    this.isaccent = true;
                }
                super(color);
                gen();
            } catch (err) {
                throw new errors.InternalError(filename);
            }
        }

        /**
         * reload - Will reload
         *
         * @returns {Object} This.
         * @throws {RuntimeError}
         * @throws {DepError}
         */
        reload() {
            try {
                let color;
                try {
                    winTbColor.reload();
                } catch (err) {
                    throw new errors.DepError(filename);
                }
                if (!this.isaccent)
                    return this;
                if (winTbColor.isSupported)
                    color = winTbColor.accentData.ColorizationColor;
                else
                    color = "#8bc34a";
                gen();
                return this;
            } catch (err) {
                throw new errors.RuntimeError(filename);
            }
        }

        /**
         * gen - Generates Background, Hover and Active Colors
         *
         * @returns {Object} This.
         * @throws {DepError}
         */
        gen() {
            try {
                this.backColor = this.hex();

                if (!(winTbColor.accentData.ColorPrevalence) ||
                    (this.hex() === "#000000") ||
                    (this.hex() === "#FFFFFF"))
                    this.backColor = new Color("#808080");
                else
                    this.backColor = (fontColorContrast(this.hex()) ===
                        "#000000") ? this.lighten(0.5).rgb() : this.darken(0.5).rgb();

                this.hoverColor = (fontColorContrast(this.hex()) ===
                    "#000000") ? this.backColor.lighten(0.1).rgb() : this.backColor.darken(0.1).rgb();
                this.activeColor = (fontColorContrast(this.hex()) ===
                    "#000000") ? this.backColor.lighten(0.2).rgb() : this.backColor.darken(0.2).rgb();
            } catch (err) {
                throw new errors.DepError(filename);
            }
        }

        /**
         * css - Css output for Color; Involving Foreground, Background,
         * Hover and Active colors.
         * @returns {String}
         * @throws {EnvError}
         */
        css() {
            try {
                return `
.fore, .side-self {
    background-color: ${this.hex()};
}
.back, .side-other {
    background-color: ${this.backColor.hex()};
}
.ishover, .onhover:hover, .side-other:hover {
    background-color: ${this.hoverColor.hex()};
}
.isactive, .onactive:active, .side-other:active {
    background-color: ${this.activeColor.hex()};
}
.text {
    color: ${fontColorContrast(this.hex()).toUpperCase()};
}
.colored, .colored-after:after, .colored-before:before {
    background-color: ${fontColorContrast(this.hex()).toUpperCase()};
}
.${(fontColorContrast(this.hex()) === "#000000") ? "white" : "black"} {
    display: none;
}
                `.trim();
            } catch (err) {
                throw new errors.EnvError(filename);
            }
        }
    }
} catch (err) {
    throw new errors.EnvError(filename);
}

module.exports = theme;
