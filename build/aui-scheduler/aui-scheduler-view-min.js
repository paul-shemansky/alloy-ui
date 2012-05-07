AUI.add("aui-scheduler-view",function(b8){var cl=b8.Lang,cy=cl.isObject,bZ=cl.isString,aZ=cl.isBoolean,aG=cl.isNumber,bO=function(A){return parseFloat(A)||0;},bQ=function(cD,A){return Math.round(cD/A)*A;},ar=b8.DataType.DateMath,b4=b8.WidgetStdMod,aM=ar.WEEK_LENGTH,bS="scheduler-view",aF="scheduler-view-day",cc="scheduler-view-week",cs="scheduler-view-month",bc="activeColumn",bN="activeView",aS="boundingBox",ah="col",ay="colDaysNode",ca="colHeaderDaysNode",H="colblank",w="coldata",aI="colday",a="colgrid",W="colspan",m="coltime",bp="columnData",aY="columnDayHeader",aK="columnShims",aQ="columnTableGrid",bi="columnTime",aP="container",aN="content",bb="creationEndDate",Z="creationStartDate",bg="currentDate",bC="data",ci="day",T="days",C="delegateConfig",bL="disabled",X="div",bo="division",ab="down",E="draggingEvent",bX="duration",aB="endDate",a7="event",ct="eventClass",bK="eventPlaceholder",cA="eventRecorder",q="eventWidth",aH="first",cd="firstDayOfWeek",be="grid",bz="gridContainer",cz="hd",b6="header",bf="headerDateFormat",cx="headerTableNode",aR="host",aE="hourHeight",s="icon",al="isoTime",aT="left",az="locale",ac="marker",a9="markercell",a2="markercellsNode",J="markers",bF="markersNode",bH="month",bd="monthContainerNode",e="monthRows",aO="next",cC="node",ak="nomonth",at="noscroll",b5="offsetHeight",b9="pad",aJ="paddingNode",cn="parentEvent",Q="parentNode",bw="proxy",ai="px",ad="region",aU="rendered",b3="repeated",a3="right",bu="row",p="scheduler",aC="scheduler-event",Y="scrollable",S="shim",cb="startDate",V="startXY",aV="table",z="tableGridNode",bA="tableNode",bx="tbody",f="td",br="time",aj="timesNode",h="title",am="today",bv="top",ax="visible",co="week",bD="width",t="data-colnumber",k="a",bP="-",bT=".",bM="",bE="%",U=" ",D=b8.getClassName,bq=D(bS,at),ae=D(bS,Y);var a1=b8.Component.create({NAME:bS,AUGMENTS:[b8.WidgetStdMod],ATTRS:{bodyContent:{value:bM},eventClass:{valueFn:function(){return b8.SchedulerEvent;}},height:{value:600},isoTime:{value:false,validator:aZ},name:{value:bM,validator:bZ},navigationDateFormat:{value:"%A - %d %B, %Y",validator:bZ},nextDate:{getter:"getNextDate",readOnly:true},prevDate:{getter:"getPrevDate",readOnly:true},scheduler:{lazyAdd:false,setter:"_setScheduler"},scrollable:{value:true,validator:aZ},triggerNode:{setter:b8.one},visible:{value:false}},BIND_UI_ATTRS:[Y],prototype:{initializer:function(){var A=this;A.after("render",A._afterRender);},syncUI:function(){var A=this;A.syncStdContent();},adjustCurrentDate:function(){var A=this;var cE=A.get(p);var cD=cE.get(bg);cE.set(bg,cD);},flushViewCache:function(){},getNextDate:function(){},getPrevDate:function(){},getToday:function(){return ar.clearTime(new Date());},limitDate:function(cD,cE){var A=this;if(ar.after(cD,cE)){cD=ar.clone(cE);}return cD;},plotEvents:function(){},syncStdContent:function(){},syncEventUI:function(A){},_uiSetCurrentDate:function(A){},_afterRender:function(cD){var A=this;A.adjustCurrentDate();A._uiSetScrollable(A.get(Y));},_setScheduler:function(cE){var A=this;var cD=A.get(p);if(cD){A.removeTarget(cD);}if(cE){A.addTarget(cE);cE.after("eventsChange",b8.bind(A.flushViewCache,A));}return cE;},_uiSetScrollable:function(cE){var A=this;var cD=A.bodyNode;if(cD){cD.toggleClass(ae,cE);cD.toggleClass(bq,!cE);}},_uiSetVisible:function(cD){var A=this;a1.superclass._uiSetVisible.apply(this,arguments);if(cD&&A.get(aU)){A.adjustCurrentDate();}}}});b8.SchedulerView=a1;var bJ=cl.sub;var N=function(A,cD){return function(cF){var cE=cF.all(A);return(cE.size()>=cD)?cE:null;};},aL=D(aC),bl=D(aC,bL),bV=D(aC,bw),P=D(p,am),aq=D(p,am,cz),x=D(bS,w),c=D(bS,a),ce=D(bS,be),cf=D(bS,be,aP),bn=D(bS,ac,bo),ch=D(bS,a9),K=D(bS,J),bB=D(bS,aV),ck=D(bS,ci,b6,aV),r=D(bS,ci,b6,ci),bm=D(bS,ci,b6,ci,b9,a3),bY=D(bS,ci,b6,ci,aH),a6=D(bS,ci,b6,ah),cv=D(bS,aV,ah),aD=D(bS,aV,ah,S),O=D(bS,aV,H),G=D(bS,aV,aI),cp=D(bS,aV,m),bt=D(bS,aV,br),af='<div class="'+ch+'">'+'<div class="'+bn+'"></div>'+"</div>",av='<table cellspacing="0" cellpadding="0" class="'+bB+'">'+"<tbody>"+'<tr class="'+c+'" height="1">'+'<td height="0" class="'+[cv,O].join(U)+'"></td>'+'<td class="'+cf+'" colspan="1">'+'<div class="'+ce+'">'+'<div class="'+K+'"></div>'+"</div>"+"</td>"+"</tr>"+'<tr class="'+x+'">'+'<td class="'+[cv,cp].join(U)+'"></td>'+"</tr>"+"</tbody>"+"</table>",bj='<td class="'+[cv,G].join(U)+'" data-colnumber="{colNumber}">'+'<div class="'+aD+'"></div>'+"</td>",j='<div class="'+bt+'">{hour}</div>',aw='<table cellspacing="0" cellpadding="0" class="'+ck+'">'+"<tbody>"+'<tr class="'+a6+'"></tr>'+"</tbody>"+"</table>",bk='<th class="'+r+'" data-colnumber="{colNumber}"><a href="#">&nbsp;</a></th>',au='<td class="'+[r,bY].join(U)+'"></td>',u='<th class="'+[r,bm].join(U)+'">&nbsp;</th>';var cw=b8.Component.create({NAME:aF,ATTRS:{bodyContent:{value:bM},days:{value:1,validator:aG},delegateConfig:{value:{},setter:function(cD){var A=this;return b8.merge({dragConfig:{useShim:false},bubbleTargets:A,container:A.get(aS),nodes:bT+aL,invalid:"input, select, button, a, textarea, "+bT+bl},cD||{});},validator:cy},headerDateFormat:{value:"%d %A",validator:bZ},name:{value:ci},hourHeight:{value:52,validator:aG},eventWidth:{value:95,validator:aG},headerTableNode:{valueFn:function(){return b8.Node.create(aw);}},tableNode:{valueFn:function(){return b8.Node.create(av);}},colDaysNode:{valueFn:"_valueColDaysNode"},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},markercellsNode:{valueFn:"_valueMarkercellsNode"},timesNode:{valueFn:"_valueTimesNode"}},HTML_PARSER:{colDaysNode:N(bT+G,1),colHeaderDaysNode:N(bT+r,2),headerTableNode:bT+ck,markercellsNode:N(bT+ch,24),tableNode:bT+bB,timesNode:N(bT+bt,24)},EXTENDS:b8.SchedulerView,prototype:{initializer:function(){var A=this;A[ay]=A.get(ay);A[ca]=A.get(ca);A[cx]=A.get(cx);A[a2]=A.get(a2);A[bA]=A.get(bA);A[aj]=A.get(aj);A[bc]=null;A[bp]=A[bA].one(bT+x);A[aY]=A.headerTableNode.one(bT+a6);A[aK]=A[ay].all(bT+aD);A[bi]=A[bA].one(bT+cp);A[bz]=A[bA].one(bT+cf);A[bF]=A[bA].one(bT+K);},renderUI:function(){var A=this;A[bi].setContent(A[aj]);A[bF].setContent(A[a2]);
A[ay].appendTo(A[bp]);A[ca].appendTo(A[aY]);},bindUI:function(){var A=this;A.headerTableNode.delegate("click",b8.bind(A._onClickDaysHeader,A),bT+r);A[bp].delegate("mousedown",b8.bind(A._onMouseDownTableCol,A),bT+cv);A[bp].delegate("mouseup",b8.bind(A._onMouseUpTableCol,A),bT+cv);A[bp].delegate("mousemove",b8.bind(A._onMouseMoveTableCol,A),bT+G);A.on("drag:end",A._onEventDragEnd);A.on("drag:start",A._onEventDragStart);A.on("drag:tickAlignY",A._dragTickAlignY);A.after("drag:align",A._afterDragAlign);},syncUI:function(){var A=this;cw.superclass.syncUI.apply(this,arguments);A[bz].attr(W,A.get(T));A._setupDragDrop();},syncStdContent:function(){var A=this;A.setStdModContent(b4.BODY,A[bA].getDOM());A.setStdModContent(b4.HEADER,A[cx].getDOM());},calculateEventHeight:function(cE){var cD=this;var A=cD.get(aE);return Math.max(cE*(A/60),A/2);},calculateTop:function(cD){var A=this;return((cD.getHours()*60)+cD.getMinutes()+(cD.getSeconds()/60))*(A.get(aE)/60);},getNextDate:function(){var A=this;var cD=A.get(p).get(bg);return ar.add(cD,ar.DAY,1);},getPrevDate:function(){var A=this;var cD=A.get(p).get(bg);return ar.subtract(cD,ar.DAY,1);},getColumnByDate:function(cD){var A=this;return A[ay].item(A.getDateDaysOffset(cD));},getColumnShimByDate:function(cD){var A=this;return A[aK].item(A.getDateDaysOffset(cD));},getDateByColumn:function(cE){var A=this;var cD=ar.safeClearTime(A.get(p).get(bg));return ar.add(cD,ar.DAY,cE);},getDateDaysOffset:function(cE){var A=this;var cD=ar.safeClearTime(A.get(p).get(bg));return ar.getDayOffset(ar.safeClearTime(cE),cD);},getYCoordTime:function(cG){var cD=this;var A=cD.get(aE);var cH=bO((cG/A).toFixed(2));var cF=Math.floor((cH*100)%100*0.6);var cE=Math.floor(cH);return[cE,cF,0];},plotEvent:function(cE){var A=this;var cF=cE.get(cC);if(cF.size()<2){cE.addPaddingNode();}var cH=cE.get(cC).item(0);var cD=cE.get(cC).item(1);var cG=A.getColumnShimByDate(cE.get(aB));var cI=A.getColumnShimByDate(cE.get(cb));if(cI){cI.append(cH);if(cE.get(ax)){cH.show();}}else{cH.hide();}if(cG){if(cG.compareTo(cI)||cE.isDayBoundaryEvent()){cD.hide();}else{cG.append(cD);if(cE.get(ax)){cD.show();}}}else{cD.hide();}A.syncEventTopUI(cE);A.syncEventHeightUI(cE);},plotEvents:function(){var A=this;var cD=A.get(p);A[aK].each(function(cG,cF){var cE=cD.getEventsByDay(A.getDateByColumn(cF),true);cG.empty();b8.Array.each(cE,function(cH){if(cH.getHoursDuration()<=24){A.plotEvent(cH);}});A.syncEventsIntersectionUI(cE);});},syncColumnsUI:function(){var A=this;A[ay].each(function(cF,cE){var cD=A.getDateByColumn(cE);cF.toggleClass(P,ar.isToday(cD));});},syncDaysHeaderUI:function(){var cE=this;var cF=cE.get(p).get(bg);var cD=cE.get(bf);var A=cE.get(az);cE[ca].all(k).each(function(cI,cH){var cG=ar.add(cF,ar.DAY,cH);var cJ=b8.DataType.Date.format(cG,{format:cD,locale:A});cI.toggleClass(aq,ar.isToday(cG));cI.html(cJ);});},syncEventsIntersectionUI:function(cD){var A=this;var cE=A.get(q);A.get(p).flushEvents();b8.Array.each(cD,function(cG){var cI=A.findEventIntersections(cG,cD);var cH=cI.length;var cF=(cE/cH);b8.Array.each(cI,function(cK,cL){var cJ=cK.get(cC).item(0);var cN=cF*cL;var cM=cF*1.7;if(cL===(cH-1)){cM=cE-cN;}cJ.setStyle(bD,cM+bE);cJ.setStyle(aT,cN+bE);var cO=cJ.get(Q);if(cO){cO.insert(cJ,cL);}cK._filtered=true;});});},syncEventHeightUI:function(cF){var cD=this;var cJ=cF.get(aB);var A=cF.get(cb);var cG=ar.clone(A);cG.setHours(24,0,0);var cH=ar.getMinutesOffset(cD.limitDate(cJ,cG),A);cF.get(cC).item(0).set(b5,cD.calculateEventHeight(cH));var cE=cF.get(cC).item(1);if(cE.inDoc()){var cI=ar.getMinutesOffset(cJ,ar.toMidnight(cF.getClearEndDate()));cE.set(b5,cD.calculateEventHeight(cI));}},syncEventTopUI:function(cD){var A=this;cD.get(cC).item(0).setStyle(bv,A.calculateTop(cD.get(cb))+ai);cD.get(cC).item(1).setStyle(bv,0);},calculateYDelta:function(cE,cD){var A=this;return(cD[1]-cE[1])/(A.get(aE)/2)*30;},findEventIntersections:function(cD,cE){var A=this;var cF=[];b8.Array.each(cE,function(cG){if(!cD._filtered&&cD.intersectHours(cG)&&(!cG.isDayOverlapEvent()||cG.isDayBoundaryEvent())){cF.push(cG);}});return cF;},getXYDelta:function(cD){var A=this;var cE=cD.currentTarget.getXY(),cF=[cD.pageX,cD.pageY];return b8.Array.map(cE,function(cH,cG){return(cF[cG]-cH);});},getTickY:function(){var A=this;return bQ(Math.ceil(A.get(aE)/2),10);},roundToNearestHour:function(cD,cE){var A=this;cD.setHours(cE[0],bQ(cE[1],A.getTickY()),cE[2]);},_afterDragAlign:function(cE){var cD=this;var A=cE.target;if(!cD[V]){cD[V]=A.actXY;}A.actXY[0]=null;},_dragTickAlignX:function(cE){var cD=this;var cH=cD[E];if(cH){var cF=cD[bK];var cG=bO(cE.attr(t))-cD.startColNumber;cD.activeColumnDate=ar.add(cH.get(cb),ar.DAY,cG);var A=ar.clone(cD.activeColumnDate);ar.copyHours(A,cF.get(cb));cF.move(A);cD.plotEvent(cF);}},_dragTickAlignY:function(cE){var cD=this;var cH=cD[E];if(cH){var A=cE.target.get(aR);var cF=cD[bK];var cG=cD.calculateYDelta(cD[V],A.actXY);cF.move(ar.add(cD.activeColumnDate,ar.MINUTES,cG));cD.plotEvent(cF);}},_setupDragDrop:function(){var cD=this;if(!cD[bK]){var cE=cD.get(p);cD[bK]=new (cD.get(ct))({scheduler:cE});cD[bK].removeTarget(cE);cD[bK].get(cC).addClass(bV).hide();}if(!cD.delegate){cD.delegate=new b8.DD.Delegate(cD.get(C));}var A=cD.delegate.dd;A.unplug(b8.Plugin.DDConstrained);A.unplug(b8.Plugin.DDNodeScroll);var cF=cD.bodyNode.get(ad);cF.bottom=Infinity;cF.top=-Infinity;A.plug(b8.Plugin.DDConstrained,{bubbleTargets:cD,constrain:cF,stickY:true,tickY:cD.get(aE)/2});A.plug(b8.Plugin.DDNodeScroll,{node:cD.bodyNode,scrollDelay:150});},_uiSetCurrentDate:function(cD){var A=this;A.syncColumnsUI();A.syncDaysHeaderUI();},_onClickDaysHeader:function(cF){var A=this;var cE=A.get(p);if(cF.target.test(k)){var cG=cE.getViewByName(ci);if(cG){var cD=bO(cF.currentTarget.attr(t));cE.set(bg,A.getDateByColumn(cD));cE.set(bN,cG);}}cF.preventDefault();},_onEventDragEnd:function(cD){var A=this;var cF=A[E];if(cF){var cE=A[bK];cE.set(ax,false);cF.set(ax,true);cF.copyDates(cE);A.get(p).syncEventsUI();}A[V]=null;A[E]=null;},_onEventDragStart:function(cE){var A=this;var cG=A[E]=A.delegate.dd.get(cC).getData(aC);
if(cG){var cF=A[bK];cF.copyPropagateAttrValues(cG);A.plotEvent(cF);cG.set(ax,false);A.activeColumnDate=ar.clone(cG.get(cb));var cD=A.getColumnByDate(cG.get(cb));A.startColNumber=cD?bO(cD.attr(t)):0;}},_onMouseDownTableCol:function(cH){var cD=this;var cG=cD.get(p);var cF=cG.get(cA);if(cF&&!cG.get(bL)){cF.hideOverlay();if(cH.target.test(bT+aD)){cD[V]=[cH.pageX,cH.pageY];var cE=bO(cH.currentTarget.attr(t));var A=cD.getDateByColumn(cE);var cI=cD.getXYDelta(cH);cD.roundToNearestHour(A,cD.getYCoordTime(cI[1]));var cJ=ar.add(A,ar.MINUTES,cF.get(bX));cF.move(A);cF.set(aB,cJ);cD[Z]=A;cD[bb]=cJ;cH.halt();}}cD.get(aS).unselectable();},_onMouseMoveTableCol:function(cG){var A=this;var cF=cG.currentTarget;var cD=A.get(p).get(cA);if(A[bc]!==cF){A[bc]=cF;A._dragTickAlignX(A[bc]);}var cE=A[bb];var cH=A[Z];if(cH){var cI=bQ(A.calculateYDelta(A[V],[cG.pageX,cG.pageY]),A.getTickY());if(A._delta!==cI){if(cI>0){cD.set(aB,ar.add(cE,ar.MINUTES,cI));}else{cD.set(cb,ar.add(cH,ar.MINUTES,cI));}A.plotEvent(cD);A._delta=cI;}}},_onMouseUpTableCol:function(cF){var A=this;var cE=A.get(p);var cD=cE.get(cA);if(cD&&!cE.get(bL)){if(A[Z]){A.plotEvent(cD);cD.showOverlay();}}A[Z]=null;A[bb]=null;A[V]=null;A.get(aS).selectable();},_valueColDaysNode:function(){var A=this;var cF=A.get(T);var cD=[],cE=0;while(cF--){cD.push(b8.Lang.sub(bj,{colNumber:cE++}));}return b8.NodeList.create(cD.join(bM));},_valueColHeaderDaysNode:function(){var A=this;var cF=A.get(T);var cD=[],cE=0;cD.push(au);while(cF--){cD.push(b8.Lang.sub(bk,{colNumber:cE++}));}cD.push(u);return b8.NodeList.create(cD.join(bM));},_valueMarkercellsNode:function(){var A=this;var cD=[],cE;for(cE=0;cE<=23;cE++){cD.push(af);}return b8.NodeList.create(cD.join(bM));},_valueTimesNode:function(){var A=this;var cF=A.get(al);var cE=[],cD;for(cD=0;cD<=23;cD++){cE.push(bJ(j,{hour:cF?ar.toIsoTimeString(cD):ar.toUsTimeString(cD,false,true)}));}return b8.NodeList.create(cE.join(bM));}}});b8.SchedulerDayView=cw;var an=b8.Component.create({NAME:cc,ATTRS:{bodyContent:{value:bM},days:{value:7},name:{value:co}},EXTENDS:b8.SchedulerDayView,prototype:{adjustCurrentDate:function(){var A=this;var cF=A.get(p);var cD=cF.get(bg);var cE=cF.get(cd);cF.set(bg,ar.getFirstDayOfWeek(cD,cE));},getNextDate:function(){var A=this;var cE=A.get(p);var cD=cE.get(bg);var cF=A._firstDayOfWeek(cD);return ar.add(cF,ar.WEEK,1);},getPrevDate:function(){var A=this;var cE=A.get(p);var cD=cE.get(bg);var cF=A._firstDayOfWeek(cD);return ar.subtract(cF,ar.WEEK,1);},getToday:function(){var A=this;var cD=an.superclass.getToday.apply(this,arguments);return A._firstDayOfWeek(cD);},_firstDayOfWeek:function(cE){var A=this;var cF=A.get(p);var cD=cF.get(cd);return ar.getFirstDayOfWeek(cE,cD);}}});b8.SchedulerWeekView=an;var cB="cancel",aX="lasso",B="mousedown",L="mousemove",aW="mouseup",b5="offsetHeight",b7="offsetWidth",bR="save",g=D(s),l=D(s,"arrowstop-1-l"),cq=D(s,"arrowstop-1-r"),b2=D(bS,bH,a),n=D(bS,bH,a,aH),b=D(bS,bH,a,am),i=D(bS,bH,aP),a8=D(bS,bH,b6,ah),v=D(bS,bH,b6,ci),cr=D(bS,bH,b6,aV),ao=D(bS,bH,aX),b1=D(bS,bH,bu),ap=D(bS,bH,bu,aP),bG=D(bS,bH,aV,bC),b0=D(bS,bH,aV,bC,ah),a5=D(bS,bH,aV,bC,ah,ak),a0=D(bS,bH,aV,bC,ah,h),cu=D(bS,bH,aV,bC,ah,h,ab),ag=D(bS,bH,aV,bC,ah,h,aH),y=D(bS,bH,aV,bC,ah,h,aO),R=D(bS,bH,aV,bC,ah,h,am),bs=D(bS,bH,aV,bC,a7),d=D(bS,bH,aV,bC,a7,aT),o=D(bS,bH,aV,bC,a7,b3),bU=D(bS,bH,aV,bC,a7,a3),a4=D(bS,bH,aV,bC,aH),bh=D(bS,bH,aV,be),cm=D(bS,bH,aV,be,aH),F='<table cellspacing="0" cellpadding="0" class="'+cr+'">'+"<tbody>"+'<tr class="'+a8+'"></tr>'+"</tbody>"+"</table>",M='<th class="'+v+'"><div>&nbsp;</div></th>',bI='<div class="'+ao+'"></div>',cj='<div class="'+i+'">'+'<div class="'+ap+'">'+'<div class="'+b1+'" style="top: 0; height: 16.6667%;"></div>'+'<div class="'+b1+'" style="top: 16.6667%; height: 16.6667%;"></div>'+'<div class="'+b1+'" style="top: 33.3333%; height: 16.6667%;"></div>'+'<div class="'+b1+'" style="top: 50%; height: 16.6667%;"></div>'+'<div class="'+b1+'" style="top: 66.6667%; height: 16.6667%;"></div>'+'<div class="'+b1+'" style="top: 83.3333%; height: 16.6667%;"></div>'+"</div>"+"</div>",by='<table cellspacing="0" cellpadding="0" class="'+bh+'">'+"<tbody>"+"<tr>"+'<td class="'+[b2,n].join(U)+'">&nbsp;</div></td>'+'<td class="'+b2+'">&nbsp;</td>'+'<td class="'+b2+'">&nbsp;</td>'+'<td class="'+b2+'">&nbsp;</td>'+'<td class="'+b2+'">&nbsp;</td>'+'<td class="'+b2+'">&nbsp;</td>'+'<td class="'+b2+'">&nbsp;</td>'+"</tr>"+"</tbody>"+"</table>",bW='<table cellspacing="0" cellpadding="0" class="'+bG+'">'+"<tbody></tbody>"+"</table>",cg="<tr></tr>",ba='<td class="'+b0+'"><div></div></td>',aa='<span class="'+[g,l].join(U)+'"></span>',I='<span class="'+[g,cq].join(U)+'"></span>';var aA=b8.Component.create({NAME:cs,ATTRS:{bodyContent:{value:bM},name:{value:bH},headerDateFormat:{value:"%a"},navigationDateFormat:{value:"%b %Y"},scrollable:{value:false},monthContainerNode:{valueFn:function(){return b8.Node.create(cj);}},headerTableNode:{valueFn:function(){return b8.Node.create(F);}},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},tableGridNode:{valueFn:"_valueTableGridNode"}},HTML_PARSER:{tableGridNode:N(bT+bh,7),colHeaderDaysNode:N(bT+v,7),monthContainerNode:bT+i,headerTableNode:bT+cr},EXTENDS:b8.SchedulerView,prototype:{evtDateStack:null,evtDataTableStack:null,initializer:function(){var A=this;A.evtDateStack={};A.evtDataTableStack={};A[ca]=A.get(ca);A[cx]=A.get(cx);A[bd]=A.get(bd);A[z]=A.get(z);A[aY]=A.headerTableNode.one(bT+a8);A[aQ]=A[z].all(f);A[e]=A[bd].all(bT+b1);},bindUI:function(){var A=this;var cE=A.get(p);var cD=cE.get(cA);cD.on(cB,b8.bind(A._removeLasso,A));cD.on(bR,b8.bind(A._removeLasso,A));A[bd].on(B,b8.bind(A._onMouseDownGrid,A));A[bd].on(L,b8.bind(A._onMouseMoveGrid,A));A[bd].on(aW,b8.bind(A._onMouseUpGrid,A));},renderUI:function(){var A=this;A.colHeaderDaysNode.appendTo(A[aY]);A[e].each(function(cF,cE){var cD=A[z].item(cE);cF.append(cD.toggleClass(cm,(cE===0)));});},adjustCurrentDate:function(){var A=this;var cD=A.get(p);cD.set(bg,A._findCurrentMonthStart());},buildEventsTable:function(cD,cI){var cO=this;
var cL=4;var cF=ar.clearTime(cO._findCurrentMonthEnd());var cN=ar.clearTime(cO._findCurrentMonthStart());var cK=String(cN.getTime()).concat(cD.getTime()).concat(cI.getTime());var cJ=cO.evtDataTableStack[cK];if(!cJ){cJ=b8.Node.create(bW);var cM=cJ.one(bx);var cG=b8.Node.create(cg);cO.loopDates(cD,cI,function(cQ,cP){var cR=b8.Node.create(ba);cR.addClass(a0).toggleClass(ag,(cP===0)).toggleClass(R,ar.isToday(cQ)).toggleClass(y,ar.isToday(ar.subtract(cQ,ar.DAY,1))).toggleClass(cu,ar.isToday(ar.subtract(cQ,ar.WEEK,1)));if(ar.before(cQ,cN)||ar.after(cQ,cF)){cR.addClass(a5);}cG.append(cR.setContent(cQ.getDate()));});cM.append(cG);var A;for(A=0;A<cL;A++){var cH=0;var cE=b8.Node.create(cg);cO.loopDates(cD,cI,function(cX,cU){if(cH<=cU){var cY=cO.getIntersectEvents(cX),cV=cY[A];var cR=b8.Node.create(ba);if(cV){var cQ=cV.get(cb);if(!(ar.before(cQ,cD)&&ar.getDayOffset(cX,cD)>0)){var cS=cV.get(cC);var cW=Math.floor(ar.getDayOffset(cX,ar.getFirstDayOfWeek(cQ))/aM);if(cS.size()<cW+1){cV.addPaddingNode();}var cT=cS.item(cW);cT.setStyles({height:"auto",left:0,top:0,width:"auto"});var cP=cR.one(X);cT.appendTo(cP);var cZ=cO._getEvtSplitInfo(cV,cX,cD,cI);cR.attr(W,cZ.colspan);cP.addClass(bs);if(cZ.left){cP.addClass(d).prepend(aa);}if(cZ.right){cP.addClass(bU).append(I);}if(cV.get(cn)){cP.addClass(o);}cH+=cZ.colspan;}}else{cH++;}cE.append(cR);}});cM.append(cE);}cO.evtDataTableStack[cK]=cJ;}return cJ;},flushViewCache:function(){var A=this;A.evtDateStack={};A.evtDataTableStack={};},getIntersectEvents:function(cD){var A=this;var cF=A.get(p);var cE=String(cD.getTime());if(!A.evtDateStack[cE]){A.evtDateStack[cE]=cF.getIntersectEvents(cD);}return A.evtDateStack[cE];},getNextDate:function(){var A=this;var cE=A.get(p);var cD=cE.get(bg);return ar.add(cD,ar.MONTH,1);},getPrevDate:function(){var A=this;var cE=A.get(p);var cD=cE.get(bg);return ar.subtract(cD,ar.MONTH,1);},loopDates:function(A,cF,cI,cJ,cH){var cK=this;var cD=ar.clone(A);var cE=cF.getTime(),cG;for(cG=0;cD.getTime()<=cE;cG++){cI.apply(cK,[cD,cG]);cD=ar.add(cD,(cJ||ar.DAY),(cH||1));}},plotEvents:function(){var cD=this;var cE=cD._findCurrentMonthStart();var A=ar.safeClearTime(cD._findFirstDayOfWeek(cE));cD.flushViewCache();cD.bodyNode.all(bT+bG).remove();cD[e].each(function(cI,cG){var cF=ar.add(A,ar.WEEK,cG);var cJ=ar.add(cF,ar.DAY,aM-1);var cH=cD.buildEventsTable(cF,cJ);if(cG===0){cH.addClass(a4);}cI.append(cH);});},syncDaysHeaderUI:function(){var cE=this;var cH=cE.get(p);var cF=cH.get(bg);var cD=cE.get(bf);var A=cE.get(az);var cG=cE._findFirstDayOfWeek(cF);cE.colHeaderDaysNode.all(X).each(function(cK,cJ){var cI=ar.add(cG,ar.DAY,cJ);var cL=b8.DataType.Date.format(cI,{format:cD,locale:A});cK.html(cL);});},syncGridUI:function(){var cK=this;var cE=cK.getToday();var cD=cK.get(p);cK[aQ].removeClass(b);if(ar.isSameMonth(cE,cD.get(bg))){var A=cD.get(cd);var cG=cK._findCurrentMonthStart();var cI=cK._findFirstDayOfWeek(cE);var cF=ar.getWeekNumber(cE,A)-ar.getWeekNumber(cG,A);var cJ=(cE.getDate()-cI.getDate());var cH=cK[z].item(cF).all(f).item(cJ);if(cH){cH.addClass(b);}}},syncStdContent:function(){var A=this;A.setStdModContent(b4.BODY,A[bd].getDOM());A.setStdModContent(b4.HEADER,A.headerTableNode.getDOM());},_findCurrentMonthEnd:function(){var A=this;var cE=A.get(p);var cD=cE.get(bg);return ar.findMonthEnd(cD);},_findCurrentMonthStart:function(){var A=this;var cE=A.get(p);var cD=cE.get(bg);return ar.findMonthStart(cD);},_findFirstDayOfWeek:function(cE){var A=this;var cF=A.get(p);var cD=cF.get(cd);return ar.getFirstDayOfWeek(cE,cD);},_getEvtLabel:function(cE){var cD=this;var cF=cE.get(aB);var A=cE.get(cb);return[A.getHours(),bP,cF.getHours(),U,cE.get(aN)].join(bM);},_getEvtSplitInfo:function(cI,cL,A,cF){var cJ=this;var cD=cI.getClearStartDate();var cG=cI.getClearEndDate();var cH=ar.getFirstDayOfWeek(cL);var cK=cF.getDate()-cL.getDate();var cE={colspan:Math.min(ar.getDayOffset(cG,cL),cK)+1,left:ar.before(cD,A),right:ar.after(cG,cF)};return cE;},_getCoordsColumn:function(cD){var A=this;return cD[1]*aM+cD[0];},_getCoordsDate:function(cF){var cD=this;var cE=cD._findCurrentMonthStart();var A=ar.safeClearTime(cD._findFirstDayOfWeek(cE));return ar.add(A,ar.DAY,cD._getCoordsColumn(cF));},_normalizeXY:function(cE){var A=this;var cD=A[bd].getXY();return[cE[0]-cD[0],cE[1]-cD[1]];},_onMouseDownGrid:function(cF){var A=this;var cG=cF.target;if(cG.test([bT+b2,bT+b0].join())){A._recording=true;var cD=A[z].item(0).all(f).item(0);A.gridCellHeight=cD.get(b5);A.gridCellWidth=cD.get(b7);var cE=A._normalizeXY([cF.pageX,cF.pageY]);A.lassoStartCoordinates=A.lastCoords=A._toCoordinates(cE);A._renderLasso(A.lassoStartCoordinates,A.lastCoords);A[bd].unselectable();}},_onMouseMoveGrid:function(cF){var A=this;var cH=cF.currentTarget;var cD=A._normalizeXY([cF.pageX,cF.pageY]);var cE=A.lastCoords||A.lassoStartCoordinates;var cG=A._toCoordinates(cD);var cI=cE&&((cG[0]!=cE[0])||(cG[1]!=cE[1]));if(A._recording&&cI){A.lastCoords=cG;A._renderLasso(A.lassoStartCoordinates,cG);}},_onMouseUpGrid:function(cG){var cD=this;var cI=cG.currentTarget;var cF=cD.get(p);var cE=cF.get(cA);if(cD._recording&&cE&&!cF.get(bL)){var A=cD._getCoordsDate(cD.lassoStartCoordinates);var cH=cD._getCoordsDate(cD.lastCoords);cE.set(cb,Math.min(A,cH));cE.set(aB,Math.max(A,cH));cE.showOverlay([cG.pageX,cG.pageY]);cD._recording=false;}},_removeLasso:function(){var A=this;if(A.lasso){A.lasso.remove();}},_renderLasso:function(cN,cL){var cK=this;var cG=cN;var cE=cL;if(cN[1]>cL[1]){cG=cL;cE=cN;}cK.lasso=(cK.lasso||b8.NodeList.create()).remove();var A=cK[bd].getXY();for(var cF=cG[1];cF<cE[1]+1;cF++){var cM=cK.gridCellHeight,cD=cK.gridCellWidth,cI=A[0],cH=A[1]+(cM*cF);if(cF==cG[1]){if(cG[1]==cE[1]){cI+=cD*Math.min(cG[0],cE[0]);cD*=Math.abs(cE[0]-cG[0])+1;}else{cI+=cD*cG[0];cD*=aM-cG[0];}}else{if(cF==cE[1]){cD*=cE[0]+1;}else{cD*=aM;}}var cJ=b8.Node.create(bI);cK[bd].append(cJ);cJ.set(b5,cM);cJ.set(b7,cD);cJ.setXY([cI,cH]);cK.lasso.push(cJ);}},_toCoordinates:function(cF){var A=this;var cE=Math.floor(cF[0]/A.gridCellWidth);var cD=Math.floor(cF[1]/A.gridCellHeight);
return[cE,cD];},_uiSetCurrentDate:function(cD){var A=this;A.syncDaysHeaderUI();A.syncGridUI();},_valueColHeaderDaysNode:function(){var A=this;return A._valueNodeList(aM,M);},_valueTableGridNode:function(){var A=this;return A._valueNodeList(aM,by);},_valueNodeList:function(cF,cE){var A=this;var cD=[];while(cF--){cD.push(cE);}return b8.NodeList.create(cD.join(bM));}}});b8.SchedulerMonthView=aA;},"@VERSION@",{skinnable:true,requires:["aui-scheduler-event","aui-calendar","aui-button-item","dd-drag","dd-delegate","dd-drop","dd-constrain"]});