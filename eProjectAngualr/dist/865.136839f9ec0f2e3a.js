"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[865],{5865:(N,g,r)=>{r.r(g),r.d(g,{AdminModule:()=>A});var p=r(177),n=r(5743),l=r(9612),b=r(9727),j=r(8675),E=r(3396),f=r(6427),e=r(4438),R=r(3295);const y=["class","app-component"],w=(a,u,t,o,i,m,F,s,c,d,h,D,O,B,P,U,T,W,z)=>({"menu-opened":a,"expand-menu":u,"mini-sidebar":t,"slide-nav":o,blue:i,light:m,dark:F,fluid:s,boxed:c,headerlight:d,headerdark:h,lg:D,"sm-hover":O,vertical:B,sidebardark:P,sidebarlight:U,default:T,detached:W,horizontal:z}),V=a=>({container:a}),C=(a,u,t,o)=>({"page-wrapper page-wrapper-three":a,"page-wrapper-four":u,"page-wrapper":t,"page-wrapper-fluid":o}),S=a=>({opened:a}),v=a=>({"d-none":a});function $(a,u){if(1&a&&e.nrm(0,"app-header-one",1)(1,"app-side-menu-one",1),2&a){const t=e.XpG(2);e.Y8G("ngClass",e.eq3(2,v,!1===t.hideheader)),e.R7$(),e.Y8G("ngClass",e.eq3(4,v,!1===t.hideheader))}}function I(a,u){1&a&&e.nrm(0,"app-side-menu-three")}function G(a,u){if(1&a){const t=e.RV6();e.j41(0,"div",0),e.DNE(1,$,2,6),e.j41(2,"div",1),e.DNE(3,I,1,0,"app-side-menu-three"),e.j41(4,"div",1)(5,"div",2)(6,"div"),e.nrm(7,"router-outlet"),e.k0s()()(),e.nrm(8,"app-settings-menu"),e.j41(9,"div",3),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.toggleMobileIcon())}),e.k0s()()()}if(2&a){const t=e.XpG();e.Y8G("ngClass",e.zJS(9,w,[!0===t.mobileSidebar&&!0===t.authenticated,"true"===t.expandMenu&&!0===t.miniSidebar&&!0===t.authenticated,!0===t.miniSidebar&&!0===t.authenticated,!0===t.mobileSidebar&&!0===t.authenticated,"2"===t.layoutColor,"1"===t.layoutColor,"4"===t.layoutColor,"1"===t.layoutWidth,"2"===t.layoutWidth,"1"===t.layoutTopColor,"2"===t.layoutTopColor,"1"===t.layoutSidebarSize,"2"===t.layoutSidebarSize||"2"===t.layoutWidth,"1"===t.layoutPosition,"2"===t.layoutSidebarColor,"1"===t.layoutSidebarColor,"1"===t.layoutSidebarView,"2"===t.layoutSidebarView,"6"===t.layoutPosition])),e.R7$(),e.vxM(1,"1"===t.layoutPosition?1:-1),e.R7$(),e.Y8G("ngClass",e.eq3(29,V,"3"===t.layoutPosition&&!0===t.authenticated)),e.R7$(),e.vxM(3,"3"===t.layoutPosition&&!0===t.authenticated?3:-1),e.R7$(),e.Y8G("ngClass",e.ziG(31,C,"4"===t.layoutPosition,"5"===t.layoutPosition,"1"===t.layoutPosition||"2"===t.layoutPosition||"3"===t.layoutPosition||"5"===t.layoutPosition||"6"===t.layoutPosition,"1"===t.layoutPosition&&!1===t.hideheader)),e.R7$(),e.Y8G("ngClass","5"===t.layoutPosition?"container":"container-fluid"),e.R7$(),e.AVh("scroll-content",!0===t.getScrollContentPages()),e.R7$(3),e.Y8G("ngClass",e.eq3(36,S,!0===t.mobileSidebar&&!0===t.authenticated))}}let M=(()=>{class a{constructor(t,o,i,m,F){this.auth=t,this.sideBar=o,this.router=i,this.data=m,this.common=F,this.toggle=!1,this.authenticated=!1,this.miniSidebar=!1,this.expandMenu=!1,this.mobileSidebar=!1,this.layoutSidebarColor="1",this.layoutTopColor="1",this.layoutPosition="",this.layoutDirection="",this.layoutColor="1",this.layoutWidth="1",this.layoutSidebarSize="1",this.layoutSidebarView="1",this.base="",this.page="",this.last="",this.routes=l.JZ,this.hideheader=!1,this.sidebar=!1,this.stickysidebar=!1,this.getRoutes(this.router),this.common.baseRoute.subscribe(s=>{this.base=s?.replace("-"," ")}),this.common.pageRoute.subscribe(s=>{this.page=s?.replace("-"," ")}),this.common.lastRoute.subscribe(s=>{this.last=s?.replace("-"," ")}),this.auth.checkAuth.subscribe(s=>{this.authenticated="true"==s}),i.events.subscribe(s=>{s instanceof n.wF&&(this.getRoutes(s),localStorage.removeItem("isMobileSidebar"),this.mobileSidebar=!1,this.sessionOut())}),this.sideBar.toggleSideBar.subscribe(s=>{this.miniSidebar="true"==s}),this.sideBar.toggleMobileSideBar.subscribe(s=>{this.mobileSidebar="true"==s||"true"==s}),this.sideBar.expandSideBar.subscribe(s=>{this.expandMenu=s,0==s&&1==this.miniSidebar&&this.data.sideBar.map(c=>{c.menu.map(d=>{d.showSubRoute=!1})}),1==s&&0==this.miniSidebar&&this.data.sideBar.map(c=>{c.menu.map(d=>{const h=sessionStorage.getItem("menuValue");d.showSubRoute=!(!h||h!=d.menuValue)})})}),this.sideBar.layoutPosition.subscribe(s=>{this.layoutPosition=s}),this.sideBar.layoutColor.subscribe(s=>{this.layoutColor=s}),this.sideBar.layoutTopColor.subscribe(s=>{this.layoutTopColor=s}),this.sideBar.layoutWidth.subscribe(s=>{this.layoutWidth=s}),this.sideBar.layoutDirection.subscribe(s=>{this.layoutDirection=s}),this.sideBar.layoutSidebarColor.subscribe(s=>{this.layoutSidebarColor=s}),this.sideBar.layoutSidebarView.subscribe(s=>{this.layoutSidebarView=s}),this.sideBar.layoutSidebarSize.subscribe(s=>{this.layoutSidebarSize=s}),this.sessionOut()}ngOnDestroy(){sessionStorage.clear()}getScrollContentPages(){return!("dashboard"==this.base||"customer"==this.base||"categories"==this.page||"reports"==this.base||"expenses"==this.base||"payments"==this.base||"estimates"==this.base||"invoices"==this.base)}getRoutes(t){const o=t?.url.split("/");this.common.currentRoute.next(t.url),this.common.baseRoute.next(o[1]),this.common.pageRoute.next(o[2]),this.common.lastRoute.next(o[3]),this.authenticated="login"!=this.base&&"forgot-password"!=this.base&&"register"!=this.base&&"lock-screen"!=this.base&&""!=this.base,"rtl"==this.base&&"login"==this.page&&(this.authenticated=!1),this.hideheader="general-invoice1"!=this.common.pageRoute.getValue()&&"general-invoice2"!=this.common.pageRoute.getValue()&&"general-invoice3"!=this.common.pageRoute.getValue()&&"general-invoice4"!=this.common.pageRoute.getValue()&&"general-invoice5"!=this.common.pageRoute.getValue()&&"bus-ticket"!=this.common.pageRoute.getValue()&&"car-booking-invoice"!=this.common.pageRoute.getValue()&&"coffee-shop"!=this.common.pageRoute.getValue()&&"domain-hosting"!=this.common.pageRoute.getValue()&&"ecommerce"!=this.common.pageRoute.getValue()&&"fitness-center"!=this.common.pageRoute.getValue()&&"train-ticket-booking"!=this.common.pageRoute.getValue()&&"flight-booking-invoice"!=this.common.pageRoute.getValue()&&"hotel-booking"!=this.common.pageRoute.getValue()&&"internet-billing"!=this.common.pageRoute.getValue()&&"medical"!=this.common.pageRoute.getValue()&&"moneyexchange"!=this.common.pageRoute.getValue()&&"movie-ticket-booking"!=this.common.pageRoute.getValue()&&"restuarent-billing"!=this.common.pageRoute.getValue()&&"student-billing"!=this.common.pageRoute.getValue()&&"cashreceipt1"!=this.common.pageRoute.getValue()&&"cashreceipt2"!=this.common.pageRoute.getValue()&&"cashreceipt3"!=this.common.pageRoute.getValue()&&"cashreceipt4"!=this.common.pageRoute.getValue()&&"invoice-one"!=this.common.pageRoute.getValue()&&"invoice-one-a"!=this.common.pageRoute.getValue()&&"invoice-two"!=this.common.pageRoute.getValue()&&"invoice-three"!=this.common.pageRoute.getValue()&&"invoice-four"!=this.common.pageRoute.getValue()&&"invoice-four-a"!=this.common.pageRoute.getValue()&&"invoice-five"!=this.common.pageRoute.getValue()&&"signature-preview-invoice"!=this.common.pageRoute.getValue()&&"pay-online"!=this.common.baseRoute.getValue()&&"mail-pay-invoice"!=this.common.baseRoute.getValue(),this.sidebar="general-invoice1"!=this.common.pageRoute.getValue(),this.stickysidebar="invoice-two"!=this.common.pageRoute.getValue()&&"invoice-one"!=this.common.pageRoute.getValue()&&"invoice-three"!=this.common.pageRoute.getValue()&&"invoice-four"!=this.common.pageRoute.getValue()&&"invoice-five"!=this.common.pageRoute.getValue()&&"invoice-one-a"!=this.common.pageRoute.getValue()&&"invoice-four-a"!=this.common.pageRoute.getValue()&&"cashreceipt1"!=this.common.pageRoute.getValue()&&"cashreceipt2"!=this.common.pageRoute.getValue()&&"cashreceipt3"!=this.common.pageRoute.getValue()&&"cashreceipt4"!=this.common.pageRoute.getValue()}sessionOut(){const t=localStorage.getItem("timeOut")||Date(),o=new Date(t);(new Date).getHours()>o.getHours()&&this.auth.logout()}toggleMobileIcon(){this.sideBar.switchMobileSideBarPosition()}expandMenuCondition(){return this.mobileSidebar&&this.authenticated&&this.miniSidebar}static#e=this.\u0275fac=function(o){return new(o||a)(e.rXU(l.uR),e.rXU(R.W),e.rXU(n.Ix),e.rXU(l.uS),e.rXU(l.hf))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-admin",8,"app-component"]],standalone:!0,features:[e.aNF],attrs:y,decls:1,vars:1,consts:[[1,"main-wrapper",3,"ngClass"],[3,"ngClass"],[1,"content",3,"ngClass"],[1,"sidebar-overlay",3,"click","ngClass"]],template:function(o,i){1&o&&e.DNE(0,G,10,38,"div",0),2&o&&e.vxM(0,!0===i.authenticated?0:-1)},dependencies:[n.iI,n.n3,p.MD,p.YU,b.N,j.I,E.c,f.u],encapsulation:2})}return a})();var k=r(4160);const Y=["chart"],x=[{path:"",component:M,children:[{path:"",redirectTo:"Dashboard",pathMatch:"full"},{path:"Dashboard",component:(()=>{class a{constructor(t){this.sideBar=t,this.layoutPosition="1",this.routes=l.JZ,this.chartOptions={series:[{name:"Received",data:[70,150,80,180,150,175,201,60,200,120,190,160,50],colors:["#7539FF"]},{name:"Pending",data:[23,42,35,27,43,22,17,31,22,22,12,16,80],colors:["#fda600"]}],chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"60%",borderRadius:5,borderRadiusOnAllStackedSeries:!0,borderRadiusApplication:"end",endingShape:"rounded"}},dataLabels:{enabled:!1},legend:{show:!0,markers:{fillColors:["#7638ff","#fda600"]}},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1,colors:["#7638ff","#fda600"]},tooltip:{y:{formatter:function(o){return"$ "+o+" thousands"}}}},this.chartOptions2={colors:["#7638ff","#ff737b","rgb(118, 56, 255)","#1ec1b0"],series:[55,40,20,10],chart:{type:"donut",fontFamily:"Poppins, sans-serif",height:320},labels:["Paid","Unpaid","Overdue","Draft"],legend:{show:!1},responsive:[{breakpoint:480,options:{chart:{width:300,height:200},legend:{position:"bottom"}}}]},this.sideBar.layoutPosition.subscribe(o=>{this.layoutPosition=o})}static#e=this.\u0275fac=function(o){return new(o||a)(e.rXU(l.W9))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-dashboard"]],viewQuery:function(o,i){if(1&o&&e.GBs(Y,5),2&o){let m;e.mGM(m=e.lsd())&&(i.chart=m.first)}},standalone:!0,features:[e.aNF],decls:644,vars:45,consts:[[1,"row"],[1,"col-xl-3","col-sm-6","col-12"],[1,"card"],[1,"card-body"],[1,"dash-widget-header"],[1,"dash-widget-icon","bg-1"],[1,"fas","fa-dollar-sign"],[1,"dash-count"],[1,"dash-title"],[1,"dash-counts"],[1,"progress","progress-sm","mt-3"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-5",2,"width","75%"],[1,"text-muted","mt-3","mb-0"],[1,"text-danger","me-1"],[1,"fas","fa-arrow-down","me-1"],[1,"dash-widget-icon","bg-2"],[1,"fas","fa-users"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-6",2,"width","65%"],[1,"text-success","me-1"],[1,"fas","fa-arrow-up","me-1"],[1,"dash-widget-icon","bg-3"],[1,"fas","fa-file-alt"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-7",2,"width","85%"],[1,"dash-widget-icon","bg-4"],[1,"far","fa-file"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-8",2,"width","45%"],[1,"col-xl-7","d-flex"],[1,"card","flex-fill"],[1,"card-header"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],[1,"dropdown"],["type","button","id","dropdownMenuButton","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-white","btn-sm","dropdown-toggle"],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu"],["href","javascript:void(0);",1,"dropdown-item"],[1,"d-flex","align-items-center","justify-content-between","flex-wrap","flex-md-nowrap"],[1,"w-md-100","d-flex","align-items-center","mb-3","flex-wrap"],[1,"h3","text-primary","me-5"],[1,"h3","text-success","me-5"],[1,"h3","text-danger","me-5"],[1,"h3","text-dark","me-5"],["id","chart",1,"sales_chart"],[3,"series","chart","dataLabels","plotOptions","yaxis","legend","fill","stroke","xaxis"],[1,"col-xl-5","d-flex"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-white","btn-sm","dropdown-toggle"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["id","chart"],[3,"series","chart","responsive","legend"],[1,"text-center","text-muted"],[1,"col-4"],[1,"mt-4"],[1,"mb-2","text-truncate"],[1,"fas","fa-circle","text-primary","me-1"],[1,"fas","fa-circle","text-success","me-1"],[1,"fas","fa-circle","text-danger","me-1"],[1,"col-md-6","col-sm-6"],[1,"col"],[1,"col-auto"],[1,"btn-right","btn","btn-sm","btn-outline-primary",3,"routerLink"],[1,"mb-3"],[1,"progress","progress-md","rounded-pill","mb-3"],["role","progressbar","aria-valuenow","47","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","47%"],["role","progressbar","aria-valuenow","28","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","28%"],["role","progressbar","aria-valuenow","15","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","15%"],["role","progressbar","aria-valuenow","10","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","10%"],[1,"fas","fa-circle","text-warning","me-1"],[1,"fas","fa-circle","text-info","me-1"],[1,"table-responsive"],[1,"table","table-stripped","table-hover"],[1,"thead-light"],[1,"text-right"],[1,"table-avatar"],[3,"routerLink"],["src","assets/img/profiles/avatar-04.jpg","alt","User Image",1,"avatar","avatar-sm","me-2","avatar-img","rounded-circle"],[1,"badge","bg-success-light"],[1,"dropdown","dropdown-action"],["href","javascript:void(0);","data-bs-toggle","dropdown","aria-expanded","false",1,"action-icon","dropdown-toggle"],[1,"fas","fa-ellipsis-h"],[1,"dropdown-menu","dropdown-menu-right"],[1,"dropdown-item",3,"routerLink"],[1,"far","fa-edit","me-2"],[1,"far","fa-eye","me-2"],[1,"far","fa-trash-alt","me-2"],[1,"far","fa-check-circle","me-2"],[1,"far","fa-paper-plane","me-2"],[1,"far","fa-copy","me-2"],["src","assets/img/profiles/avatar-06.jpg","alt","User Image",1,"avatar","avatar-sm","me-2","avatar-img","rounded-circle"],[1,"badge","bg-info-light","text-info"],["src","assets/img/profiles/avatar-08.jpg","alt","User Image",1,"avatar","avatar-sm","me-2","avatar-img","rounded-circle"],[1,"badge","bg-warning-light","text-warning"],["src","assets/img/profiles/avatar-10.jpg","alt","User Image",1,"avatar","avatar-sm","me-2","avatar-img","rounded-circle"],[1,"badge","bg-danger-light"],["src","assets/img/profiles/avatar-11.jpg","alt","User Image",1,"avatar","avatar-sm","me-2","avatar-img","rounded-circle"],["role","progressbar","aria-valuenow","39","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","39%"],["role","progressbar","aria-valuenow","35","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","35%"],["role","progressbar","aria-valuenow","26","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","26%"],[1,"table","table-hover"],["src","assets/img/profiles/avatar-05.jpg","alt","User Image",1,"avatar","avatar-sm","me-2","avatar-img","rounded-circle"],[1,"far","fa-file-alt","me-2"],[1,"far","fa-times-circle","me-2"],["src","assets/img/profiles/avatar-07.jpg","alt","User Image",1,"avatar","avatar-sm","me-2","avatar-img","rounded-circle"],["src","assets/img/profiles/avatar-09.jpg","alt","User Image",1,"avatar","avatar-sm","me-2","avatar-img","rounded-circle"]],template:function(o,i){1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"span",5),e.nrm(6,"i",6),e.k0s(),e.j41(7,"div",7)(8,"div",8),e.EFF(9,"Amount Due"),e.k0s(),e.j41(10,"div",9)(11,"p"),e.EFF(12,"1,642"),e.k0s()()()(),e.j41(13,"div",10),e.nrm(14,"div",11),e.k0s(),e.j41(15,"p",12)(16,"span",13),e.nrm(17,"i",14),e.EFF(18,"1.15%"),e.k0s(),e.EFF(19," since last week "),e.k0s()()()(),e.j41(20,"div",1)(21,"div",2)(22,"div",3)(23,"div",4)(24,"span",15),e.nrm(25,"i",16),e.k0s(),e.j41(26,"div",7)(27,"div",8),e.EFF(28,"Customers"),e.k0s(),e.j41(29,"div",9)(30,"p"),e.EFF(31,"3,642"),e.k0s()()()(),e.j41(32,"div",10),e.nrm(33,"div",17),e.k0s(),e.j41(34,"p",12)(35,"span",18),e.nrm(36,"i",19),e.EFF(37,"2.37%"),e.k0s(),e.EFF(38," since last week "),e.k0s()()()(),e.j41(39,"div",1)(40,"div",2)(41,"div",3)(42,"div",4)(43,"span",20),e.nrm(44,"i",21),e.k0s(),e.j41(45,"div",7)(46,"div",8),e.EFF(47,"Invoices"),e.k0s(),e.j41(48,"div",9)(49,"p"),e.EFF(50,"1,041"),e.k0s()()()(),e.j41(51,"div",10),e.nrm(52,"div",22),e.k0s(),e.j41(53,"p",12)(54,"span",18),e.nrm(55,"i",19),e.EFF(56,"3.77%"),e.k0s(),e.EFF(57," since last week "),e.k0s()()()(),e.j41(58,"div",1)(59,"div",2)(60,"div",3)(61,"div",4)(62,"span",23),e.nrm(63,"i",24),e.k0s(),e.j41(64,"div",7)(65,"div",8),e.EFF(66,"Estimates"),e.k0s(),e.j41(67,"div",9)(68,"p"),e.EFF(69,"2,150"),e.k0s()()()(),e.j41(70,"div",10),e.nrm(71,"div",25),e.k0s(),e.j41(72,"p",12)(73,"span",13),e.nrm(74,"i",14),e.EFF(75,"8.68%"),e.k0s(),e.EFF(76," since last week "),e.k0s()()()()(),e.j41(77,"div",0)(78,"div",26)(79,"div",27)(80,"div",28)(81,"div",29)(82,"h5",30),e.EFF(83,"Sales Analytics"),e.k0s(),e.j41(84,"div",31)(85,"button",32),e.EFF(86," Monthly "),e.k0s(),e.j41(87,"ul",33)(88,"li")(89,"a",34),e.EFF(90,"Weekly"),e.k0s()(),e.j41(91,"li")(92,"a",34),e.EFF(93,"Monthly"),e.k0s()(),e.j41(94,"li")(95,"a",34),e.EFF(96,"Yearly"),e.k0s()()()()()(),e.j41(97,"div",3)(98,"div",35)(99,"div",36)(100,"div")(101,"span"),e.EFF(102,"Total Sales"),e.k0s(),e.j41(103,"p",37),e.EFF(104,"$1000"),e.k0s()(),e.j41(105,"div")(106,"span"),e.EFF(107,"Receipts"),e.k0s(),e.j41(108,"p",38),e.EFF(109,"$1000"),e.k0s()(),e.j41(110,"div")(111,"span"),e.EFF(112,"Expenses"),e.k0s(),e.j41(113,"p",39),e.EFF(114,"$300"),e.k0s()(),e.j41(115,"div")(116,"span"),e.EFF(117,"Earnings"),e.k0s(),e.j41(118,"p",40),e.EFF(119,"$700"),e.k0s()()()(),e.j41(120,"div",41),e.nrm(121,"apx-chart",42),e.k0s()()()(),e.j41(122,"div",43)(123,"div",27)(124,"div",28)(125,"div",29)(126,"h5",30),e.EFF(127,"Invoice Analytics"),e.k0s(),e.j41(128,"div",31)(129,"button",44),e.EFF(130," Monthly "),e.k0s(),e.j41(131,"ul",45)(132,"li")(133,"a",34),e.EFF(134,"Weekly"),e.k0s()(),e.j41(135,"li")(136,"a",34),e.EFF(137,"Monthly"),e.k0s()(),e.j41(138,"li")(139,"a",34),e.EFF(140,"Yearly"),e.k0s()()()()()(),e.j41(141,"div",3)(142,"div",46),e.nrm(143,"apx-chart",47),e.k0s(),e.j41(144,"div",48)(145,"div",0)(146,"div",49)(147,"div",50)(148,"p",51),e.nrm(149,"i",52),e.EFF(150," Invoiced "),e.k0s(),e.j41(151,"h5"),e.EFF(152,"$ 2,132"),e.k0s()()(),e.j41(153,"div",49)(154,"div",50)(155,"p",51),e.nrm(156,"i",53),e.EFF(157," Received "),e.k0s(),e.j41(158,"h5"),e.EFF(159,"$ 1,763"),e.k0s()()(),e.j41(160,"div",49)(161,"div",50)(162,"p",51),e.nrm(163,"i",54),e.EFF(164," Pending "),e.k0s(),e.j41(165,"h5"),e.EFF(166,"$ 973"),e.k0s()()()()()()()()(),e.j41(167,"div",0)(168,"div",55)(169,"div",2)(170,"div",28)(171,"div",0)(172,"div",56)(173,"h5",30),e.EFF(174,"Recent Invoices"),e.k0s()(),e.j41(175,"div",57)(176,"a",58),e.EFF(177," View All "),e.k0s()()()(),e.j41(178,"div",3)(179,"div",59)(180,"div",60),e.nrm(181,"div",61)(182,"div",62)(183,"div",63)(184,"div",64),e.k0s(),e.j41(185,"div",0)(186,"div",57),e.nrm(187,"i",53),e.EFF(188," Paid "),e.k0s(),e.j41(189,"div",57),e.nrm(190,"i",65),e.EFF(191," Unpaid "),e.k0s(),e.j41(192,"div",57),e.nrm(193,"i",54),e.EFF(194," Overdue "),e.k0s(),e.j41(195,"div",57),e.nrm(196,"i",66),e.EFF(197," Draft "),e.k0s()()(),e.j41(198,"div",67)(199,"table",68)(200,"thead",69)(201,"tr")(202,"th"),e.EFF(203,"Customer"),e.k0s(),e.j41(204,"th"),e.EFF(205,"Amount"),e.k0s(),e.j41(206,"th"),e.EFF(207,"Due Date"),e.k0s(),e.j41(208,"th"),e.EFF(209,"Status"),e.k0s(),e.j41(210,"th",70),e.EFF(211,"Action"),e.k0s()()(),e.j41(212,"tbody")(213,"tr")(214,"td")(215,"h2",71)(216,"a",72),e.nrm(217,"img",73),e.EFF(218,"Barbara Moore"),e.k0s()()(),e.j41(219,"td"),e.EFF(220,"$118"),e.k0s(),e.j41(221,"td"),e.EFF(222,"23 Nov 2020"),e.k0s(),e.j41(223,"td")(224,"span",74),e.EFF(225,"Paid"),e.k0s()(),e.j41(226,"td",70)(227,"div",75)(228,"a",76),e.nrm(229,"i",77),e.k0s(),e.j41(230,"div",78)(231,"a",79),e.nrm(232,"i",80),e.EFF(233,"Edit"),e.k0s(),e.j41(234,"a",79),e.nrm(235,"i",81),e.EFF(236,"View"),e.k0s(),e.j41(237,"a",34),e.nrm(238,"i",82),e.EFF(239,"Delete"),e.k0s(),e.j41(240,"a",34),e.nrm(241,"i",83),e.EFF(242,"Mark as sent"),e.k0s(),e.j41(243,"a",34),e.nrm(244,"i",84),e.EFF(245,"Send Invoice"),e.k0s(),e.j41(246,"a",34),e.nrm(247,"i",85),e.EFF(248,"Clone Invoice"),e.k0s()()()()(),e.j41(249,"tr")(250,"td")(251,"h2",71)(252,"a",72),e.nrm(253,"img",86),e.EFF(254,"Karlene Chaidez"),e.k0s()()(),e.j41(255,"td"),e.EFF(256,"$222"),e.k0s(),e.j41(257,"td"),e.EFF(258,"18 Nov 2020"),e.k0s(),e.j41(259,"td")(260,"span",87),e.EFF(261,"Sent"),e.k0s()(),e.j41(262,"td",70)(263,"div",75)(264,"a",76),e.nrm(265,"i",77),e.k0s(),e.j41(266,"div",78)(267,"a",79),e.nrm(268,"i",80),e.EFF(269,"Edit"),e.k0s(),e.j41(270,"a",79),e.nrm(271,"i",81),e.EFF(272,"View"),e.k0s(),e.j41(273,"a",34),e.nrm(274,"i",82),e.EFF(275,"Delete"),e.k0s(),e.j41(276,"a",34),e.nrm(277,"i",83),e.EFF(278,"Mark as sent"),e.k0s(),e.j41(279,"a",34),e.nrm(280,"i",84),e.EFF(281,"Send Invoice"),e.k0s(),e.j41(282,"a",34),e.nrm(283,"i",85),e.EFF(284,"Clone Invoice"),e.k0s()()()()(),e.j41(285,"tr")(286,"td")(287,"h2",71)(288,"a",72),e.nrm(289,"img",88),e.EFF(290,"Russell Copeland"),e.k0s()()(),e.j41(291,"td"),e.EFF(292,"$347"),e.k0s(),e.j41(293,"td"),e.EFF(294,"10 Nov 2020"),e.k0s(),e.j41(295,"td")(296,"span",89),e.EFF(297,"Partially Paid"),e.k0s()(),e.j41(298,"td",70)(299,"div",75)(300,"a",76),e.nrm(301,"i",77),e.k0s(),e.j41(302,"div",78)(303,"a",79),e.nrm(304,"i",80),e.EFF(305,"Edit"),e.k0s(),e.j41(306,"a",79),e.nrm(307,"i",81),e.EFF(308,"View"),e.k0s(),e.j41(309,"a",34),e.nrm(310,"i",82),e.EFF(311,"Delete"),e.k0s(),e.j41(312,"a",34),e.nrm(313,"i",83),e.EFF(314,"Mark as sent"),e.k0s(),e.j41(315,"a",34),e.nrm(316,"i",84),e.EFF(317,"Send Invoice"),e.k0s(),e.j41(318,"a",34),e.nrm(319,"i",85),e.EFF(320,"Clone Invoice"),e.k0s()()()()(),e.j41(321,"tr")(322,"td")(323,"h2",71)(324,"a",72),e.nrm(325,"img",90),e.EFF(326,"Joseph Collins"),e.k0s()()(),e.j41(327,"td"),e.EFF(328,"$826"),e.k0s(),e.j41(329,"td"),e.EFF(330,"25 Sep 2020"),e.k0s(),e.j41(331,"td")(332,"span",91),e.EFF(333,"Overdue"),e.k0s()(),e.j41(334,"td",70)(335,"div",75)(336,"a",76),e.nrm(337,"i",77),e.k0s(),e.j41(338,"div",78)(339,"a",79),e.nrm(340,"i",80),e.EFF(341,"Edit"),e.k0s(),e.j41(342,"a",79),e.nrm(343,"i",81),e.EFF(344,"View"),e.k0s(),e.j41(345,"a",34),e.nrm(346,"i",82),e.EFF(347,"Delete"),e.k0s(),e.j41(348,"a",34),e.nrm(349,"i",83),e.EFF(350,"Mark as sent"),e.k0s(),e.j41(351,"a",34),e.nrm(352,"i",84),e.EFF(353,"Send Invoice"),e.k0s(),e.j41(354,"a",34),e.nrm(355,"i",85),e.EFF(356,"Clone Invoice"),e.k0s()()()()(),e.j41(357,"tr")(358,"td")(359,"h2",71)(360,"a",72),e.nrm(361,"img",92),e.EFF(362,"Jennifer Floyd"),e.k0s()()(),e.j41(363,"td"),e.EFF(364,"$519"),e.k0s(),e.j41(365,"td"),e.EFF(366,"18 Sep 2020"),e.k0s(),e.j41(367,"td")(368,"span",74),e.EFF(369,"Paid"),e.k0s()(),e.j41(370,"td",70)(371,"div",75)(372,"a",76),e.nrm(373,"i",77),e.k0s(),e.j41(374,"div",78)(375,"a",79),e.nrm(376,"i",80),e.EFF(377,"Edit"),e.k0s(),e.j41(378,"a",79),e.nrm(379,"i",81),e.EFF(380,"View"),e.k0s(),e.j41(381,"a",34),e.nrm(382,"i",82),e.EFF(383,"Delete"),e.k0s(),e.j41(384,"a",34),e.nrm(385,"i",83),e.EFF(386,"Mark as sent"),e.k0s(),e.j41(387,"a",34),e.nrm(388,"i",84),e.EFF(389,"Send Invoice"),e.k0s(),e.j41(390,"a",34),e.nrm(391,"i",85),e.EFF(392,"Clone Invoice"),e.k0s()()()()()()()()()()(),e.j41(393,"div",55)(394,"div",2)(395,"div",28)(396,"div",0)(397,"div",56)(398,"h5",30),e.EFF(399,"Recent Estimates"),e.k0s()(),e.j41(400,"div",57)(401,"a",58),e.EFF(402," View All "),e.k0s()()()(),e.j41(403,"div",3)(404,"div",59)(405,"div",60),e.nrm(406,"div",93)(407,"div",94)(408,"div",95),e.k0s(),e.j41(409,"div",0)(410,"div",57),e.nrm(411,"i",53),e.EFF(412," Sent "),e.k0s(),e.j41(413,"div",57),e.nrm(414,"i",65),e.EFF(415," Draft "),e.k0s(),e.j41(416,"div",57),e.nrm(417,"i",54),e.EFF(418," Expired "),e.k0s()()(),e.j41(419,"div",67)(420,"table",96)(421,"thead",69)(422,"tr")(423,"th"),e.EFF(424,"Customer"),e.k0s(),e.j41(425,"th"),e.EFF(426,"Expiry Date"),e.k0s(),e.j41(427,"th"),e.EFF(428,"Amount"),e.k0s(),e.j41(429,"th"),e.EFF(430,"Status"),e.k0s(),e.j41(431,"th",70),e.EFF(432,"Action"),e.k0s()()(),e.j41(433,"tbody")(434,"tr")(435,"td")(436,"h2",71)(437,"a",72),e.nrm(438,"img",97),e.EFF(439," Greg Lynch"),e.k0s()()(),e.j41(440,"td"),e.EFF(441,"5 Nov 2020"),e.k0s(),e.j41(442,"td"),e.EFF(443,"$175"),e.k0s(),e.j41(444,"td")(445,"span",87),e.EFF(446,"Sent"),e.k0s()(),e.j41(447,"td",70)(448,"div",75)(449,"a",76),e.nrm(450,"i",77),e.k0s(),e.j41(451,"div",78)(452,"a",79),e.nrm(453,"i",80),e.EFF(454,"Edit"),e.k0s(),e.j41(455,"a",34),e.nrm(456,"i",82),e.EFF(457,"Delete"),e.k0s(),e.j41(458,"a",79),e.nrm(459,"i",81),e.EFF(460,"View"),e.k0s(),e.j41(461,"a",34),e.nrm(462,"i",98),e.EFF(463,"Convert to Invoice"),e.k0s(),e.j41(464,"a",34),e.nrm(465,"i",83),e.EFF(466,"Mark as sent"),e.k0s(),e.j41(467,"a",34),e.nrm(468,"i",84),e.EFF(469,"Send Estimate"),e.k0s(),e.j41(470,"a",34),e.nrm(471,"i",83),e.EFF(472,"Mark as Accepted"),e.k0s(),e.j41(473,"a",34),e.nrm(474,"i",99),e.EFF(475,"Mark as Rejected"),e.k0s()()()()(),e.j41(476,"tr")(477,"td")(478,"h2",71)(479,"a",72),e.nrm(480,"img",86),e.EFF(481," Karlene Chaidez"),e.k0s()()(),e.j41(482,"td"),e.EFF(483,"28 Oct 2020"),e.k0s(),e.j41(484,"td"),e.EFF(485,"$1500"),e.k0s(),e.j41(486,"td")(487,"span",89),e.EFF(488,"Expired"),e.k0s()(),e.j41(489,"td",70)(490,"div",75)(491,"a",76),e.nrm(492,"i",77),e.k0s(),e.j41(493,"div",78)(494,"a",79),e.nrm(495,"i",80),e.EFF(496,"Edit"),e.k0s(),e.j41(497,"a",34),e.nrm(498,"i",82),e.EFF(499,"Delete"),e.k0s(),e.j41(500,"a",79),e.nrm(501,"i",81),e.EFF(502,"View"),e.k0s(),e.j41(503,"a",34),e.nrm(504,"i",98),e.EFF(505,"Convert to Invoice"),e.k0s(),e.j41(506,"a",34),e.nrm(507,"i",83),e.EFF(508,"Mark as sent"),e.k0s(),e.j41(509,"a",34),e.nrm(510,"i",84),e.EFF(511,"Send Estimate"),e.k0s(),e.j41(512,"a",34),e.nrm(513,"i",83),e.EFF(514,"Mark as Accepted"),e.k0s(),e.j41(515,"a",34),e.nrm(516,"i",99),e.EFF(517,"Mark as Rejected"),e.k0s()()()()(),e.j41(518,"tr")(519,"td")(520,"h2",71)(521,"a",72),e.nrm(522,"img",100),e.EFF(523," John Blair"),e.k0s()()(),e.j41(524,"td"),e.EFF(525,"17 Oct 2020"),e.k0s(),e.j41(526,"td"),e.EFF(527,"$2350"),e.k0s(),e.j41(528,"td")(529,"span",74),e.EFF(530,"Accepted"),e.k0s()(),e.j41(531,"td",70)(532,"div",75)(533,"a",76),e.nrm(534,"i",77),e.k0s(),e.j41(535,"div",78)(536,"a",79),e.nrm(537,"i",80),e.EFF(538,"Edit"),e.k0s(),e.j41(539,"a",34),e.nrm(540,"i",82),e.EFF(541,"Delete"),e.k0s(),e.j41(542,"a",79),e.nrm(543,"i",81),e.EFF(544,"View"),e.k0s(),e.j41(545,"a",34),e.nrm(546,"i",98),e.EFF(547,"Convert to Invoice"),e.k0s(),e.j41(548,"a",34),e.nrm(549,"i",83),e.EFF(550,"Mark as sent"),e.k0s(),e.j41(551,"a",34),e.nrm(552,"i",84),e.EFF(553,"Send Estimate"),e.k0s(),e.j41(554,"a",34),e.nrm(555,"i",83),e.EFF(556,"Mark as Accepted"),e.k0s(),e.j41(557,"a",34),e.nrm(558,"i",99),e.EFF(559,"Mark as Rejected"),e.k0s()()()()(),e.j41(560,"tr")(561,"td")(562,"h2",71)(563,"a",72),e.nrm(564,"img",88),e.EFF(565," Russell Copeland"),e.k0s()()(),e.j41(566,"td"),e.EFF(567,"8 Oct 2020"),e.k0s(),e.j41(568,"td"),e.EFF(569,"$1890"),e.k0s(),e.j41(570,"td")(571,"span",74),e.EFF(572,"Accepted"),e.k0s()(),e.j41(573,"td",70)(574,"div",75)(575,"a",76),e.nrm(576,"i",77),e.k0s(),e.j41(577,"div",78)(578,"a",79),e.nrm(579,"i",80),e.EFF(580,"Edit"),e.k0s(),e.j41(581,"a",34),e.nrm(582,"i",82),e.EFF(583,"Delete"),e.k0s(),e.j41(584,"a",79),e.nrm(585,"i",81),e.EFF(586,"View"),e.k0s(),e.j41(587,"a",34),e.nrm(588,"i",98),e.EFF(589,"Convert to Invoice"),e.k0s(),e.j41(590,"a",34),e.nrm(591,"i",83),e.EFF(592,"Mark as sent"),e.k0s(),e.j41(593,"a",34),e.nrm(594,"i",84),e.EFF(595,"Send Estimate"),e.k0s(),e.j41(596,"a",34),e.nrm(597,"i",83),e.EFF(598,"Mark as Accepted"),e.k0s(),e.j41(599,"a",34),e.nrm(600,"i",99),e.EFF(601,"Mark as Rejected"),e.k0s()()()()(),e.j41(602,"tr")(603,"td")(604,"h2",71)(605,"a",72),e.nrm(606,"img",101),e.EFF(607," Leatha Bailey"),e.k0s()()(),e.j41(608,"td"),e.EFF(609,"30 Sep 2020"),e.k0s(),e.j41(610,"td"),e.EFF(611,"$785"),e.k0s(),e.j41(612,"td")(613,"span",74),e.EFF(614,"Accepted"),e.k0s()(),e.j41(615,"td",70)(616,"div",75)(617,"a",76),e.nrm(618,"i",77),e.k0s(),e.j41(619,"div",78)(620,"a",79),e.nrm(621,"i",80),e.EFF(622,"Edit"),e.k0s(),e.j41(623,"a",34),e.nrm(624,"i",82),e.EFF(625,"Delete"),e.k0s(),e.j41(626,"a",79),e.nrm(627,"i",81),e.EFF(628,"View"),e.k0s(),e.j41(629,"a",34),e.nrm(630,"i",98),e.EFF(631,"Convert to Invoice"),e.k0s(),e.j41(632,"a",34),e.nrm(633,"i",83),e.EFF(634,"Mark as sent"),e.k0s(),e.j41(635,"a",34),e.nrm(636,"i",84),e.EFF(637,"Send Estimate"),e.k0s(),e.j41(638,"a",34),e.nrm(639,"i",83),e.EFF(640,"Mark as Accepted"),e.k0s(),e.j41(641,"a",34),e.nrm(642,"i",99),e.EFF(643,"Mark as Rejected"),e.k0s()()()()()()()()()()()()),2&o&&(e.R7$(121),e.Y8G("series",i.chartOptions.series)("chart",i.chartOptions.chart)("dataLabels",i.chartOptions.dataLabels)("plotOptions",i.chartOptions.plotOptions)("yaxis",i.chartOptions.yaxis)("legend",i.chartOptions.legend)("fill",i.chartOptions.fill)("stroke",i.chartOptions.stroke)("xaxis",i.chartOptions.xaxis),e.R7$(22),e.Y8G("series",i.chartOptions2.series)("chart",i.chartOptions2.chart)("responsive",i.chartOptions2.responsive)("legend",i.chartOptions2.legend),e.R7$(33),e.Y8G("routerLink",i.routes.invoiceList),e.R7$(40),e.Y8G("routerLink",i.routes.profile),e.R7$(15),e.Y8G("routerLink",i.routes.editInvoice),e.R7$(3),e.Y8G("routerLink",i.routes.viewInvoice),e.R7$(18),e.Y8G("routerLink",i.routes.profile),e.R7$(15),e.Y8G("routerLink",i.routes.editInvoice),e.R7$(3),e.Y8G("routerLink",i.routes.viewInvoice),e.R7$(18),e.Y8G("routerLink",i.routes.profile),e.R7$(15),e.Y8G("routerLink",i.routes.editInvoice),e.R7$(3),e.Y8G("routerLink",i.routes.viewInvoice),e.R7$(18),e.Y8G("routerLink",i.routes.profile),e.R7$(15),e.Y8G("routerLink",i.routes.editInvoice),e.R7$(3),e.Y8G("routerLink",i.routes.viewInvoice),e.R7$(18),e.Y8G("routerLink",i.routes.profile),e.R7$(15),e.Y8G("routerLink",i.routes.editInvoice),e.R7$(3),e.Y8G("routerLink",i.routes.viewInvoice),e.R7$(23),e.Y8G("routerLink",i.routes.estimatesList),e.R7$(36),e.Y8G("routerLink",i.routes.profile),e.R7$(15),e.Y8G("routerLink",i.routes.editInvoice),e.R7$(6),e.Y8G("routerLink",i.routes.estimatesView),e.R7$(21),e.Y8G("routerLink",i.routes.profile),e.R7$(15),e.Y8G("routerLink",i.routes.editInvoice),e.R7$(6),e.Y8G("routerLink",i.routes.estimatesView),e.R7$(21),e.Y8G("routerLink",i.routes.profile),e.R7$(15),e.Y8G("routerLink",i.routes.editInvoice),e.R7$(6),e.Y8G("routerLink",i.routes.estimatesView),e.R7$(21),e.Y8G("routerLink",i.routes.profile),e.R7$(15),e.Y8G("routerLink",i.routes.editInvoice),e.R7$(6),e.Y8G("routerLink",i.routes.estimatesView),e.R7$(21),e.Y8G("routerLink",i.routes.profile),e.R7$(15),e.Y8G("routerLink",i.routes.editInvoice),e.R7$(6),e.Y8G("routerLink",i.routes.estimatesView))},dependencies:[n.iI,n.Wk,k.J,k.Q]})}return a})()}]}];let L=(()=>{class a{static#e=this.\u0275fac=function(o){return new(o||a)};static#t=this.\u0275mod=e.$C({type:a});static#i=this.\u0275inj=e.G2t({imports:[n.iI.forChild(x),n.iI]})}return a})(),A=(()=>{class a{static#e=this.\u0275fac=function(o){return new(o||a)};static#t=this.\u0275mod=e.$C({type:a});static#i=this.\u0275inj=e.G2t({imports:[p.MD,L]})}return a})()}}]);