(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"c3+2":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("q1tI"),o=a.n(n),r=(a("Wbzz"),a("Bl7J")),l=a("vrFN");var s=a("dI71"),i=(a("pxKY"),{name:{verticalAlign:"top",display:"none",margin:0,border:"none",fontSize:"16px",fontFamily:"Helvetica Neue",padding:"16px",color:"#373F4A",backgroundColor:"transparent",lineHeight:"1.15em",placeholderColor:"#000",_webkitFontSmoothing:"antialiased",_mozOsxFontSmoothing:"grayscale"},leftCenter:{float:"left",textAlign:"center"},blockRight:{display:"block",float:"right"},center:{textAlign:"center"}}),c=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={cardBrand:"",nonce:void 0,googlePay:!1,applePay:!1,masterpass:!1},a.requestCardNonce=a.requestCardNonce.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.requestCardNonce=function(){this.paymentForm.requestCardNonce()},a.componentDidMount=function(){var e=this,t={applicationId:"sandbox-sq0idb-7RUZ2XXFwZoLp_JsTFXY6w",locationId:"LTYBG9YYK3DX3",inputClass:"sq-input",autoBuild:!1,inputStyles:[{fontSize:"16px",fontFamily:"Helvetica Neue",padding:"16px",color:"#373F4A",backgroundColor:"transparent",lineHeight:"1.15em",placeholderColor:"#000",_webkitFontSmoothing:"antialiased",_mozOsxFontSmoothing:"grayscale"}],applePay:{elementId:"sq-apple-pay"},masterpass:{elementId:"sq-masterpass"},googlePay:{elementId:"sq-google-pay"},cardNumber:{elementId:"sq-card-number"},cvv:{elementId:"sq-cvv",placeholder:"CVV"},expirationDate:{elementId:"sq-expiration-date",placeholder:"MM/YY"},postalCode:{elementId:"sq-postal-code",placeholder:"Zip"},callbacks:{methodsSupported:function(t){console.log(t),t.googlePay&&e.setState({googlePay:t.googlePay}),t.applePay&&e.setState({applePay:t.applePay}),t.masterpass&&e.setState({masterpass:t.masterpass})},createPaymentRequest:function(){return{requestShippingAddress:!1,requestBillingInfo:!0,currencyCode:"USD",countryCode:"US",total:{label:"MERCHANT NAME",amount:"100",pending:!1},lineItems:[{label:"Subtotal",amount:"100",pending:!1}]}},cardNonceResponseReceived:function(t,a,n){if(t)return console.log("Encountered errors:"),void t.forEach((function(e){console.log("  "+e.message)}));e.setState({nonce:a}),console.log(a)},unsupportedBrowserDetected:function(){},inputEventReceived:function(t){switch(t.eventType){case"focusClassAdded":case"focusClassRemoved":break;case"errorClassAdded":document.getElementById("error").innerHTML="Please fix card information errors before continuing.";break;case"errorClassRemoved":document.getElementById("error").style.display="none";break;case"cardBrandChanged":"unknown"!==t.cardBrand?e.setState({cardBrand:t.cardBrand}):e.setState({cardBrand:""})}},paymentFormLoaded:function(){document.getElementById("name").style.display="inline-flex"}}};this.paymentForm=new this.props.paymentForm(t),this.paymentForm.build()},a.render=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{id:"form-container"},o.a.createElement("div",{id:"sq-walletbox"},o.a.createElement("button",{style:{display:this.state.applePay?"inherit":"none"},className:"wallet-button",id:"sq-apple-pay"}),o.a.createElement("button",{style:{display:this.state.masterpass?"block":"none"},className:"wallet-button",id:"sq-masterpass"}),o.a.createElement("button",{style:{display:this.state.googlePay?"inherit":"none"},className:"wallet-button",id:"sq-google-pay"}),o.a.createElement("hr",null)),o.a.createElement("div",{id:"sq-ccbox"},o.a.createElement("p",null,o.a.createElement("span",{style:i.blockRight},this.state.cardBrand.toUpperCase())),o.a.createElement("div",{id:"cc-field-wrapper"},o.a.createElement("label",null,"Card",o.a.createElement("div",{id:"sq-card-number"})),o.a.createElement("input",{type:"hidden",id:"card-nonce",name:"nonce"}),o.a.createElement("label",null,"Expiration Date",o.a.createElement("div",{id:"sq-expiration-date"})),o.a.createElement("label",null,"CVV",o.a.createElement("div",{id:"sq-cvv"}))),o.a.createElement("label",null,"Name",o.a.createElement("input",{id:"name",style:i.name,type:"text",placeholder:"Name"})),o.a.createElement("label",null,"Postal Code",o.a.createElement("div",{id:"sq-postal-code"}))),o.a.createElement("button",{className:"button-credit-card",onClick:this.requestCardNonce},"Pay")),o.a.createElement("p",{style:i.center,id:"error"}))},t}(n.Component),d=(t.default=function(e){var t,a=e.data,s=e.location,i=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=Object(n.useState)(null),p=d[0],m=d[1];return Object(n.useEffect)((function(){new Promise((function(e,t){var a=document.createElement("script");a.src="https://js.squareupsandbox.com/v2/paymentform",a.crossorigin="anonymous",a.onload=function(){e()},a.onerror=function(){t("Failed to load "+a.src)},document.getElementsByTagName("head")[0].appendChild(a)})).then((function(){m("SUCCESS")})).catch((function(){return m("ERROR")}))}),[]),o.a.createElement(r.a,{location:s,title:i},o.a.createElement(l.a,{title:"Home"}),"ERROR"===p&&"Failed to load SquareSDK. Please refresh the page.","SUCCESS"===p&&o.a.createElement(c,{paymentForm:window.SqPaymentForm}))},"3159585216")},pxKY:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-support-me-js-46f1980330598ebea2ae.js.map