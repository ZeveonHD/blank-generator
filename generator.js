const path = require('path')
const fs = require('path')
const jimp = require('jimp')

const defaultWidth = 300
const defaultHeight = 300
const defaultAspect = '1:1'
const defaultBackground = "#000000"
const defaultColor = "#FFFFFF"
const defaultStroke = "#0C0C0C"
const defaultText = "300x300"

function getAspect(options = {
    width: null,
    height: null
}){
    if (width === null || height === null){
        return 'N/A'
    }
}

function calculateAspect(options ={
    width: null,
    height: null
}){
    if (width === null || height === null){
        return 'N/A'
    }
    
}

const generateBlankImage = (options = {
    width: null,
    height: null,
    aspect: null,
    background: null,
    color: null,
    stroke: null,
    text: null
}) => {
    if (options.width === null){
        if (options.height === null){
            options.width=300
            options.height=300
            options.aspect='1:1'
        }
        else if (options.height !== null){
            if (options.aspect === null){
                options.width=defaultWidth
                options.aspect
            }
        }
    }
}