YUI.add("widget-stdmod",function(A){var E=A.Lang,P=A.Node,W=A.UA,C=A.Widget,R=C.UI_SRC,j={src:R},B="",h="hd",g="bd",H="ft",d="header",k="body",i="footer",o="fillHeight",M="stdmod",q="px",S="Node",m="innerHTML",c="firstChild",U="contentBox",n="boundingBox",Z="height",f="offsetHeight",X="auto",K="headerChange",b="bodyChange",N="footerChange",Q="fillHeightChange",T="contentUpdated",D="<div></div>",V="renderUI",e="bindUI",F="syncUI";function p(L){this._stdModNode=this.get(U);this.HTML_PARSER=A.merge(this.HTML_PARSER,p.prototype.HTML_PARSER);A.after(this._renderUIStdMod,this,V);A.after(this._bindUIStdMod,this,e);A.after(this._syncUIStdMod,this,F);}p.HEADER=d;p.BODY=k;p.FOOTER=i;p.AFTER="after";p.BEFORE="before";p.REPLACE="replace";var I=p.HEADER,a=p.BODY,O=p.FOOTER,l=p.AFTER,G=p.BEFORE,r=p.REPLACE;p.ATTRS={header:{},footer:{},body:{},fillHeight:{value:p.BODY,validator:function(L){return this._validateFillHeight(L);}}};p.TEMPLATES={};p._TEMPLATES={};var J=p.TEMPLATES;J[I]={html:D,className:h};J[a]={html:D,className:g};J[O]={html:D,className:H};p.prototype={_syncUIStdMod:function(){this._uiSetSection(I,this.get(d));this._uiSetSection(a,this.get(k));this._uiSetSection(O,this.get(i));this._uiSetFillHeight(this.get(o));},_renderUIStdMod:function(){this._stdModNode.addClass(C.getClassName(M));},_bindUIStdMod:function(){this.after(K,this._onHeaderChange);this.after(b,this._onBodyChange);this.after(N,this._onFooterChange);this.after(Q,this._onFillHeightChange);this.after(T,this._fillHeight);},_onHeaderChange:function(L){if(L.src!=R){this._uiSetSection(I,L.newVal);}},_onBodyChange:function(L){if(L.src!=R){this._uiSetSection(a,L.newVal);}},_onFooterChange:function(L){if(L.src!=R){this._uiSetSection(O,L.newVal);}},_setStdModSection:function(Y,s,L){this._uiSetSection(Y,s,L);this.set(Y,this.getStdModNode(Y).get(m),j);},_onFillHeightChange:function(L){this._uiSetFillHeight(L.newVal);},_validateFillHeight:function(L){return L==p.BODY||L==p.HEADER||L==p.FOOTER;},_uiSetFillHeight:function(s){var Y=this.getStdModNode(s);var L=this._currFillNode;if(L&&Y!==L){L.setStyle(Z,B);}if(Y){this._currFillNode=Y;}this._fillHeight();},_fillHeight:function(){if(this.get(o)){var L=this.get(Z);if(L!=B&&L!=X){this.fillHeight(this._currFillNode);}}},_uiSetSection:function(s,t,L){var Y=this.getStdModNode(s)||this._renderSection(s);if(t instanceof P){this._addNodeRef(Y,t,L);}else{this._addNodeHTML(Y,t,L);}this.fire(T);},_renderSection:function(s){var L=this.get(U),Y=this._findStdModSection(s);if(!Y){Y=this._getStdModTemplate(s);}this._insertStdModSection(L,s,Y);this[s+S]=Y;return this[s+S];},_insertStdModSection:function(L,t,s){var Y=L.get(c);if(t===O||!Y){L.appendChild(s);}else{if(t===I){L.insertBefore(s,Y);}else{var u=this[O+S];if(u){L.insertBefore(s,u);}else{L.appendChild(s);}}}},_getStdModTemplate:function(s){var Y=p._TEMPLATES[s],L;if(!Y){L=p.TEMPLATES[s];p._TEMPLATES[s]=Y=P.create(L.html);Y.addClass(this._getStdModClassName(s));}return Y.cloneNode(true);},_getStdModClassName:function(L){return C.getClassName(p.TEMPLATES[L].className);},_addNodeHTML:function(s,Y,L){if(L==l){s.set(m,s.get(m)+Y);}else{if(L==G){s.set(m,Y+s.get(m));}else{s.set(m,Y);}}},_addNodeRef:function(t,s,Y){var L=true;if(Y==G){if(t.get(c)){t.insertBefore(s,t.get(c));L=false;}}else{if(Y!=l){t.set(m,B);}}if(L){t.appendChild(s);}},_getPreciseHeight:function(s){var L=s.get(f);if(s.getBoundingClientRect){var Y=s.getBoundingClientRect();L=Y.bottom-Y.top;}return L;},_findStdModSection:function(Y){var L=this.get(U).query("."+this._getStdModClassName(Y));if(!L||(L.size&&L.size()>0)){return null;}else{return L;}},HTML_PARSER:{header:function(L){var Y=this._findStdModSection(I);return(Y)?Y.get(m):"";},body:function(L){var Y=this._findStdModSection(a);return(Y)?Y.get(m):"";},footer:function(L){var Y=this._findStdModSection(O);return(Y)?Y.get(m):"";}},setBody:function(Y,L){this._setStdModSection(a,Y,L);},setHeader:function(Y,L){this._setStdModSection(I,Y,L);},setFooter:function(Y,L){this._setStdModSection(O,Y,L);},getStdModNode:function(L){return this[L+S];},fillHeight:function(s){if(s){var w=this.get(n),y=[this.headerNode,this.bodyNode,this.footerNode],Y,z=0,AA=0,v=0,u=false;for(var x=0,t=y.length;x<t;x++){Y=y[x];if(Y){if(Y!==s){AA+=this._getPreciseHeight(Y);}else{u=true;}}}if(u){if(W.ie||W.opera){s.setStyle(Z,0+q);}z=parseInt(w.getComputedStyle(Z),10);if(E.isNumber(z)){v=z-AA;if(v>=0){s.setStyle(Z,v+q);}var L=this.get(U).get(f);if(L!=z){v=v-(L-z);s.setStyle(Z,v+q);}}}}}};A.WidgetStdMod=p;},"@VERSION@",{requires:["widget"]});