const translate = require('translate-google')
const { successResponse } = require('./success-response-controller')
const { errorResponse } = require('./error-response-controller')

exports.translateData = async (req, res) => {
    const { sourceText, targetLanguage } = req.body;
    try {
        const translatedText = await translate(sourceText, { to: targetLanguage })
        console.log(translatedText)
        res.send(successResponse(201, "sourceText translated for targetLanguage successfully", translatedText))
    }
    catch (error) {
        res.status(500).send(errorResponse(500, error.message))
    }
}