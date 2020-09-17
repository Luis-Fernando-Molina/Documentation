let fs = require('fs')
let APP_SCHEMA
let DOC_SCHEMA
let APP_MAP = new Map()
let DOC_MAP = new Map()
const APP_SCHEMA_FILE_PATH = '../AppSchema.json'
const DOC_SCHEMA_FILE_PATH = './_build/DocSchema.json'

readAppSchema()

function readAppSchema() {
    fs.readFile(APP_SCHEMA_FILE_PATH, onFileRead)

    function onFileRead(err, file) {
        if (err) {
            console.log('[ERROR] build -> Error reading AppSchema -> err = ' + err.stack)
            return
        } else {
            console.log('AppSchema read.')
        }

        APP_SCHEMA = JSON.parse(file.toString())

        for (let i = 0; i < APP_SCHEMA.length; i++) {
            let node = APP_SCHEMA[i]
            APP_MAP.set(node.type, node)
        }
        readDocSchema()
    }
}

function readDocSchema() {
    fs.readFile(DOC_SCHEMA_FILE_PATH, onFileRead)

    function onFileRead(err, file) {
        if (err) {
            console.log('[ERROR] build -> Error reading DocSchema -> err = ' + err.stack)
            return
        } else {
            console.log('DocSchema read.')
        }

        DOC_SCHEMA = JSON.parse(file.toString())

        for (let i = 0; i < DOC_SCHEMA.length; i++) {
            let node = DOC_SCHEMA[i]
            DOC_MAP.set(node.type, node)
        }
        addMissingNodes()
    }
}

function addMissingNodes() {
    for (let i = 0; i < APP_SCHEMA.length; i++) {
        let appNode = APP_SCHEMA[i]
        let docNode = DOC_MAP.get(appNode.type)
        if (docNode === undefined) {
            docNode = {
                type: appNode.type
            }
            DOC_SCHEMA.push(docNode)
            DOC_MAP.set(docNode.type, docNode)
        }
    }
    writeDocSchema()
    readLegacyDefinitions()
}

function writeDocSchema() {
    let fileContent = JSON.stringify(DOC_SCHEMA)
    fs.writeFile(DOC_SCHEMA_FILE_PATH, fileContent, onFileWritten)
    function onFileWritten(err) {
        if (err) {
            console.log('[ERROR] build -> Error writting DocSchema -> err = ' + err.stack)
            return
        } else {
            console.log('DocSchema saved.')
        }
    }
}

function readLegacyDefinitions() {
    let filesCount = 0
    filesArray = [
        './_data/charting_space.yml',
        './_data/crypto_ecosystem.yml',
        './_data/data_mine.yml',
        './_data/network.yml',
        './_data/super_scripts.yml',
        './_data/trading_engine.yml',
        './_data/trading_system.yml'
    ]

    for (let i = 0; i < filesArray.length; i++) {
        let fileName = filesArray[i]
        readFileDefinitions(fileName)
    }

    function readFileDefinitions(fileName) {
        fs.readFile(fileName, onFileRead)

        function onFileRead(err, file) {
            if (err) {
                console.log('[ERROR] build -> Error reading File ' + fileName + ' -> err = ' + err.stack)
                return
            } else {
                console.log(fileName + ' read.')
            }
            let contentArray = file.toString().split('"')

            for (let i = 0; i < contentArray.length; i = i + 2) {
                let nodeName = contentArray[i]
                let definition = contentArray[i + 1]
                nodeName = nodeName.replace(/[\n\r]+/g, '')
                nodeName = nodeName.replace(' ', '')
                nodeName = nodeName.replace(':', '')

                let nodeNameArray = nodeName.split('_')
                let fullNodeName = ''
                let space = ''

                for (let j = 0; j < nodeNameArray.length; j++) {
                    let nodeNamePart = nodeNameArray[j]
                    nodeNamePart = capitalizeFirstLetter(nodeNamePart)
                    fullNodeName = fullNodeName + space + nodeNamePart
                    space = ' '
                }

                docNode = DOC_MAP.get(fullNodeName)
                if (docNode === undefined) {
                    console.log('[ERROR] build -> Error reading File ' + fileName + ' -> nodeName ' + fullNodeName + ' was not found at DocSchema.')
                } else {
                    docNode.definition = definition
                }
            }
            filesCount++
            if (filesCount === filesArray.length) {
                writeDocSchema()
            }
        }
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}