/*
 * lang.js - Copyright (C) 2017-2018
 *
 * Loads Languages.
 *
 * File is licenced under project's global licence.
 * See Licence.txt for more details.
 */
/**
 * @module lang
 */
const errors = require("./errors.js"),
    filename = "lang.js";

try {
    const fs = require("fs"),
        ini = require("ini");
} catch (err) {
    throw new errors.LoadingError(filename);
}

try {
    /**
     * Lang - Loads Languages.
     */
    class Lang {
        /**
         * @throws {InternalError}
         */
        constructor() {
            try {
                this.filled = "=";
                this.empty = " ";
                this.noProgress = false;
                this.langs = null;
            } catch (err) {
                throw new errors.InternalError(filename);
            }
        }

        /**
         * load - [ASYNC] Loads all Languages and saves it to this.langs.
         *
         * @returns {Object} this.
         * @throws {RuntimeError}
         */
        async load() {
            try {
                var arr = fs.readdirSync(`${Lang.dirname}lang/`) || [],
                    langs = {},
                    each = arr.length / 100,
                    stats = 0;
                if (typeof arr !== "object" || typeof arr.length !== "number")
                    return this;
                if (!this.noProgress)

                    process.stdout.write("\n");
                await Promise.all(arr.map(async each => {
                    if (each === "disabled")
                        return stats++;
                    this.progress(++stats * each, 18);
                    return langs[each] = await this.parseLang(each);
                }));

                // TODO: add extension languages, Too!

                this.progress(100, 18);
                if (!this.noProgress)
                    process.stdout.write("\n");
                this.langs = langs;
                return this;
            } catch (err) {
                throw new RuntimeError(filename);
            }
        }

        /**
         * parseLang - [ASYNC] Loads a language through ~/langs/.
         *
         * @param {String} langName Language Name
         * @returns {Object} Loaded language
         * @private
         * @throws {RuntimeError}
         */
        async parseLang(langName = new errors.ArgsError("Lang.parseLang", 1, "langName", filename)) {
            try {
                var arr = fs.readdirSync(`${Lang.dirname}lang/${langName}/`),
                    lang = {},
                    newArr;

                newArr = arr.map(async each => {
                    lang[each.replace(/\.[^.]*/, "")] = ini.parse(await this.readFile(`${each.replace(/\.[^.]*/, "")}.ini`));
                    return each;
                });

                await Promise.all(newArr);

                return lang;
            } catch (err) {
                throw new errors.RuntimeError(filename);
            }
        }


        /**
         * readFile - [ASYNC<Promise>] Promisified fs.readFile
         *
         * @param {String} file File Name
         * @returns {Promise}
         * @private
         * @throws {EnvError}
         */
        readFile(file = new errors.ArgsError("Lang.readFile", 1, "file", filename)) {
            try {
                return new Promise((ful, rej) => {
                    fs.readFile(file, (err, text) => {
                        if (err)
                            rej(err);
                        ful(text);
                    });
                });
            } catch (err) {
                throw new errors.EnvError();
            }
        }

        /**
         * progress - Will Show a progressbar in console, Can be configured.
         * Use this.filled, this.empty, and this.noProgress.
         *
         * @param {number} [progress=0] The current progress
         * @param {number} [max=18] [REC VALUE = 18] Progressbar Length
         * @private
         * @throws {RuntimeError}
         */
        progress(progress = 0, max = 18) {
            try {
                if (this.noProgress)
                    return;
                if (progress < 0)
                    progress = 0;
                if (progress > 100)
                    progress = 100;
                process.stdout.clearLine();
                process.stdout.write(`\r[${this.filled.repeat(Math.ceil(progress / (100 / max)))}${this.empty.repeat(max - Math.ceil(progress / (100 / max)))}] ${progress}%`);
            } catch (err) {
                throw new errors.RuntimeError(filename);
            }
        }
    }

    Lang.dirname = "";
} catch (err) {
    throw new errors.EnvError(filename);
}

module.exports = Lang;
