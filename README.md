# BULLDOG :uk: Theme
A bootstrap based, clean and simple Ghost theme for bloggers with a british charme. 

## :bulb: Features

<img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>  <img alt="SASS" src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white"/> <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="jQuery" src="https://img.shields.io/badge/jquery-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white"/> <img alt="Ko-Fi" src="https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white" />

Bulldog includes many features build in the theme and ready to use. Some highlights are auto dark mode, text-size adjustments, build-in syntax highlighter with Prism.JS including all languages, line numbers and clipboard function as well as build-in utterances comments. offoo

- [x] Responsive Bootstrap Design
- [x] Dark Mode (manual and auto)
- [x] Post Tag Cloud
- [x] Project List
- [x] Font Awesome Icons
- [x] Local included JS and CSS Libraries
- [x] Utterranc.es and Cusdis Comments
- [x] Code Highlighter and Clipboard with PRISM JS
- [x] Ko-Fi Implementation
- [x] Barrier-free reading by adjusting the text size
- [x] Easy to customize SASS

## Table of Contents

- [Installation](#floppy_disk-installation)
- [Configuration](#wrench-configuration)
- [Projects](#projects)
- [Sponsor](#sponsor)

## :floppy_disk: Installation
Download the latest release on Github, download the zip, extract the folder, and paste it into your theme folder (content/themes) of your Ghost installation or upload the file via the Ghost theme uploader.


### Demo
For a quick demo you can visit

## :wrench: Configuration
The theme has been build to support a *no-code* customization by just editing most of the customizations directly within your Ghost Site Injection. This makes it easy to fit your needs without entering the deep code. Please find below some main config that you may tackle.

### :art: Color
Bulldog supports two main themes from the scratch. There is a light theme and a dark theme. The default is the light theme. The user can always switch between light and dark through the settings panel. You can change the default theme by setting the theme in your code injection

```javascript
var theme = "dark";
```
You can also select "auto". In this case the theme will change based on the users operation system behaviour. 


### Social Media Links
You can enable social media links on the footer of your page. The links are based on the secondary navigation of your Ghost site. Each secondary navigation element will be transferred to a social link including icon. The label of the navigation item must match the fontawesome name. Example:


### :triangular_ruler:  SASS
The theme has a build in SASS structure and provides you the ability to modify specific code. All SASS files are loaded in the "import.scss" and then compiled to a css file. You may only overwrite changes in the "custom.scss". 

If you do any modifications to the theme you need to re-build the CSS file. SASS could be compiled with the cmd: "sass assets/sass/import.scss assets/css/main.css"

### :cookie: Cookies 
If you use cookies in your theme (like with Matomo, theme switcher etc.) you may want to inform your visitors about this. BULLDOG uses the famous cookieconsent javascript plugin to manage your cookie banner. You can enable and configure the banner via the code injection.

```javascript
var cookies = true;
var cookietext = "This is a text";
var cookiebutton = "Confirm";
```

### :crystal_ball: Comments
You can activate a comment section based on Utterances or Cusdis. For Utterances follow their how-to (https://utteranc.es) to setup your GitHub issues for collecting your comments. For Cusdis (enabled by default) you need to host your own comment system and connect with your details. Afterwards configure the plugin under 

:arrow_right: ``` partials/comments.hbs ```



## Projects
You can add an overview of your projects to the frontpage. To do this you need to inject the project data into Settings - Code Injection - Site Header. The data needs to be entered as array. 
```javascript
var projects = [
  		{
    		type: 'javascript',
    		name: 'test',
        	description: 'This is a test project',
    		url: 'https://macn.tech'
  		}
];
```
You can add as many as you like by just adding another project block. 



## Sponsor

If you like this theme I would be very happy to reveive your feedback or a coffee to stay awake and continue coding nice things

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/I2I12FSW2)

Still need a server to spin up your own ghost installation? Check out my refer link for your Hetzner cloud server and get 20 EUR on top:
[Click Here](https://hetzner.cloud/?ref=ir0WnxeEHrmU)

Follow me on Twitter or on my own blog for any news

<img alt="Twitter" src="https://img.shields.io/badge/b1cKberry-%231DA1F2.svg?&style=for-the-badge&logo=Twitter&logoColor=white"/>
