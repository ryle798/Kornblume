import{o as s,c as i,a as n,n as c}from"./index-SqN6mGBm.js";var y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function p(e){if(e.__esModule)return e;var a=e.default;if(typeof a=="function"){var t=function r(){return this instanceof r?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};t.prototype=a.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),t}const l=["data-tip"],u={class:"rounded-md overflow-hidden"},d={class:"avatar"},f=["src","alt"],b={__name:"ArcanistIcon",props:{arcanist:{type:Object,required:!0}},setup(e){const a=t=>`images/arcanists/icon/${t}.png`;return(t,r)=>(s(),i("div",{class:"tooltip","data-tip":e.arcanist.Name},[n("div",u,[n("div",d,[n("div",{class:c(["w-10 rounded",{"bg-orange-300":e.arcanist.Rarity===6,"bg-yellow-100":e.arcanist.Rarity===5,"bg-purple-400":e.arcanist.Rarity===4,"bg-sky-200":e.arcanist.Rarity===3,"bg-green-200":e.arcanist.Rarity===2}])},[n("img",{src:a(e.arcanist.Id),alt:e.arcanist.Name},null,8,f)],2)])])],8,l))}};export{b as _,m as a,y as c,p as g};
