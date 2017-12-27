/*
 * file-loader.js - Copyright (C) 2017-2018
 *
 * Will load files for http server.
 *
 * File is licenced under project's global licence.
 * See Licence.txt for more details.
 */
/**
 * @module lang
 */
const errors = require("./errors.js"),
    filename = "file-loader.js";

try {
    const fs = require("fs"),
        path = require("path"),
        url = require("url"),
        mimeTypes = require("mime-types").lookup;
    path.sep = "/";
} catch (err) {
    throw new errors.LoadingError(filename);
}

/**
 * FileLoader - Will load files for http server.
 */
class FileLoader {
    /**
     * @param {String} name The file name.
     * @param {Object} [httpres] HTTPResponse For Automatic Delivery of Content.
     */
    constructor(name = new errors.ArgsError("FileLoader", 1, "Name", filename), httpres) {
        try {
            this.name = url.format(name).split(/\?/g)[0];
            this.res = httpres;
        } catch (err) {
            throw new errors.InternalError(filename);
        }
    }

    /**
     * mimeType - Will detect MIME type of a extension
     *
     * @param {String} type Extension of file
     * @returns {String} MIME type of extension
     * @private
     */
    mimeType(type = new errors.ArgsError("FileLoader.mimeType", 1, "type", filename)) {
        try {
            return mimeTypes(type) || "application/octet-stream";
        } catch (err) {
            throw new errors.DepError(filename);
        }
    }

    /**
     * load - Will Load Content. Please Note:
     * If The httpres was included, This will return undefined.
     * But, If not, It will return a Promise.
     *
     * @returns {undefined|Promise}
     */
    load() {
        try {
            let exist;
            exist = fs.existsSync(this.name);
            if (!exist) {
                if (this.end) {
                    this.res.statusCode = 404;
                    this.res.end(`Failed loading ${this.name}.`);
                }
                return;
            }
            if (fs.statSync(this.name).isDirectory())
                this.name = path.join(this.name, "/index.html");
            if (this.res)
                fs.readFile(this.name, (err, data) => {
                    if (err) {
                        this.res.statusCode = 500;
                        this.res.end(`Failed reading ${this.name}.`);
                        return;
                    }

                    this.res.setHeader("Content-type", this.mimeType(path.parse(this.name).ext));
                    this.res.end(callback(data));
                });
            else
                return new Promise((ful, rej) => {
                    fs.readFile(this.name, (err, data) => {
                        if (err)
                            rej(err);

                        ful(data);
                    });
                });
        } catch (err) {
            throw new errors.EnvError(filename);
        }
    }
}

module.exports = FileLoader;
