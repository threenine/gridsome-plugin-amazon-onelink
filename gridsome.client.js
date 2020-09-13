export default function (Vue, options, context) {
    if (!options.affiliateId) {
        console.error("affiliate Id not set");
    }

    if (!options.affiliateUrl)
        options.affiliateUrl =
            "//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=";

    Vue.prototype.$oneLink = function () {};

    function setupOneLink(options) {}
}

/*

<div id="amzn-assoc-ad-2234234234-2342342143-213412341232-2134123"></div>
<script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=2234234234-2342342143-213412341232-2134123"></script>
 */
