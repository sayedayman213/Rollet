(self.webpackChunkrollet_admin_panel=self.webpackChunkrollet_admin_panel||[]).push([[265],{265:(t,n,a)=>{"use strict";a.r(n),a.d(n,{TransactionsModule:()=>f});var e=a(1116),r=a(5141),s=a(8619),o=a(9339),c=a(9929),i=a(1742),p=a(6073);let l=(()=>{class t{constructor(t){this.transactionsService=t}ngOnInit(){this.transactionsService.transactions.subscribe(t=>{this.transactions=t})}onGoTo(t){this.transactionsService.fetchTransactions(t).subscribe()}onSearch(t){this.transactionsService.fetchTransactions(void 0,void 0,t).subscribe()}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(o.v))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-transactions"]],decls:10,vars:3,consts:[[1,"d-flex","justify-content-between","flex-wrap","flex-md-nowrap","align-items-center","pt-3","pb-2","mb-3","border-bottom"],[1,"h2"],["id","actions",1,""],[1,"container"],[1,"row"],[1,"col"],[3,"search","Search"],[3,"transactions"],[3,"pagination","goTo"]],template:function(t,n){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"h1",1),s._uU(2,"\u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a"),s.qZA(),s.qZA(),s.TgZ(3,"section",2),s.TgZ(4,"div",3),s.TgZ(5,"div",4),s.TgZ(6,"div",5),s.TgZ(7,"app-search-bar",6),s.NdJ("Search",function(t){return n.onSearch(t)}),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s._UZ(8,"app-transactions-table",7),s.TgZ(9,"app-pagination",8),s.NdJ("goTo",function(t){return n.onGoTo(t)}),s.qZA()),2&t&&(s.xp6(7),s.Q6J("search",n.transactions.search||""),s.xp6(1),s.Q6J("transactions",n.transactions.data),s.xp6(1),s.Q6J("pagination",n.transactions.pagination))},directives:[c.N,i.k,p.Q],styles:[""]}),t})();const u=[{path:"",resolve:[(()=>{class t{constructor(t){this.transactionsService=t}resolve(t,n){return this.transactionsService.fetchTransactions()}}return t.\u0275fac=function(n){return new(n||t)(s.LFG(o.v))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()],component:l,data:{title:"\u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a"}}];let d=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[r.Bz.forChild(u)],r.Bz]}),t})();var h=a(5425);let f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[e.ez,d,h.m]]}),t})()}}]);