"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[4011],{43707:(e,t,r)=>{r.d(t,{Z:()=>C});var o=r(69307),a=r(65736),s=r(94333),n=r(69771),i=r(9818),l=r(92819),c=r(7862),u=r.n(c),m=r(86020),d=r(67221),p=r(81921),y=r(54071),g=r(5945),h=r(10431);function _(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||0===e.length)return null;const o=e.slice(0),a=o.pop();if(a.showFilters(t,r)){const e=(0,h.flattenFilters)(a.filters),r=t[a.param]||a.defaultValue||"all";return(0,l.find)(e,{value:r})}return _(o,t,r)}function f(e){return t=>(0,n.format)(e,t)}class b extends o.Component{shouldComponentUpdate(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!(0,l.isEqual)(e.query,this.props.query)}getItemChartData(){const{primaryData:e,selectedChart:t}=this.props;return e.data.intervals.map((function(e){const r={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){const o=r[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;r[e.segment_id]={label:o,value:e.subtotals[t.key]||0}}})),{date:(0,n.format)("Y-m-d\\TH:i:s",e.date_start),...r}}))}getTimeChartData(){const{query:e,primaryData:t,secondaryData:r,selectedChart:o,defaultDateRange:a}=this.props,s=(0,p.getIntervalForQuery)(e,a),{primary:i,secondary:l}=(0,p.getCurrentDates)(e,a);return t.data.intervals.map((function(t,a){const c=(0,p.getPreviousDate)(t.date_start,i.after,l.after,e.compare,s),u=r.data.intervals[a];return{date:(0,n.format)("Y-m-d\\TH:i:s",t.date_start),primary:{label:`${i.label} (${i.range})`,labelDate:t.date_start,value:t.subtotals[o.key]||0},secondary:{label:`${l.label} (${l.range})`,labelDate:c.format("YYYY-MM-DD HH:mm:ss"),value:u&&u.subtotals[o.key]||0}}}))}getTimeChartTotals(){const{primaryData:e,secondaryData:t,selectedChart:r}=this.props;return{primary:(0,l.get)(e,["data","totals",r.key],null),secondary:(0,l.get)(t,["data","totals",r.key],null)}}renderChart(e,t,r,s){const{emptySearchResults:n,filterParam:i,interactiveLegend:l,itemsLabel:c,legendPosition:u,path:y,query:g,selectedChart:h,showHeaderControls:_,primaryData:b,defaultDateRange:C}=this.props,v=(0,p.getIntervalForQuery)(g,C),w=(0,p.getAllowedIntervalsForQuery)(g,C),q=(0,p.getDateFormatsForInterval)(v,b.data.intervals.length,{type:"php"}),R=n?(0,a.__)("No data for the current search","woocommerce"):(0,a.__)("No data for the selected date range","woocommerce"),{formatAmount:D,getCurrencyConfig:E}=this.context;return(0,o.createElement)(m.Chart,{allowedIntervals:w,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:R,filterParam:i,interactiveLegend:l,interval:v,isRequesting:t,itemsLabel:c,legendPosition:u,legendTotals:s,mode:e,path:y,query:g,screenReaderFormat:f(q.screenReaderFormat),showHeaderControls:_,title:h.label,tooltipLabelFormat:f(q.tooltipLabelFormat),tooltipTitle:"time-comparison"===e&&h.label||null,tooltipValueFormat:(0,d.getTooltipValueFormat)(h.type,D),chartType:(0,p.getChartTypeForQuery)(g),valueType:h.type,xFormat:f(q.xFormat),x2Format:f(q.x2Format),currency:E()})}renderItemComparison(){const{isRequesting:e,primaryData:t}=this.props;if(t.isError)return(0,o.createElement)(g.Z,null);const r=e||t.isRequesting,a=this.getItemChartData();return this.renderChart("item-comparison",r,a)}renderTimeComparison(){const{isRequesting:e,primaryData:t,secondaryData:r}=this.props;if(!t||t.isError||r.isError)return(0,o.createElement)(g.Z,null);const a=e||t.isRequesting||r.isRequesting,s=this.getTimeChartData(),n=this.getTimeChartTotals();return this.renderChart("time-comparison",a,s,n)}render(){const{mode:e}=this.props;return"item-comparison"===e?this.renderItemComparison():this.renderTimeComparison()}}b.contextType=y.$,b.propTypes={filters:u().array,isRequesting:u().bool,itemsLabel:u().string,limitProperties:u().array,mode:u().string,path:u().string.isRequired,primaryData:u().object,query:u().object.isRequired,secondaryData:u().object,selectedChart:u().shape({key:u().string.isRequired,label:u().string.isRequired,order:u().oneOf(["asc","desc"]),orderby:u().string,type:u().oneOf(["average","number","currency"]).isRequired}).isRequired},b.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};const C=(0,s.compose)((0,i.withSelect)(((e,t)=>{const{charts:r,endpoint:o,filters:a,isRequesting:s,limitProperties:n,query:i,advancedFilters:c}=t,u=n||[o],m=_(a,i),p=(0,l.get)(m,["settings","param"]),y=t.mode||function(e,t){if(e&&t){const r=(0,l.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return(0,l.get)(e,["chartMode"])}return null}(m,i)||"time-comparison",{woocommerce_default_date_range:g}=e(d.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings"),h=e(d.REPORTS_STORE_NAME),f={mode:y,filterParam:p,defaultDateRange:g};if(s)return f;const b=u.some((e=>i[e]&&i[e].length));if(i.search&&!b)return{...f,emptySearchResults:!0};const C=r&&r.map((e=>e.key)),v=(0,d.getReportChartData)({endpoint:o,dataType:"primary",query:i,selector:h,limitBy:u,filters:a,advancedFilters:c,defaultDateRange:g,fields:C});if("item-comparison"===y)return{...f,primaryData:v};const w=(0,d.getReportChartData)({endpoint:o,dataType:"secondary",query:i,selector:h,limitBy:u,filters:a,advancedFilters:c,defaultDateRange:g,fields:C});return{...f,primaryData:v,secondaryData:w}})))(b)},50933:(e,t,r)=>{r.d(t,{Z:()=>f});var o=r(69307),a=r(65736),s=r(94333),n=r(9818),i=r(7862),l=r.n(i),c=r(10431),u=r(86020),m=r(81595),d=r(67221),p=r(81921),y=r(14599),g=r(5945),h=r(54071);class _ extends o.Component{formatVal(e,t){const{formatAmount:r,getCurrencyConfig:o}=this.context;return"currency"===t?r(e):(0,m.formatValue)(o(),t,e)}getValues(e,t){const{emptySearchResults:r,summaryData:o}=this.props,{totals:a}=o,s=a.primary?a.primary[e]:0,n=a.secondary?a.secondary[e]:0,i=r?0:s,l=r?0:n;return{delta:(0,m.calculateDelta)(i,l),prevValue:this.formatVal(l,t),value:this.formatVal(i,t)}}render(){const{charts:e,query:t,selectedChart:r,summaryData:s,endpoint:n,report:i,defaultDateRange:l}=this.props,{isError:m,isRequesting:d}=s;if(m)return(0,o.createElement)(g.Z,null);if(d)return(0,o.createElement)(u.SummaryListPlaceholder,{numberOfItems:e.length});const{compare:h}=(0,p.getDateParamsFromQuery)(t,l);return(0,o.createElement)(u.SummaryList,null,(t=>{let{onToggle:s}=t;return e.map((e=>{const{key:t,order:l,orderby:m,label:d,type:p,isReverseTrend:g,labelTooltipText:_}=e,f={chart:t};m&&(f.orderby=m),l&&(f.order=l);const b=(0,c.getNewPath)(f),C=r.key===t,{delta:v,prevValue:w,value:q}=this.getValues(t,p);return(0,o.createElement)(u.SummaryNumber,{key:t,delta:v,href:b,label:d,reverseTrend:g,prevLabel:"previous_period"===h?(0,a.__)("Previous period:","woocommerce"):(0,a.__)("Previous year:","woocommerce"),prevValue:w,selected:C,value:q,labelTooltipText:_,onLinkClickCallback:()=>{s&&s(),(0,y.recordEvent)("analytics_chart_tab_click",{report:i||n,key:t})}})}))}))}}_.propTypes={charts:l().array.isRequired,endpoint:l().string.isRequired,limitProperties:l().array,query:l().object.isRequired,selectedChart:l().shape({key:l().string.isRequired,label:l().string.isRequired,order:l().oneOf(["asc","desc"]),orderby:l().string,type:l().oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:l().object,report:l().string},_.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},_.contextType=h.$;const f=(0,s.compose)((0,n.withSelect)(((e,t)=>{const{charts:r,endpoint:o,limitProperties:a,query:s,filters:n,advancedFilters:i}=t,l=a||[o],c=l.some((e=>s[e]&&s[e].length));if(s.search&&!c)return{emptySearchResults:!0};const u=r&&r.map((e=>e.key)),{woocommerce_default_date_range:m}=e(d.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");return{summaryData:(0,d.getSummaryNumbers)({endpoint:o,query:s,select:e,limitBy:l,filters:n,advancedFilters:i,defaultDateRange:m,fields:u}),defaultDateRange:m}})))(_)},38614:(e,t,r)=>{r.d(t,{O3:()=>c,be:()=>u,u8:()=>d});var o=r(65736),a=r(92694),s=r(9818),n=r(68734),i=r(30226);const{addCesSurveyForAnalytics:l}=(0,s.dispatch)(i.Ls),c=(0,a.applyFilters)("woocommerce_admin_coupons_report_charts",[{key:"orders_count",label:(0,o.__)("Discounted orders","woocommerce"),order:"desc",orderby:"orders_count",type:"number"},{key:"amount",label:(0,o.__)("Amount","woocommerce"),order:"desc",orderby:"amount",type:"currency"}]),u=(0,a.applyFilters)("woocommerce_admin_coupon_report_advanced_filters",{filters:{},title:(0,o._x)("Coupons match {{select /}} filters","A sentence describing filters for Coupons. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce")}),m=[{label:(0,o.__)("All coupons","woocommerce"),value:"all"},{label:(0,o.__)("Single coupon","woocommerce"),value:"select_coupon",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_coupon",chartMode:"item-comparison",path:["select_coupon"],settings:{type:"coupons",param:"coupons",getLabels:n.hQ,labels:{placeholder:(0,o.__)("Type to search for a coupon","woocommerce"),button:(0,o.__)("Single Coupon","woocommerce")}}}]},{label:(0,o.__)("Comparison","woocommerce"),value:"compare-coupons",settings:{type:"coupons",param:"coupons",getLabels:n.hQ,labels:{title:(0,o.__)("Compare Coupon Codes","woocommerce"),update:(0,o.__)("Compare","woocommerce"),helpText:(0,o.__)("Check at least two coupon codes below to compare","woocommerce")},onClick:l}}];Object.keys(u.filters).length&&m.push({label:(0,o.__)("Advanced filters","woocommerce"),value:"advanced"});const d=(0,a.applyFilters)("woocommerce_admin_coupons_report_filters",[{label:(0,o.__)("Show","woocommerce"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>!0,filters:m}])},52620:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var o=r(69307),a=r(7862),s=r.n(a),n=r(65736),i=r(38614),l=r(92819),c=r(86020),u=r(10431),m=r(81595),d=r(81921),p=r(39705),y=r(54071),g=r(79205);class h extends o.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:(0,n.__)("Coupon code","woocommerce"),key:"code",required:!0,isLeftAligned:!0,isSortable:!0},{label:(0,n.__)("Orders","woocommerce"),key:"orders_count",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:(0,n.__)("Amount discounted","woocommerce"),key:"amount",isSortable:!0,isNumeric:!0},{label:(0,n.__)("Created","woocommerce"),key:"created"},{label:(0,n.__)("Expires","woocommerce"),key:"expires"},{label:(0,n.__)("Type","woocommerce"),key:"type"}]}getRowsContent(e){const{query:t}=this.props,r=(0,u.getPersistedQuery)(t),a=(0,g.O3)("dateFormat",d.defaultTableDateFormat),{formatAmount:s,formatDecimal:i,getCurrencyConfig:p}=this.context;return(0,l.map)(e,(e=>{const{amount:t,coupon_id:l,orders_count:d}=e,y=e.extended_info||{},{code:g,date_created:h,date_expires:_,discount_type:f}=y,b=l>0?(0,u.getNewPath)(r,"/analytics/coupons",{filter:"single_coupon",coupons:l}):null,C=null===b?g:(0,o.createElement)(c.Link,{href:b,type:"wc-admin"},g),v=l>0?(0,u.getNewPath)(r,"/analytics/orders",{filter:"advanced",coupon_includes:l}):null;return[{display:C,value:g},{display:null===v?d:(0,o.createElement)(c.Link,{href:v,type:"wc-admin"},(0,m.formatValue)(p(),"number",d)),value:d},{display:s(t),value:i(t)},{display:h?(0,o.createElement)(c.Date,{date:h,visibleFormat:a}):(0,n.__)("N/A","woocommerce"),value:h},{display:_?(0,o.createElement)(c.Date,{date:_,visibleFormat:a}):(0,n.__)("N/A","woocommerce"),value:_},{display:this.getCouponType(f),value:f}]}))}getSummary(e){const{coupons_count:t=0,orders_count:r=0,amount:o=0}=e,{formatAmount:a,getCurrencyConfig:s}=this.context,i=s();return[{label:(0,n._n)("Coupon","Coupons",t,"woocommerce"),value:(0,m.formatValue)(i,"number",t)},{label:(0,n._n)("Order","Orders",r,"woocommerce"),value:(0,m.formatValue)(i,"number",r)},{label:(0,n.__)("Amount discounted","woocommerce"),value:a(o)}]}getCouponType(e){return{percent:(0,n.__)("Percentage","woocommerce"),fixed_cart:(0,n.__)("Fixed cart","woocommerce"),fixed_product:(0,n.__)("Fixed product","woocommerce")}[e]||(0,n.__)("N/A","woocommerce")}render(){const{advancedFilters:e,filters:t,isRequesting:r,query:a}=this.props;return(0,o.createElement)(p.Z,{compareBy:"coupons",endpoint:"coupons",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["coupons_count","orders_count","amount"],isRequesting:r,itemIdField:"coupon_id",query:a,searchBy:"coupons",tableQuery:{orderby:a.orderby||"orders_count",order:a.order||"desc",extended_info:!0},title:(0,n.__)("Coupons","woocommerce"),columnPrefsKey:"coupons_report_columns",filters:t,advancedFilters:e})}}h.contextType=y.$;const _=h;var f=r(62409),b=r(43707),C=r(50933),v=r(27410);class w extends o.Component{getChartMeta(){const{query:e}=this.props,t="compare-coupons"===e.filter&&e.coupons&&e.coupons.split(",").length>1?"item-comparison":"time-comparison";return{itemsLabel:(0,n.__)("%d coupons","woocommerce"),mode:t}}render(){const{isRequesting:e,query:t,path:r}=this.props,{mode:a,itemsLabel:s}=this.getChartMeta(),n={...t};return"item-comparison"===a&&(n.segmentby="coupon"),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(v.Z,{query:t,path:r,filters:i.u8,advancedFilters:i.be,report:"coupons"}),(0,o.createElement)(C.Z,{charts:i.O3,endpoint:"coupons",isRequesting:e,query:n,selectedChart:(0,f.Z)(t.chart,i.O3),filters:i.u8,advancedFilters:i.be}),(0,o.createElement)(b.Z,{charts:i.O3,filters:i.u8,advancedFilters:i.be,mode:a,endpoint:"coupons",path:r,query:n,isRequesting:e,itemsLabel:s,selectedChart:(0,f.Z)(t.chart,i.O3)}),(0,o.createElement)(_,{isRequesting:e,query:t,filters:i.u8,advancedFilters:i.be}))}}w.propTypes={query:s().object.isRequired};const q=w},69629:(e,t,r)=>{r.d(t,{I:()=>a});var o=r(65736);function a(e){return[e.country,e.state,e.name||(0,o.__)("TAX","woocommerce"),e.priority].map((e=>e.toString().toUpperCase().trim())).filter(Boolean).join("-")}},68734:(e,t,r)=>{r.d(t,{FI:()=>h,V1:()=>_,YC:()=>d,hQ:()=>p,jk:()=>y,oC:()=>g,qc:()=>m,uC:()=>f});var o=r(96483),a=r(86989),s=r.n(a),n=r(92819),i=r(10431),l=r(67221),c=r(69629),u=r(79205);function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.identity;return function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;const n="function"==typeof e?e(a):e,l=(0,i.getIdsFromQuery)(r);if(l.length<1)return Promise.resolve([]);const c={include:l.join(","),per_page:l.length};return s()({path:(0,o.addQueryArgs)(n,c)}).then((e=>e.map(t)))}}m(l.NAMESPACE+"/products/attributes",(e=>({key:e.id,label:e.name})));const d=m(l.NAMESPACE+"/products/categories",(e=>({key:e.id,label:e.name}))),p=m(l.NAMESPACE+"/coupons",(e=>({key:e.id,label:e.code}))),y=m(l.NAMESPACE+"/customers",(e=>({key:e.id,label:e.name}))),g=m(l.NAMESPACE+"/products",(e=>({key:e.id,label:e.name}))),h=m(l.NAMESPACE+"/taxes",(e=>({key:e.id,label:(0,c.I)(e)})));function _(e){let{attributes:t,name:r}=e;const o=(0,u.O3)("variationTitleAttributesSeparator"," - ");if(r&&r.indexOf(o)>-1)return r;const a=(t||[]).map((e=>{let{option:t}=e;return t})).join(", ");return a?r+o+a:r}const f=m((e=>{let{products:t}=e;return t?l.NAMESPACE+`/products/${t}/variations`:l.NAMESPACE+"/variations"}),(e=>({key:e.id,label:_(e)})))},62409:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(92819);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const r=(0,o.find)(t,{key:e});return r||t[0]}}}]);