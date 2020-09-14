export default function (Vue, options, {isClient}) {
    if(!isClient)return

    if (!options.id || options.id ==='') {
        console.error("Amazon Onelink affiliate Id not set");
    }

    function setUpScript(options){
        let scriptLink = `//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=${options.id}`

       return `<script async src="${scriptLink}"></script>`
    }
    function setupDiv(options){
        let divId = `amzn-assoc-ad-${options.id}`
        return `<div id="${divId}"></div>`
    }

    document.body.insertAdjacentHTML('afterend', setUpScript(options))
    document.body.insertAdjacentHTML('afterend', setupDiv(options))

}


