import{o as x}from"./index-3KMZXR2d.js";import{o as s,c as o,a as e,F as d,r as m,t as r,b as h,d as u,e as y,f as v,g as C}from"./index-Ipioi5WG.js";const $={class:"list-overlay"},F={class:"custom-modal-small h-2/3 lg:h-1/2 overflow-y-scroll custom-scrollbar"},j=e("i",{class:"fas fa-times"},null,-1),R=[j],A=e("h1",{class:"text-white font-bold text-2xl pb-2"},"Changelogs",-1),O={class:"text-white space-y-5"},U={class:"text-sky-300"},I={__name:"HomeChangelogs",emits:{closeOverlay:{type:Function,required:!0}},setup(f,{emit:a}){const l=a,i=()=>{l("closeOverlay")},c=[{date:"04/12/2023",description:"• Updated credits, minor bug fixes."},{date:"03/12/2023",description:`• Fixed wrong jsons. Hopefully it is correct now.
 • Soldius. 
 • Added 1.2 event shops. Two buttons, all the items.`},{date:"02/12/2023",description:`• Fixed warehouse, added Tooth Fairy and Changeling to released.
 • Fixed more warehouse bugs, added reset button.
 • Fixed MORE warehouse bugs.`},{date:"01/12/2023",description:"• Warehouse filter is broken, temporary disabled."},{date:"30/11/2023",description:"• Added Warehouse. Fixed wrong Insight levels and unreleased Arcanists"},{date:"29/11/2023",description:"• First release."}];return(_,p)=>(s(),o("div",$,[e("div",F,[e("button",{onClick:i,class:"absolute top-2 right-2 text-white"},R),A,e("ul",O,[(s(),o(d,null,m(c,(t,n)=>e("li",{key:n},[e("p",U,r(t.date)+":",1),e("ul",null,[(s(!0),o(d,null,m(t.description.split(`
`),(b,g)=>(s(),o("li",{key:g,class:"text-sm"},r(b),1))),128))])])),64))])])]))}},V={class:"list-overlay"},S={class:"custom-modal-small h-2/3 overflow-y-scroll custom-scrollbar"},B=e("i",{class:"fas fa-times"},null,-1),E=[B],H=e("h1",{class:"text-white font-bold text-2xl pb-2"},"Credits",-1),K={class:"text-white space-y-5"},P=["href"],T=e("i",{class:"fa-solid fa-link"},null,-1),M={class:"text-sm"},N={class:"text-sm"},q={__name:"HomeResources",emits:{closeOverlay:{type:Function,required:!0}},setup(f,{emit:a}){const l=a,i=()=>{l("closeOverlay")},c=[{name:"Huji wiki",author:"Huji wiki team",comment:"Very detailed. Most of the data are from this wiki.",link:"https://res1999.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5"},{name:"必要的记录",author:"Chinese community",comment:"The drop rates of farming stages are provided by this sheet.",link:"https://www.kdocs.cn/l/cd5MWeCl5bKw"},{name:"Vanity Cake Reverse 1999",author:"Vanity & Cake",comment:"Spreadsheet for a lot of things. Insight III levels are taken here.",link:"https://docs.google.com/spreadsheets/d/1qQinxxU_e0-YXwPj5WAd2PgTFksyLwIaHXwEcosUxU0/edit#gid=470385843"},{name:"Seelie",author:"Gabriel",comment:"Ever wonder why this looks like Seelie?",link:"https://hsr.seelie.me/"},{name:"Schale",author:"lonqie",comment:"cunny uwooghh",link:"https://schale.gg/"}];return(_,p)=>(s(),o("div",V,[e("div",S,[e("button",{onClick:i,class:"absolute top-2 right-2 text-white"},E),H,e("ul",K,[(s(),o(d,null,m(c,(t,n)=>e("li",{key:n},[e("a",{href:t.link,target:"_blank",class:"text-sky-300 text-lg"},[T,h(" "+r(t.name),1)],8,P),e("a",M," by "+r(t.author),1),e("p",N,r(t.comment),1)])),64))])])]))}},W={class:"responsive-spacer overflow-x-hidden"},L=C('<div class="text-center p-10"><h1 class="text-5xl lg:text-6xl font-bold text-white">Kornblume</h1><p class="text-lg lg:text-xl text-gray-300">A toolsite and cornflower worship place for Reverse:1999</p><p class="text-md text-gray-300">For <i class="fa-solid fa-mobile-screen-button"></i> users, click top right <i class="fa-solid fa-bars"></i> to start.</p></div>',1),G={class:"container mx-auto lg:w-2/3 p-4"},X={class:"carousel w-full rounded-md"},z=["href"],D={class:"aspect-video overflow-hidden rounded-md"},Q=["src"],Y=e("i",{class:"fa-solid fa-book"},null,-1),J=e("i",{class:"fa-solid fa-book"},null,-1),Z=e("a",{href:"https://github.com/windbow27/Kornblume",target:"_blank",class:"text-3xl text-gray-400 hover:text-white"},[e("i",{class:"fab fa-github"})],-1),ee=e("p",{class:"text-xs opacity-80 mb-2 text-center"},[h("All contributions are welcomed. If you enjoy the work, please like, subscribe and smash that "),e("i",{class:"fa-regular fa-star"}),h(" button.")],-1),te=e("div",{class:"mb-4 text-center"},[e("p",{class:"text-xs opacity-80"},"Kornblume is not affilated with BluePoch. All images and data belongs to their respective owners."),e("p",{class:"text-md opacity-80 m-2"},"Made by windbow"),e("button",{class:"btn btn-ghost btn-sm opacity-80",onclick:"my_modal_2.showModal()"},"Privacy Policy"),e("dialog",{id:"my_modal_2",class:"modal"},[e("div",{class:"modal-box custom-gradient-gray-blue"},[e("p",{class:"py-4"},"Kornblume use Google Analytics to collect traffics, most viewed pages in order to improve Kornblume. The data is used solely for that reason and will never be used for advertising purposes. "),e("p",{class:"pb-4"}," Planner data is stored locally on your device. ")]),e("form",{method:"dialog",class:"modal-backdrop"},[e("button",null,"close")])])],-1),se={key:0,class:"overlay"},oe={key:1,class:"overlay"},ae=e("div",null,null,-1),ne={__name:"HomeView",setup(f){const a=u(!1),l=u(!1),i=u(null),c=u(null),_=()=>{a.value=!0},p=()=>{l.value=!0},t=()=>{a.value=!1},n=()=>{l.value=!1},b=[{link:"https://www.pixiv.net/en/artworks/110046834",imageUrl:"https://media.discordapp.net/attachments/1167811155021013113/1179403660472631296/bkornblume_reverse_1999_drawn_by_zaocan_nai_cha__e82e6a9976933a9f7bfe10bd786df82d.jpg?ex=6579a840&is=65673340&hm=158852f2b2081144a2e7b57acbff0be1e9edb0bf4fa2ccaa7c98e3a45dba26fb&=&format=webp&width=904&height=499"},{link:"https://xieyun767.lofter.com/post/1e42475f_2b9822a23",imageUrl:"https://r.res.easebar.com/pic/20231023/66e376a5-01c0-4e03-8b91-2a9084a48079.jpg"},{link:"https://www.weibo.com/7600886366/KBBM3bSf6",imageUrl:"https://media.discordapp.net/attachments/1167811155021013113/1179403455736057906/bkornblume_reverse_1999__f556d62c5766d7048c1023dc10bccbd7.jpg?ex=6579a810&is=65673310&hm=5932e6233dadaace15105efc4f323693aaf8037b01dd38c303c361d19c4e6d93&=&format=webp&width=978&height=425"},{link:"https://re.bluepoch.com/home/detail.html#wallpaper",imageUrl:"https://gamecms-res.sl916.com/official_website_resource/50001/4/PICTURE/20231114/97%202560x1440_ccb31017a58b47a5b285019ecab4bb27.jpg"}];return x(i,t),x(c,n),(g,le)=>(s(),o(d,null,[e("div",W,[L,e("div",G,[e("div",X,[(s(),o(d,null,m(b,(w,k)=>e("div",{key:k,class:"carousel-item w-full flex items-center justify-center"},[e("a",{href:w.link,target:"_blank"},[e("div",D,[e("img",{src:w.imageUrl,class:"object-cover w-full h-full"},null,8,Q)])],8,z)])),64))])]),e("footer",{class:"text-white py-8"},[e("div",{class:"container mx-auto flex flex-col items-center space"},[e("div",{class:"flex mb-4 space-x-4"},[e("button",{onClick:_,class:"btn btn-ghost btn-md custom-gradient-button"},[Y,h(" Changelogs")]),e("button",{onClick:p,class:"btn btn-ghost btn-md custom-gradient-button"},[J,h(" Credits")])]),Z,ee,te])]),a.value?(s(),o("div",se,[y(I,{ref_key:"changelogsRef",ref:i,onCloseOverlay:t},null,512)])):v("",!0),l.value?(s(),o("div",oe,[y(q,{ref_key:"resourcesRef",ref:c,onCloseOverlay:n},null,512)])):v("",!0)]),ae],64))}};export{ne as default};
