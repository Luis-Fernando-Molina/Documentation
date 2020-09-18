let fs = require('fs')
let APP_SCHEMA
let DOC_SCHEMA
let APP_MAP = new Map()
let DOC_MAP = new Map()
const APP_SCHEMA_FILE_PATH = '../AppSchema.json'
const DOC_SCHEMA_FILE_PATH = './_build/DocSchema.json'
const FOLDERS_ARRAY = [
    'charting_space',
    'crypto_ecosystem',
    'data_mine',
    'network',
    'super_scripts',
    'trading_engine',
    'trading_system',
    'new_nodes'
]
const FOLDER_PATH = './_includes'
const OUTPUT_PATH = './_build/_includes'
const SECTIONS = [
    ['content', '<!--------------------------------------------- CONTENT starts -->', '<!--------------------------------------------- CONTENT ends -->'],
    ['adding', '<!--------------------------------------------- ADDING starts -->', '<!--------------------------------------------- ADDING ends -->'],
    ['configuring', '<!--------------------------------------------- CONFIGURING starts -->', '<!--------------------------------------------- CONFIGURING ends -->'],
    ['starting', '<!--------------------------------------------- STARTING starts -->', '<!--------------------------------------------- STARTING ends -->'],
    ['charts', '<!--------------------------------------------- CHARTS starts -->', '<!--------------------------------------------- CHARTS ends -->']
]

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
    removeDeletedNodes()
}

function removeDeletedNodes() {
    let NEW_DOC_SCHEMA = []
    for (let i = 0; i < DOC_SCHEMA.length; i++) {
        let docNode = DOC_SCHEMA[i]
        let appNode = APP_MAP.get(docNode.type)
        if (appNode === undefined) {
            DOC_MAP.delete(docNode.type)
        } else {
            NEW_DOC_SCHEMA.push(docNode)
        }
    }
    DOC_SCHEMA = NEW_DOC_SCHEMA
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
                let fullNodeName = restoreLegacyNodeName(nodeName)

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
                readLegacyContent()
            }
        }
    }
}

function restoreLegacyNodeName(nodeName) {

    nodeName = nodeName.replace(/[\n\r]+/g, '')
    nodeName = nodeName.replace(' ', '')
    nodeName = nodeName.replace(':', '')
    nodeName = nodeName.replace('-', '_')
    nodeName = nodeName.replace('-', '_')
    nodeName = nodeName.replace('-', '_')
    nodeName = nodeName.replace('-', '_')
    nodeName = nodeName.replace('-', '_')

    let nodeNameArray = nodeName.split('_')
    let fullNodeName = ''
    let space = ''

    for (let j = 0; j < nodeNameArray.length; j++) {
        let nodeNamePart = nodeNameArray[j]
        nodeNamePart = capitalizeFirstLetter(nodeNamePart)
        fullNodeName = fullNodeName + space + nodeNamePart
        space = ' '
    }
    return fullNodeName
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function readLegacyContent() {
    let totalFiles = 0
    let fileCounter = 0

    for (let i = 0; i < FOLDERS_ARRAY.length; i++) {
        let folderName = FOLDERS_ARRAY[i]
        scanFolder(folderName)
    }

    function scanFolder(folderName) {

        fs.readdir(FOLDER_PATH + '/' + folderName, (err, files) => {
            if (err) {
                console.log('[ERROR] build -> Error reading Folder ' + folderName + ' -> err = ' + err.stack)
                return
            } else {
                console.log(folderName + ' read.')
            }
            for (let i = 0; i < files.length; i++) {
                let fileName = files[i]
                readFileSection(fileName)
            }

            function readFileSection(fileName) {

                totalFiles++
                fs.readFile(FOLDER_PATH + '/' + folderName + '/' + fileName, onFileRead)

                function onFileRead(err, file) {
                    if (err) {
                        console.log('[ERROR] build -> Error reading file content of file ' + fileName + ' -> err = ' + err.stack)
                        return
                    } else {
                        //console.log(fileName + ' content read.')
                    }

                    fileCounter++
                    for (let j = 0; j < SECTIONS.length; j++) {
                        let section = SECTIONS[j]
                        readSection(section[0], section[1], section[2])
                    }

                    if (fileCounter === totalFiles) {
                        writeDocSchema()
                        deleteFolders()
                    }

                    function readSection(propertyName, initialSplit, finalSplit) {

                        let fileContent = file.toString()

                        /* Basic validations */
                        if (fileContent.indexOf(initialSplit) < 0) {
                            console.log('[ERROR] build -> Section not processed. ' + initialSplit + ' was not found at file: ' + folderName + '/' + fileName)
                            return
                        }

                        if (fileContent.indexOf(finalSplit) < 0) {
                            console.log('[ERROR] build -> Section not processed. ' + finalSplit + ' was not found at file: ' + folderName + '/' + fileName)
                            return
                        }

                        let contentArray = fileContent.split(initialSplit)
                        if (contentArray[1] === undefined) {
                            console.log('[ERROR] build -> Bad Format for ' + propertyName + '. Could not extract this data for file: ' + folderName + '/' + fileName)
                            return
                        }

                        contentArray = contentArray[1].split(finalSplit)
                        fileContent = contentArray[0]
                        let paragraphArray = fileContent.split('\n')
                        let paragraphs = []

                        for (let i = 0; i < paragraphArray.length; i++) {
                            let paragraph = paragraphArray[i]
                            //if (paragraph === "\r") { continue }
                            if (paragraph === "") { continue }
                            paragraphs.push(paragraph)
                        }
                        let legacyNodeName = fileName.replace('.md', '')
                        let fullNodeName = restoreLegacyNodeName(legacyNodeName)
                        let docNode = DOC_MAP.get(fullNodeName)
                        if (docNode === undefined) {
                            console.log('[ERROR] build -> Error reading content from File ' + fileName + ' -> nodeName ' + fullNodeName + ' was not found at DocSchema.')
                        } else {
                            docNode[propertyName] = paragraphs
                            docNode.folderName = folderName
                        }
                    }
                }
            }
        })
    }
}

function deleteFolders() {
    /* Delete all folders, so that any file that is no longer needed is deleted. */
    let totalFolders = 0
    let folderCount = 0
    let rimraf = require("rimraf")
    for (let i = 0; i < FOLDERS_ARRAY.length; i++) {
        let folderName = FOLDERS_ARRAY[i]
        try {
            totalFolders++
            rimraf(OUTPUT_PATH + '/' + folderName, function () { 
                folderCount++
                console.log(folderName + " deleted.");
                if (folderCount === totalFolders) {
                    createFolders()
                }
             });
        } catch (err) {
            console.log('[ERROR] build -> Could not delete this folder: ' + folderName + '.')
        }
    }
}

function createFolders() {
    for (let i = 0; i < FOLDERS_ARRAY.length; i++) {
        let folderName = FOLDERS_ARRAY[i]
        fs.mkdirSync(OUTPUT_PATH + '/' + folderName)
    }
    readTemplates()
}

function readTemplates() {
    /* First we read the templates we will need, each template has the same name that folders. */
    let fileCounter = 0
    let totalFiles = 0
    let templateMap = new Map()

    for (let i = 0; i < FOLDERS_ARRAY.length; i++) {
        let templateName = convertToTemplateName(FOLDERS_ARRAY[i])

        fs.readFile('./_build/templates/' + templateName, onFileRead)
        totalFiles++

        function onFileRead(err, file) {
            if (err) {
                console.log('[ERROR] build -> Error reading Templeate ' + templateName + ' -> err = ' + err.stack)
                return
            } else {
                console.log(templateName + ' read.')
            }
            fileCounter++

            let template = file.toString()
            templateMap.set(templateName, template)

            if (fileCounter === totalFiles) {
                createFiles(templateMap)
            }
        }
    }
}

function convertToTemplateName(folderName) {
    let templateName = folderName
    templateName = templateName.replace('_', '-')
    templateName = templateName.replace('_', '-')
    templateName = templateName.replace('_', '-')
    templateName = templateName.replace('_', '-')
    templateName = templateName.replace('_', '-')
    templateName = templateName.replace('_', '-')
    templateName = templateName + '.md'
    return templateName
}

function convertDocNodeTypeToFileName(docNodeType) {
    let fileName = docNodeType.toLowerCase()
    fileName = fileName.replace(' ', '-')
    fileName = fileName.replace(' ', '-')
    fileName = fileName.replace(' ', '-')
    fileName = fileName.replace(' ', '-')
    fileName = fileName.replace(' ', '-')
    fileName = fileName.replace(' ', '-')
    return fileName + '.md'
}

function createFiles(templateMap) {
    for (let i = 0; i < DOC_SCHEMA.length; i++) {
        let docNode = DOC_SCHEMA[i]
        let template
        if (docNode.folderName === undefined) {
            template = templateMap.get(convertToTemplateName('new_nodes'))
            createNodeFile(docNode, template, 'new_nodes')
        } else {
            template = templateMap.get(convertToTemplateName(docNode.folderName))
            createNodeFile(docNode, template, docNode.folderName)
        }
    }
}

function createNodeFile(docNode, template, folderName) {
    let fileName = convertDocNodeTypeToFileName(docNode.type)

    let fileContent = template
    for (let j = 0; j < SECTIONS.length; j++) {
        let section = SECTIONS[j]
        let newFileContent = injectSection(section[0], section[1], section[2])

        if (newFileContent !== undefined) {
            fileContent = newFileContent
        }
    }

    saveFileContent(fileName, folderName, fileContent)

    function injectSection(propertyName, initialSplit, finalSplit) {
        /* Basic validations */
        if (fileContent.indexOf(initialSplit) < 0) {
            console.log('[ERROR] build -> injectSection not processed. ' + initialSplit + ' was not found at template: ' + folderName + '/' + fileName)
            return
        }

        if (fileContent.indexOf(finalSplit) < 0) {
            console.log('[ERROR] build -> injectSection not processed. ' + finalSplit + ' was not found at template: ' + folderName + '/' + fileName)
            return
        }

        let templateInitialSplit = fileContent.split(initialSplit)
        let templateFinalSplit = templateInitialSplit[1].split(finalSplit)

        let docNodeContent = ''

        let paragraphs = docNode[propertyName]
        if (paragraphs !== undefined) {
            for (k = 0; k < paragraphs.length; k++) {
                let paragraph = paragraphs[k]
                docNodeContent = docNodeContent + paragraph
            }
        }

        let finalContent = templateInitialSplit[0] + initialSplit + docNodeContent + finalSplit + templateFinalSplit[1]
        return finalContent
    }

    function saveFileContent(fileName, folderName, fileContent) {
        fs.writeFile(OUTPUT_PATH + '/' + folderName + '/' + fileName, fileContent, onFileWritten)
        function onFileWritten(err) {
            if (err) {
                console.log('[ERROR] build -> Error writting Doc Node File ' + folderName + '/' + fileName + ' -> err = ' + err.stack)
                return
            } else {
                //console.log('DocSchema saved.')
            }
        }
    }
}

