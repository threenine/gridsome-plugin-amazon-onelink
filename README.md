# Gridsome plugin for Amazon Onelink Configuration

A plugin to enable adding the Amazon Onelink to your Gridsome based website.

### What is Amazon OneLink

Amazon OneLink enables you to monetize traffic on your site from a number of different locales including
United Kingdom (UK), Canada and Germany via Amazon's text links.

It will require you to register for a [US based Amazon Associates](https://affiliate-program.amazon.com/). 

Once you have registered your accounts for Amazon Onelink it will require you to place an additional script on your 
website. This is what this the Gridsome will enable you to do quickly as easily.


### How to Install

Open your terminal window in the root directory of your Gridsome project
```shell script
npm i gridsome-plugin-amazon-onelink
```

## How to get your Get your Amazon One Link Id

Typically the Amazon Onelink script will look like as follows

```html
<div id="amzn-assoc-ad-12345baa-12b1-123e-b123-a123c3b0b1e2"></div>
<script async 
src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=12345baa-12b1-123e-b123-a123c3b0b1e2">

</script>
```
All you will need to do is extract the UUID i.e 12345baa-12b1-123e-b123-a123c3b0b1e2
and add it to your [Environment variables](https://gridsome.org/docs/environment-variables/) using the name AMAZON_ONELINK

### Configure

```javascript
{
   use: 'gridsome-plugin-amazon-onelink',
     options: {
               id: process.env.AMAZON_ONELINK
            }
 }
```

### Support This Project

If you have found this project helpful, either as a library that you use or as a learning tool, please consider buying the team a coffee:

<a href="https://www.buymeacoffee.com/XBhTJcRiC" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important" ></a>

### Developed, Sponsored and Supported

[![threenine logo](http://static.threenine.co.uk/img/github_footer.png)](https://threenine.co.uk/)
