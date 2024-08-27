const path = require('path')
const fs = require('path')
const jimp = require('jimp')
const { Fraction } = require('fractional')
const fraction = require('fractional').Fraction


const defaultWidth = 300
const defaultHeight = 300
const defaultAspect = '1:1'
const defaultBackground = "#000000"
const defaultColor = "#FFFFFF"
const defaultStroke = "#0C0C0C"
const defaultText = "300x300"

function calculateAspect(options ={
    width: null,
    height: null
}){
    if (width === null || height === null){
        return 'N/A'
    }

    var decimal = width/height
    var fraction = new Fraction(decimal)
    var string = fraction.numerator + ':' + fraction.denominator

    return string
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
    // no width given
    if (options.width === null){
        // no width or height given
        if (options.height === null){
            options.width=300
            options.height=300
            options.aspect='1:1'
        }
        // no width but height given
        else if (options.height !== null){
            // no aspect given
            if (options.aspect === null){
                options.width=defaultWidth
                options.aspect=calculateAspect({width: options.width, height: options.height})
            }
            // aspect given 
            else {
                var words=options.aspect.split(':')
                var num=words[0] // width aspect
                options.width=options.height*num
            }
        }
    }
    else if (options.height === null){
        
    }
}