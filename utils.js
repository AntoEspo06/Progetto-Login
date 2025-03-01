const crypto = require("crypto")
const jwt = require("jsonwebtoken")
const configs = require("./configs")

function generateToken(email) {
    return jwt.sign({ email }, configs.JWT_SECRET, { expiresIn: "1h" })
}

function hashPassword(password) {
    return Buffer.from(password, "utf-8").toString("base64")
}

function replaceElements(elements, template) {
    let result = template
    for (const key in elements) {
        const regex = new RegExp(`{{${key}}}`, "g")
        result = result.replace(regex, elements[key])
    }
    return result
}

function emailFileOf(root) {
    return root === "verify-email" ? "verifyEmailTemplate" : "resetPasswordTemplate"
}

function urlOf(root, token) {
    return `${configs.SITE_URL}/${root}?token=${token}`
}

module.exports = { generateToken, hashPassword, replaceElements, emailFileOf, urlOf }
