(this["webpackJsonpalgo-visualizer"]=this["webpackJsonpalgo-visualizer"]||[]).push([[0],{23:function(e,t,a){e.exports={Sorter:"Sorter_Sorter__1iExk",ControlsContainer:"Sorter_ControlsContainer__3uMRF",Controls:"Sorter_Controls__1R0Qs",Graph:"Sorter_Graph__31dZi",GraphContainer:"Sorter_GraphContainer__2LJkg",SliderTitle:"Sorter_SliderTitle__2Lajs",About:"Sorter_About__17mh_"}},30:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__l-UlI",Logo:"Toolbar_Logo__2Y4UH",LinksContainer:"Toolbar_LinksContainer__CFj7u",Link:"Toolbar_Link__SoMza"}},31:function(e,t,a){e.exports={PathFinder:"Pathfinder_PathFinder__acwma",Grid:"Pathfinder_Grid__14CXs",GridContainer:"Pathfinder_GridContainer__xLsjv",ControlsContainer:"Pathfinder_ControlsContainer__1E4Zf",About:"Pathfinder_About__2mO_5",SliderTitle:"Pathfinder_SliderTitle__Y-2nW"}},59:function(e,t,a){e.exports={BarGraph:"BarGraph_BarGraph__3k3xK"}},65:function(e,t,a){e.exports={Node:"Node_Node__3bzST"}},74:function(e,t,a){e.exports=a(87)},79:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),c=(a(79),a(30)),u=a.n(c),l=a(25),s=a(6),f=a(17),d=function(e){return{type:"SET_SORTED",sorted:e}},h=function(e){return{type:"SET_SORTING",sorting:e}},m=function(e){return{type:"SET_ACTIVE",active:e}},p=function(e,t){return{type:"SWAP_VALUES",index1:e,index2:t}},g=function(e,t){return{type:"REPLACE_VALUE",index:e,value:t}},v=function(e){return{type:"SET_START",node:e}},b=function(e){return{type:"SET_TARGET",node:e}},E=function(e){return{type:"DELETE_WALL",node:e}},S=function(){return{type:"CLEAR_ALL"}},C=function(){return{type:"CLEAR_VISITED_AND_PATH"}},y=function(e){return{type:"SET_WALLS",walls:e}},O=function(e){return{type:"SET_FINDING",finding:e}},_=function(e){return{type:"ADD_VISITED",node:e}},T=function(e){return{type:"ADD_PATH",node:e}},j=function(e){return r.a.createElement("nav",{className:u.a.Toolbar},r.a.createElement(l.b,{to:"/sorting",style:{outline:"none"}},r.a.createElement("div",null,r.a.createElement("svg",{className:u.a.Logo,width:"90",height:"31",viewBox:"0 0 153 61",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("rect",{x:"96",y:"2",width:"57",height:"57",rx:"12",fill:"#EE4266"}),r.a.createElement("path",{d:"M26.144 46L22.784 36.832H9.2L6.176 46H2.576L14.192 13.264H17.552L29.504 46H26.144ZM10.304 33.856H21.68L15.824 17.968L10.304 33.856ZM33.3421 46V11.152H36.6061V46H33.3421ZM63.7321 23.536V45.136C63.7321 47.152 63.3161 48.944 62.4841 50.512C61.6521 52.112 60.4841 53.36 58.9801 54.256C57.4761 55.152 55.7641 55.6 53.8441 55.6H44.5321V52.624H53.8441C55.7961 52.624 57.3801 51.92 58.5961 50.512C59.8441 49.104 60.4681 47.312 60.4681 45.136V42.688C59.5401 43.968 58.4041 44.976 57.0601 45.712C55.7161 46.416 54.2441 46.768 52.6441 46.768C50.5001 46.768 48.5801 46.256 46.8841 45.232C45.1881 44.208 43.8601 42.784 42.9001 40.96C41.9401 39.136 41.4601 37.056 41.4601 34.72C41.4601 32.416 41.9241 30.368 42.8521 28.576C43.8121 26.752 45.1241 25.328 46.7881 24.304C48.4841 23.28 50.4041 22.768 52.5481 22.768C54.1801 22.768 55.6681 23.136 57.0121 23.872C58.3881 24.576 59.5401 25.584 60.4681 26.896V23.536H63.7321ZM52.5481 43.792C54.0841 43.792 55.4441 43.408 56.6281 42.64C57.8441 41.872 58.7881 40.8 59.4601 39.424C60.1321 38.048 60.4681 36.496 60.4681 34.768C60.4681 33.04 60.1321 31.488 59.4601 30.112C58.7881 28.736 57.8441 27.664 56.6281 26.896C55.4441 26.128 54.0841 25.744 52.5481 25.744C51.0441 25.744 49.7001 26.128 48.5161 26.896C47.3321 27.664 46.4041 28.736 45.7321 30.112C45.0601 31.456 44.7241 32.992 44.7241 34.72C44.7241 36.48 45.0601 38.048 45.7321 39.424C46.4041 40.8 47.3321 41.872 48.5161 42.64C49.7001 43.408 51.0441 43.792 52.5481 43.792ZM79.5504 46.768C77.4064 46.768 75.4864 46.256 73.7904 45.232C72.0944 44.208 70.7664 42.784 69.8064 40.96C68.8464 39.104 68.3664 37.024 68.3664 34.72C68.3664 32.416 68.8304 30.368 69.7584 28.576C70.7184 26.752 72.0304 25.328 73.6944 24.304C75.3904 23.28 77.3104 22.768 79.4544 22.768C81.5984 22.768 83.5184 23.28 85.2144 24.304C86.9104 25.328 88.2384 26.752 89.1984 28.576C90.1584 30.4 90.6384 32.464 90.6384 34.768C90.6384 37.072 90.1584 39.136 89.1984 40.96C88.2704 42.784 86.9584 44.208 85.2624 45.232C83.5984 46.256 81.6944 46.768 79.5504 46.768ZM79.4544 43.792C80.9904 43.792 82.3504 43.408 83.5344 42.64C84.7504 41.872 85.6944 40.8 86.3664 39.424C87.0384 38.048 87.3744 36.496 87.3744 34.768C87.3744 33.04 87.0384 31.488 86.3664 30.112C85.6944 28.736 84.7504 27.664 83.5344 26.896C82.3504 26.128 80.9904 25.744 79.4544 25.744C77.9504 25.744 76.6064 26.128 75.4224 26.896C74.2384 27.664 73.3104 28.736 72.6384 30.112C71.9664 31.456 71.6304 32.992 71.6304 34.72C71.6304 36.48 71.9664 38.048 72.6384 39.424C73.3104 40.8 74.2384 41.872 75.4224 42.64C76.6064 43.408 77.9504 43.792 79.4544 43.792Z",fill:"#FAFAFA"}),r.a.createElement("path",{d:"M124.723 51.25C124.056 51.25 123.339 51.15 122.573 50.95C121.839 50.7167 121.306 50.3 120.973 49.7C120.206 47.1 119.406 44.4333 118.573 41.7C117.739 38.9667 116.906 36.2833 116.073 33.65C115.139 30.55 114.139 27.3333 113.073 24C112.006 20.6333 111.006 17.4167 110.073 14.35C109.873 13.6167 109.989 12.9833 110.423 12.45C110.856 11.8833 111.473 11.4667 112.273 11.2C112.773 11.0667 113.206 11 113.573 11C114.706 11 115.439 11.5667 115.773 12.7L119.473 24.55C119.806 25.75 120.189 27.0667 120.623 28.5C121.089 29.9333 121.556 31.4 122.023 32.9C122.489 34.4 122.956 35.9 123.423 37.4C123.889 38.8667 124.323 40.2333 124.723 41.5C125.356 39.4 126.039 37.1333 126.773 34.7C127.539 32.2333 128.306 29.7333 129.073 27.2C129.873 24.6667 130.656 22.1667 131.423 19.7C132.189 17.2 132.906 14.8667 133.573 12.7C133.939 11.5667 134.656 11 135.723 11C136.123 11 136.589 11.0667 137.123 11.2C138.956 11.7 139.673 12.75 139.273 14.35C137.473 20.1833 135.656 26.0667 133.823 32C131.989 37.9333 130.173 43.8333 128.373 49.7C128.106 50.3667 127.606 50.8 126.873 51C126.173 51.1667 125.456 51.25 124.723 51.25Z",fill:"#FAFAFA"})))),r.a.createElement("div",{className:u.a.LinksContainer},r.a.createElement(l.c,{className:u.a.Link,to:"/sorting",activeStyle:{borderBottom:".3rem solid #EE4266"}},"Sorting"),r.a.createElement(l.c,{className:u.a.Link,to:"/path-finding",activeStyle:{borderBottom:".3rem solid #EE4266"}},"Path Finding"),r.a.createElement(l.c,{className:u.a.Link,to:"/something",activeStyle:{borderBottom:".3rem solid #EE4266"}},"Something")))},A=function(e){var t=Object(s.d)((function(e){return e.sort.arraySize})),a=Object(s.d)((function(e){return e.sort.sorting})),n={height:"".concat(e.value/t*100,"%"),flex:1,marginTop:"auto",transition:a?"none":"all .3s ease"},i={backgroundImage:"linear-gradient(to bottom, ".concat(e.fill,", 90%, white)"),height:"100%",margin:"0 10%",borderTop:"2px solid ".concat("#EE4266"===e.fill?"#EE4266":"#05668d")};return r.a.createElement("div",{style:n},r.a.createElement("div",{style:i}))},w=a(59),k=a.n(w),L=function(e){var t=Object(s.d)((function(e){return e.sort.sorted}))?"#05668d":"#c3e5f3",a=e.values.map((function(a,n){return r.a.createElement(A,{value:a,key:n,fill:e.activeValues.includes(n)?"#EE4266":t})}));return r.a.createElement("div",{className:k.a.BarGraph},a)},D=a(23),x=a.n(D),N=a(107),M=a(89),R=a(114),z=a(105),I=a(111),W=a(110),P=a(108),G=a(112),B=a(113),H=a(63),F=a.n(H),V=function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),i=a[0],o=a[1],c=Object(n.useRef)(null),u=r.a.useState(0),l=Object(f.a)(u,2),s=l[0],d=l[1],h=Object.keys(e.options),m=function(e){c.current&&c.current.contains(e.target)||o(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{variant:"contained",color:"primary",ref:c,style:{width:"200px"}},r.a.createElement(M.a,{onClick:e.options[h[s]],size:"large",disabled:e.disabled,style:{width:"200px"}},h[s]),r.a.createElement(M.a,{color:"primary",size:"small","aria-controls":i?"split-button-menu":void 0,"aria-expanded":i?"true":void 0,onClick:function(){o((function(e){return!e}))}},r.a.createElement(F.a,null))),r.a.createElement(I.a,{open:i,anchorEl:c.current,transition:!0,disablePortal:!0},(function(t){var a=t.TransitionProps,n=t.placement;return r.a.createElement(W.a,Object.assign({},a,{style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),r.a.createElement(N.a,{style:{width:"200px"}},r.a.createElement(P.a,{onClickAway:m},r.a.createElement(G.a,{id:"split-button-menu"},h.map((function(t,a){return r.a.createElement(B.a,{key:t,selected:a===s,onClick:function(t){return function(t,a){d(a),e.onChange(a),o(!1)}(0,a)}},t)}))))))})))};function Z(e){var t=e.slice(),a=[];return function e(t,a,n,r){var i;t.length>1&&(i=function(e,t,a,n){var r=e[Math.floor((a+t)/2)],i=t,o=a;for(;i<=o;){for(n.push([i,o,"active"]);e[i]<r;)i++,n.push([i,o,"active"]);for(;e[o]>r;)o--,n.push([i,o,"active"]);i<=o&&(n.push([i,o,"swap"]),q(e,i,o),i++,o--)}return i}(t,a,n,r),a<i-1&&e(t,a,i-1,r),i<n&&e(t,i,n,r));return t}(t,0,t.length-1,a),a}function U(e){var t=e.slice(),a=e.slice(),n=[];return function e(t,a,n,r,i){if(a===n)return;var o=Math.floor((a+n)/2);e(r,a,o,t,i),e(r,o+1,n,t,i),function(e,t,a,n,r,i){var o=t,c=t,u=a+1;for(;c<=a&&u<=n;)i.push([c,u,"active"]),r[c]<=r[u]?(i.push([o,r[c],"replace"]),e[o]=r[c],o++,c++):(i.push([o,r[u],"replace"]),e[o]=r[u],o++,u++);for(;c<=a;)i.push([c,c,"active"]),i.push([o,r[c],"replace"]),e[o]=r[c],o++,c++;for(;u<=n;)i.push([u,u,"active"]),i.push([o,r[u],"replace"]),e[o]=r[u],o++,u++}(t,a,o,n,r,i)}(t,0,t.length-1,a,n),n}function Y(e,t,a,n){var r=a,i=2*a+1,o=i+1;return n.push([r,i,"active"]),n.push([r,o,"active"]),i<t&&e[i]>e[r]&&(r=i),o<t&&e[o]>e[r]&&(r=o),r!==a&&(n.push([a,r,"swap"]),q(e,a,r),Y(e,t,r,n)),e}function q(e,t,a){var n=e[t];e[t]=e[a],e[a]=n}var J=[r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"600"}},"Bubble sort"),", is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order."),r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:600}},"Quick sort")," is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot."),r.a.createElement("p",null,"Like quick sort, ",r.a.createElement("span",{style:{fontWeight:600}},"merge sort")," is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves."),r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:600}},"Heap sort")," is a comparison based sorting technique based on a Binary Heap. We first find the maximum element and place it at the end. The same process is repeated for the remaining elements.")],Q=Object(s.b)((function(e){return{sorting:e.sort.sorting,array:e.sort.array,arraySize:e.sort.arraySize,active:e.sort.active,animationSpeed:e.sort.animationSpeed}}),(function(e){return{setNewArray:function(){return e({type:"SET_NEW_ARRAY"})},playSortingAnimation:function(t){return e(function(e){return function(t,a){var n=a().sort.animationSpeed;t(h(!0));for(var r=function(a){var r=Object(f.a)(e[a],3),i=r[0],o=r[1],c=r[2];if("active"===c)var u=setTimeout((function(){t(m([i,o])),clearTimeout(u)}),800+n*a);if("swap"===c)var l=setTimeout((function(){t(p(i,o)),clearTimeout(l)}),800+n*a);if("replace"===c)var s=setTimeout((function(){t(g(i,o)),clearTimeout(s)}),800+n*a)},i=0;i<e.length;i++)r(i);var o=setTimeout((function(){t(h(!1)),t(m([])),t(d(!0)),clearTimeout(o)}),800+n*e.length)}}(t))},stopSortingAnimation:function(){return e((function(e){for(var t=setTimeout(";"),a=0;a<t;a++)clearTimeout(a);e(m([])),e(h(!1))}))},setSorted:function(t){return e(d(t))},setArraySize:function(t){return e(function(e){return{type:"SET_ARRAY_SIZE",arraySize:e}}(t))},setAnimationSpeed:function(t){return e(function(e){return{type:"SET_ANIMATION_SPEED",animationSpeed:e}}(t))}}}))((function(e){var t=Object(n.useState)(0),a=Object(f.a)(t,2),i=a[0],o=a[1];Object(n.useEffect)((function(){return c(),function(){e.stopSortingAnimation()}}),[]);var c=function(){e.setSorted(!1),e.setNewArray()},u={"Bubble Sort":function(){return e.playSortingAnimation(function(e){for(var t=e.slice(),a=[],n=0;n<t.length-1;n++)for(var r=0;r<t.length-n-1;r++)a.push([r,r+1,"active"]),t[r]>t[r+1]&&(a.push([r,r+1,"swap"]),q(t,r,r+1));return a}(e.array))},"Quick Sort":function(){return e.playSortingAnimation(Z(e.array))},"Merge Sort":function(){return e.playSortingAnimation(U(e.array))},"Heap Sort":function(){return e.playSortingAnimation(function(e){for(var t=e.slice(),a=[],n=e.length,r=Math.floor(n/2-1),i=n-1;r>=0;)Y(t,n,r,a),r--;for(;i>=0;)a.push([0,i,"active"]),a.push([0,i,"swap"]),q(t,0,i),Y(t,i,0,a),i--;return a}(e.array))}},l=window.matchMedia("(max-width: 700px)");return r.a.createElement("div",{className:x.a.Sorter},r.a.createElement("div",{className:x.a.GraphContainer},r.a.createElement("div",{className:x.a.Graph},r.a.createElement(L,{values:e.array,activeValues:e.active,sorting:e.sorting}))),r.a.createElement(N.a,{className:x.a.ControlsContainer,elevation:10,style:{borderRadius:0,paddingBottom:l.matches?"4rem":"0"}},r.a.createElement("div",{className:x.a.Controls},r.a.createElement("h1",{style:{marginBottom:"3rem"}},"Sorting"),r.a.createElement(M.a,{onClick:c,disabled:e.sorting,color:"primary",size:"large",variant:"outlined",style:{marginRight:".8rem"}},"set new"),r.a.createElement(M.a,{onClick:e.stopSortingAnimation,disabled:!e.sorting,color:"secondary",size:"large",variant:"contained",disableElevation:!0},"stop"),r.a.createElement("p",{className:x.a.SliderTitle},"Array Size"),r.a.createElement(R.a,{onChange:function(t,a){e.setArraySize(a),e.setSorted(!1),e.setNewArray()},value:e.arraySize,valueLabelDisplay:!0,disabled:e.sorting,min:10}),r.a.createElement("p",{className:x.a.SliderTitle},"Animation Speed"),r.a.createElement(R.a,{onChange:function(t,a){e.setAnimationSpeed(Math.abs(a-110))},value:Math.abs(e.animationSpeed-110),disabled:e.sorting,valueLabelDisplay:!0,min:1,style:{marginBottom:"3rem"}}),r.a.createElement(V,{options:u,disabled:e.sorting,onChange:function(e){return function(e){o(e)}(e)}}),r.a.createElement("div",{className:x.a.About},J[i]))))})),K=a(67),X=a.n(K),$=a(66),ee=a.n($),te=a(65),ae=a.n(te),ne=function(e){var t=e.type,a=25;window.matchMedia("(max-width: 700px)").matches&&(a=15);var n=null;e.start?n=r.a.createElement(ee.a,{style:{color:"path"===t?"#fafafa":"#05668d",fontSize:"".concat(a,"px")}}):e.target&&(n=r.a.createElement(X.a,{style:{color:"path"===t?"#fafafa":"#EE4266",fontSize:"".concat(a,"px")}}));var i="#fafafa",o="none";switch(t){case"wall":i="#e0e0e0",o="1px ridge #9e9e9e";break;case"path":i="#05668d";break;case"visited":i="#c3e5f3",o="1px solid #fafafa"}var c={backgroundColor:i,border:o,borderRadius:"3px",height:a+"px",width:a+"px",transition:"all .1s ease-in"};return r.a.createElement("div",{className:ae.a.Node,style:c,onMouseOver:function(a){a.preventDefault(),e.mouseDown&&!(e.start||e.target||"wall"===t||e.draggingStart||e.draggingTarget)&&e.makeWall(),e.draggingStart&&!e.target&&"wall"!==t&&e.makeStart(),e.draggingTarget&&!e.start&&"wall"!==t&&e.makeTarget()},onMouseDown:function(a){a.preventDefault(),e.start?e.setDraggingStartTrue():e.target?e.setDraggingTargetTrue():"wall"===!t&&e.makeWall()},onClick:function(a){a.preventDefault(),"wall"===t&&e.deleteWall()}},n)},re=function(e){for(var t=Object(n.useState)(!1),a=Object(f.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)(!1),u=Object(f.a)(c,2),l=u[0],d=u[1],h=Object(n.useState)(!1),m=Object(f.a)(h,2),p=m[0],g=m[1],S=Object(s.d)((function(e){return e.path.start})),y=Object(s.d)((function(e){return e.path.target})),O=Object(s.d)((function(e){return e.path.walls})),_=Object(s.d)((function(e){return e.path.visited})),T=Object(s.d)((function(e){return e.path.path})),j=Object(s.d)((function(e){return e.path.finding})),A=Object(s.c)(),w=Object(n.useCallback)((function(e){return A(v(e))}),[A]),k=Object(n.useCallback)((function(e){return A(b(e))}),[A]),L=Object(n.useCallback)((function(e){return A(function(e){return{type:"ADD_WALL",node:e}}(e))}),[A]),D=Object(n.useCallback)((function(e){return A(E(e))}),[A]),x={display:"grid",gridTemplateColumns:"repeat(".concat(e.width,", max-content)"),gridTemplateRows:"repeat(".concat(e.height,", max-content)"),gap:"1px"},N=function(){j||d(!0)},M=function(){j||g(!0)},R=function(e,t){return e[0]===t[0]&&e[1]===t[1]},z=[],I=0;I<e.height;I++)for(var W=0;W<e.width;W++)z.push([W,I]);return z=z.map((function(e){var t;return t=O[e]?"wall":T[e]?"path":_[e]?"visited":"none",r.a.createElement(ne,{type:t,start:R(S,e),target:R(y,e),makeStart:function(){return w([e[0],e[1]])},makeTarget:function(){return k([e[0],e[1]])},makeWall:function(){return L(e)},deleteWall:function(){return D(e)},mouseDown:i,draggingStart:l,setDraggingStartTrue:N,draggingTarget:p,setDraggingTargetTrue:M,key:"".concat(e[0],",").concat(e[1])})})),r.a.createElement("div",{onMouseDown:function(e){j||(e.preventDefault(),o(!0),A(C()))},onMouseUp:function(e){e.preventDefault(),o(!1),d(!1),g(!1)},onMouseLeave:function(e){e.preventDefault(),o(!1),d(!1),g(!1)},style:x},z)},ie=a(48),oe=a(22);function ce(e){for(var t=0,a=0;a<e.length;a++)e[a].f<e[t].f&&(t=a);return e.splice(t,1)[0]}function ue(e,t){return Math.abs(e[0]-t[0])+Math.abs(e[1]-t[1])}function le(e,t,a,n){var r=[],i=[e[0]+1,e[1]];i[0]<a&&!t[i]&&r.push(i);var o=[e[0],e[1]-1];o[1]>=0&&!t[o]&&r.push(o);var c=[e[0]-1,e[1]];c[0]>=0&&!t[c]&&r.push(c);var u=[e[0],e[1]+1];return u[1]<n&&!t[u]&&r.push(u),r}function se(e,t,a,n){for(var r=[],i=t;!fe(i,e);)r.push(i),i=a[i];(r=r.reverse()).unshift(e);for(var o=0;o<r.length;o++)n.push([].concat(Object(oe.a)(r[o]),["path"]))}function fe(e,t){return e[0]===t[0]&&e[1]===t[1]}function de(e,t,a,n){for(var r=[],i={},o=1;o<a;o+=2)for(var c=0;c<n;c++)i[[o,c]]=!0;for(var u=1;u<n;u+=2)for(var l=0;l<a;l++)i[[l,u]]=!0;i[e]=!1,i[t]=!1,r.push(i);return function e(t,a,n,r,i){i[t]=!0;var o,c=function(e,t,a){var n=[],r=[e[0]+2,e[1]];r[0]<t&&n.push(r);var i=[e[0],e[1]-2];i[1]>=0&&n.push(i);var o=[e[0]-2,e[1]];o[0]>=0&&n.push(o);var c=[e[0],e[1]+2];c[1]<a&&n.push(c);return function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(n),n}(t,a,n),u=Object(ie.a)(c);try{for(u.s();!(o=u.n()).done;){var l=o.value;if(!i[l]){var s=void 0;s=t[0]-l[0]===-2?[t[0]+1,t[1]]:t[0]-l[0]===2?[t[0]-1,t[1]]:t[1]-l[1]===-2?[t[0],t[1]+1]:[t[0],t[1]-1],r.push(s),e(l,a,n,r,i)}}}catch(f){u.e(f)}finally{u.f()}}([0,0],a,n,r,{}),r}var he=a(31),me=a.n(he),pe=[r.a.createElement("p",null,"The ",r.a.createElement("span",{style:{fontWeight:"600"}},"A* search")," algorithm introduces a heuristic into a regular graph-searching algorithm, essentially planning ahead at each step so a more optimal decision is made. This algorithm guarantees the shortest path possible."),r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"600"}},"Breadth first search")," is a traversing algorithm which starts from a selected node and continues to traverse the graph layerwise thus exploring the neighbouring nodes. This algorithm guarantees the shortest path possible."),r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:600}},"Depth first search")," is a traversing algorithm which uses the idea of backtracking. It explores all the nodes by going forward if possible or uses backtracking. Unlike DFS, it does not guarantee the shortest path, but rather if such a path even exist")],ge=function(e){var t=Object(n.useState)(0),a=Object(f.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)(0),u=Object(f.a)(c,2),l=u[0],d=u[1],h=Object(n.useState)(0),m=Object(f.a)(h,2),p=m[0],g=m[1],j=Object(s.d)((function(e){return e.path.start})),A=Object(s.d)((function(e){return e.path.target})),w=Object(s.d)((function(e){return e.path.walls})),k=Object(s.d)((function(e){return e.path.finding})),L=Object(s.d)((function(e){return e.path.animationSpeed})),D=Object(s.c)(),x=function(e){return D(function(e){return function(t,a){var n=a().path.animationSpeed;t(C()),t(O(!0));for(var r=function(a){var r=Object(f.a)(e[a],3),i=r[0],o=r[1],c=r[2];if("visited"===c)var u=setTimeout((function(){t(_([i,o])),clearTimeout(u)}),800+n*a);if("path"===c)var l=setTimeout((function(){t(T([i,o])),clearTimeout(l)}),1800+n*a)},i=0;i<e.length;i++)r(i);var o=setTimeout((function(){t(O(!1)),clearTimeout(o)}),1800+n*e.length)}}(e))},z=function(e){return D(function(e){return function(t,a){var n=a().path.animationSpeed;t(S()),t(O(!0)),t(y(e[0]));for(var r=function(a){var r=setTimeout((function(){t(E(e[a])),clearTimeout(r)}),800+1.5*n*a)},i=1;i<e.length;i++)r(i);var o=setTimeout((function(){t(O(!1)),clearTimeout(o)}),800+1.5*n*e.length)}}(e))},I=function(){return D((function(e){for(var t=setTimeout(";"),a=0;a<t;a++)clearTimeout(a);e(C()),e(O(!1))}))},W=function(){return D(S())};Object(n.useEffect)((function(){return B(),window.addEventListener("resize",B),function(){W(),I(),window.removeEventListener("resize",B)}}),[]);var P=25,G=window.matchMedia("(max-width: 700px)");G.matches&&(P=15);var B=function(){var e=document.getElementById("grid"),t=e.offsetWidth,a=e.offsetHeight,n=Math.floor(t/P)-1,r=Math.floor(a/P)-1,i=[Math.floor(n/5),Math.floor(r/5)],c=[Math.floor(4*n/5),Math.floor(4*r/5)];D(v(i)),function(e){D(b(e))}(c),o(n),d(r)},H={"A* Search":function(){return x(function(e,t,a,n,r){var i=[],o={},c=[],u={};for(e.f=e.g=e.h=0,t.f=t.g=t.h=0,c.push(e);c.length>0;){var l=ce(c);if(o[l]=!0,i.push([].concat(Object(oe.a)(l),["visited"])),fe(l,t))return se(e,t,u,i),i;for(var s=le(l,a,n,r),f=0;f<s.length;f++){var d=s[f];if(!o[d]){d.g=l.g+1,d.h=ue(d,t),d.f=d.g+d.h;var h=!1;if(c.length>0)for(var m=0;m<c.length;m++)fe(d,c[m])&&d.g>=c[m].g&&(h=!0);h||(c.push(d),u[d]=l)}}}return i}(j,A,w,i,l))},"Breadth First":function(){return x(function(e,t,a,n,r){var i=[],o=[e],c={};c[e]=!0;var u={};for(i.push([].concat(Object(oe.a)(e),["visited"]));o.length>0;){var l,s=o.shift(),f=le(s,a,n,r),d=Object(ie.a)(f);try{for(d.s();!(l=d.n()).done;){var h=l.value;if(!c[h]&&(i.push([].concat(Object(oe.a)(h),["visited"])),o.push(h),c[h]=!0,u[h]=s,fe(t,h)))return se(e,t,u,i),i}}catch(m){d.e(m)}finally{d.f()}}return i}(j,A,w,i,l))},"Depth First":function(){return x(function(e,t,a,n,r){var i=[],o={},c=!1;return function e(t,a,n,r,i,o,u,l){if(u[t]=!0,o.push([].concat(Object(oe.a)(t),["visited"])),fe(t,a))return void(c=!0);var s,f=le(t,n,r,i),d=Object(ie.a)(f);try{for(d.s();!(s=d.n()).done;){var h=s.value;u[h]||c||(l[h]=t,e(h,a,n,r,i,o,u,l))}}catch(m){d.e(m)}finally{d.f()}}(e,t,a,n,r,i,{},o),c&&se(e,t,o,i),i}(j,A,w,i,l))}};return r.a.createElement("div",{className:me.a.PathFinder},r.a.createElement("div",{className:me.a.GridContainer},r.a.createElement("div",{style:{height:"100%"},id:"grid"},r.a.createElement("div",{className:me.a.Grid},r.a.createElement(re,{width:i,height:l})))),r.a.createElement(N.a,{elevation:10,style:{borderRadius:0,marginTop:G.matches?".5rem":"0",paddingBottom:G.matches?"4rem":"0"},className:me.a.ControlsContainer},r.a.createElement("div",null,r.a.createElement("h1",{style:{marginBottom:"3rem"}},"Path Finding"),r.a.createElement(M.a,{variant:"outlined",color:"primary",size:"large",onClick:function(){return z(de(j,A,i,l))},disabled:k,style:{marginRight:".8rem"}},"Generate Maze"),r.a.createElement(M.a,{variant:"outlined",color:"primary",size:"large",onClick:W,disabled:k,style:{marginRight:".8rem"}},"clear"),r.a.createElement(M.a,{color:"secondary",size:"large",variant:"contained",onClick:I,disabled:!k},"stop"),r.a.createElement("p",{className:me.a.SliderTitle},"Animation Speed"),r.a.createElement(R.a,{onChange:function(e,t){var a;a=Math.abs(t-120),D(function(e){return{type:"SET_PATH_SPEED",speed:e}}(a))},value:Math.abs(L-120),disabled:k,valueLabelDisplay:!0,min:1,style:{marginBottom:"3rem"}}),r.a.createElement(V,{onChange:function(e){return function(e){g(e)}(e)},options:H,disabled:k})),r.a.createElement("div",{className:me.a.About},pe[p])))},ve=a(10),be=a(69),Ee=a(109),Se=(a(86),Object(be.a)({palette:{primary:{main:"#05668d",light:"#c3e5f3"}},typography:{fontFamily:["Work Sans"].join(","),fontSize:16}}));var Ce=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Ee.a,{theme:Se},r.a.createElement(j,null),r.a.createElement(ve.c,null,r.a.createElement(ve.a,{path:"/path-finding",component:ge}),r.a.createElement(ve.a,{path:"/",component:Q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=a(3),Oe={array:[],sorting:!1,sorted:!1,arraySize:50,active:[],animationSpeed:40},_e=function(e,t){for(var a=[],n=0;n<e.arraySize;n++)a.push(Math.floor(Math.random()*(e.arraySize-4))+5);return Object(ye.a)(Object(ye.a)({},e),{},{array:a})},Te=function(e,t){return Object(ye.a)(Object(ye.a)({},e),{},{sorting:t.sorting})},je=function(e,t){return Object(ye.a)(Object(ye.a)({},e),{},{sorted:t.sorted})},Ae=function(e,t){return Object(ye.a)(Object(ye.a)({},e),{},{arraySize:t.arraySize})},we=function(e,t){return Object(ye.a)(Object(ye.a)({},e),{},{animationSpeed:t.animationSpeed})},ke=function(e,t){return Object(ye.a)(Object(ye.a)({},e),{},{active:t.active})},Le=function(e,t){var a=Object(oe.a)(e.array),n=a[t.index1];return a[t.index1]=a[t.index2],a[t.index2]=n,Object(ye.a)(Object(ye.a)({},e),{},{array:a})},De=function(e,t){var a=Object(oe.a)(e.array);return a[t.index]=t.value,Object(ye.a)(Object(ye.a)({},e),{},{array:a})},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NEW_ARRAY":return _e(e);case"SET_SORTING":return Te(e,t);case"SET_SORTED":return je(e,t);case"SET_ARRAY_SIZE":return Ae(e,t);case"SET_ANIMATION_SPEED":return we(e,t);case"SET_ACTIVE":return ke(e,t);case"SWAP_VALUES":return Le(e,t);case"REPLACE_VALUE":return De(e,t);default:return e}},Ne={start:[4,5],target:[16,15],walls:{},visited:{},path:{},finding:!1,animationSpeed:50},Me=function(e,t){var a=t.node;return Object(ye.a)(Object(ye.a)({},e),{},{start:a})},Re=function(e,t){var a=t.node;return Object(ye.a)(Object(ye.a)({},e),{},{target:a})},ze=function(e,t){var a=t.walls;return Object(ye.a)(Object(ye.a)({},e),{},{walls:a})},Ie=function(e,t){var a=Object(ye.a)({},e.walls);return a[t.node]=!0,Object(ye.a)(Object(ye.a)({},e),{},{walls:a})},We=function(e,t){var a=Object(ye.a)({},e.walls);return a[t.node]=!1,Object(ye.a)(Object(ye.a)({},e),{},{walls:a})},Pe=function(e,t){var a=Object(ye.a)({},e.visited);return a[t.node]=!0,Object(ye.a)(Object(ye.a)({},e),{},{visited:a})},Ge=function(e,t){var a=Object(ye.a)({},e.path);return a[t.node]=!0,Object(ye.a)(Object(ye.a)({},e),{},{path:a})},Be=function(e,t){return Object(ye.a)(Object(ye.a)({},e),{},{walls:{},path:{},visited:{}})},He=function(e,t){return Object(ye.a)(Object(ye.a)({},e),{},{visited:{},path:{}})},Fe=function(e,t){var a=t.finding;return Object(ye.a)(Object(ye.a)({},e),{},{finding:a})},Ve=function(e,t){return Object(ye.a)(Object(ye.a)({},e),{},{animationSpeed:t.speed})},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_START":return Me(e,t);case"SET_TARGET":return Re(e,t);case"SET_WALLS":return ze(e,t);case"ADD_WALL":return Ie(e,t);case"DELETE_WALL":return We(e,t);case"ADD_VISITED":return Pe(e,t);case"ADD_PATH":return Ge(e,t);case"CLEAR_ALL":return Be(e);case"CLEAR_VISITED_AND_PATH":return He(e);case"SET_FINDING":return Fe(e,t);case"SET_PATH_SPEED":return Ve(e,t);default:return e}},Ue=a(29),Ye=a(68),qe=Object(Ue.c)({sort:xe,path:Ze}),Je=Ue.d,Qe=Object(Ue.e)(qe,Je(Object(Ue.a)(Ye.a))),Ke=r.a.createElement(s.a,{store:Qe},r.a.createElement(l.a,null,r.a.createElement(Ce,null)));o.a.render(Ke,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.3a3cc207.chunk.js.map