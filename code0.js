gdjs.NameCode = {};
gdjs.NameCode.localVariables = [];
gdjs.NameCode.GDTile_95951Objects1= [];
gdjs.NameCode.GDTile_95951Objects2= [];
gdjs.NameCode.GDtile_95952Objects1= [];
gdjs.NameCode.GDtile_95952Objects2= [];
gdjs.NameCode.GDSkeletObjects1= [];
gdjs.NameCode.GDSkeletObjects2= [];
gdjs.NameCode.GDNewTiledSpriteObjects1= [];
gdjs.NameCode.GDNewTiledSpriteObjects2= [];
gdjs.NameCode.GDright_9595arrowObjects1= [];
gdjs.NameCode.GDright_9595arrowObjects2= [];
gdjs.NameCode.GDLeft_9595arrowObjects1= [];
gdjs.NameCode.GDLeft_9595arrowObjects2= [];
gdjs.NameCode.GDbackgroundObjects1= [];
gdjs.NameCode.GDbackgroundObjects2= [];
gdjs.NameCode.GDCoin2Objects1= [];
gdjs.NameCode.GDCoin2Objects2= [];
gdjs.NameCode.GDcoinaloObjects1= [];
gdjs.NameCode.GDcoinaloObjects2= [];
gdjs.NameCode.GDgsisObjects1= [];
gdjs.NameCode.GDgsisObjects2= [];
gdjs.NameCode.GDtimer_9595iconObjects1= [];
gdjs.NameCode.GDtimer_9595iconObjects2= [];
gdjs.NameCode.GDtimer_9595icon2Objects1= [];
gdjs.NameCode.GDtimer_9595icon2Objects2= [];
gdjs.NameCode.GDplayObjects1= [];
gdjs.NameCode.GDplayObjects2= [];
gdjs.NameCode.GDNameObjects1= [];
gdjs.NameCode.GDNameObjects2= [];
gdjs.NameCode.GDTCCObjects1= [];
gdjs.NameCode.GDTCCObjects2= [];
gdjs.NameCode.GDEDUCObjects1= [];
gdjs.NameCode.GDEDUCObjects2= [];
gdjs.NameCode.GDaceObjects1= [];
gdjs.NameCode.GDaceObjects2= [];
gdjs.NameCode.GDbunObjects1= [];
gdjs.NameCode.GDbunObjects2= [];
gdjs.NameCode.GDHollyObjects1= [];
gdjs.NameCode.GDHollyObjects2= [];
gdjs.NameCode.GDHolly2Objects1= [];
gdjs.NameCode.GDHolly2Objects2= [];


gdjs.NameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.NameCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NameCode.GDplayObjects1.length;i<l;++i) {
    if ( gdjs.NameCode.GDplayObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.NameCode.GDplayObjects1[k] = gdjs.NameCode.GDplayObjects1[i];
        ++k;
    }
}
gdjs.NameCode.GDplayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LeaderBoard", false);
}}

}


};gdjs.NameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.NameCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NameCode.GDplayObjects1.length;i<l;++i) {
    if ( gdjs.NameCode.GDplayObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.NameCode.GDplayObjects1[k] = gdjs.NameCode.GDplayObjects1[i];
        ++k;
    }
}
gdjs.NameCode.GDplayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "bg_music.mp3", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.NameCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("bun"), gdjs.NameCode.GDbunObjects1);
gdjs.copyArray(runtimeScene.getObjects("coinalo"), gdjs.NameCode.GDcoinaloObjects1);
gdjs.copyArray(runtimeScene.getObjects("gsis"), gdjs.NameCode.GDgsisObjects1);
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.NameCode.GDplayObjects1);
{for(var i = 0, len = gdjs.NameCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.NameCode.GDNameObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.NameCode.GDbunObjects1.length ;i < len;++i) {
    gdjs.NameCode.GDbunObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.NameCode.GDcoinaloObjects1.length ;i < len;++i) {
    gdjs.NameCode.GDcoinaloObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.NameCode.GDgsisObjects1.length ;i < len;++i) {
    gdjs.NameCode.GDgsisObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.NameCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.NameCode.GDplayObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString((( gdjs.NameCode.GDNameObjects1.length === 0 ) ? "" :gdjs.NameCode.GDNameObjects1[0].getBehavior("Text").getText()));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.NameCode.GDNameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NameCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.NameCode.GDNameObjects1[i].getBehavior("Text").getText() == "admin" ) {
        isConditionTrue_0 = true;
        gdjs.NameCode.GDNameObjects1[k] = gdjs.NameCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.NameCode.GDNameObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.NameCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.NameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NameCode.GDTile_95951Objects1.length = 0;
gdjs.NameCode.GDTile_95951Objects2.length = 0;
gdjs.NameCode.GDtile_95952Objects1.length = 0;
gdjs.NameCode.GDtile_95952Objects2.length = 0;
gdjs.NameCode.GDSkeletObjects1.length = 0;
gdjs.NameCode.GDSkeletObjects2.length = 0;
gdjs.NameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.NameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.NameCode.GDright_9595arrowObjects1.length = 0;
gdjs.NameCode.GDright_9595arrowObjects2.length = 0;
gdjs.NameCode.GDLeft_9595arrowObjects1.length = 0;
gdjs.NameCode.GDLeft_9595arrowObjects2.length = 0;
gdjs.NameCode.GDbackgroundObjects1.length = 0;
gdjs.NameCode.GDbackgroundObjects2.length = 0;
gdjs.NameCode.GDCoin2Objects1.length = 0;
gdjs.NameCode.GDCoin2Objects2.length = 0;
gdjs.NameCode.GDcoinaloObjects1.length = 0;
gdjs.NameCode.GDcoinaloObjects2.length = 0;
gdjs.NameCode.GDgsisObjects1.length = 0;
gdjs.NameCode.GDgsisObjects2.length = 0;
gdjs.NameCode.GDtimer_9595iconObjects1.length = 0;
gdjs.NameCode.GDtimer_9595iconObjects2.length = 0;
gdjs.NameCode.GDtimer_9595icon2Objects1.length = 0;
gdjs.NameCode.GDtimer_9595icon2Objects2.length = 0;
gdjs.NameCode.GDplayObjects1.length = 0;
gdjs.NameCode.GDplayObjects2.length = 0;
gdjs.NameCode.GDNameObjects1.length = 0;
gdjs.NameCode.GDNameObjects2.length = 0;
gdjs.NameCode.GDTCCObjects1.length = 0;
gdjs.NameCode.GDTCCObjects2.length = 0;
gdjs.NameCode.GDEDUCObjects1.length = 0;
gdjs.NameCode.GDEDUCObjects2.length = 0;
gdjs.NameCode.GDaceObjects1.length = 0;
gdjs.NameCode.GDaceObjects2.length = 0;
gdjs.NameCode.GDbunObjects1.length = 0;
gdjs.NameCode.GDbunObjects2.length = 0;
gdjs.NameCode.GDHollyObjects1.length = 0;
gdjs.NameCode.GDHollyObjects2.length = 0;
gdjs.NameCode.GDHolly2Objects1.length = 0;
gdjs.NameCode.GDHolly2Objects2.length = 0;

gdjs.NameCode.eventsList1(runtimeScene);
gdjs.NameCode.GDTile_95951Objects1.length = 0;
gdjs.NameCode.GDTile_95951Objects2.length = 0;
gdjs.NameCode.GDtile_95952Objects1.length = 0;
gdjs.NameCode.GDtile_95952Objects2.length = 0;
gdjs.NameCode.GDSkeletObjects1.length = 0;
gdjs.NameCode.GDSkeletObjects2.length = 0;
gdjs.NameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.NameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.NameCode.GDright_9595arrowObjects1.length = 0;
gdjs.NameCode.GDright_9595arrowObjects2.length = 0;
gdjs.NameCode.GDLeft_9595arrowObjects1.length = 0;
gdjs.NameCode.GDLeft_9595arrowObjects2.length = 0;
gdjs.NameCode.GDbackgroundObjects1.length = 0;
gdjs.NameCode.GDbackgroundObjects2.length = 0;
gdjs.NameCode.GDCoin2Objects1.length = 0;
gdjs.NameCode.GDCoin2Objects2.length = 0;
gdjs.NameCode.GDcoinaloObjects1.length = 0;
gdjs.NameCode.GDcoinaloObjects2.length = 0;
gdjs.NameCode.GDgsisObjects1.length = 0;
gdjs.NameCode.GDgsisObjects2.length = 0;
gdjs.NameCode.GDtimer_9595iconObjects1.length = 0;
gdjs.NameCode.GDtimer_9595iconObjects2.length = 0;
gdjs.NameCode.GDtimer_9595icon2Objects1.length = 0;
gdjs.NameCode.GDtimer_9595icon2Objects2.length = 0;
gdjs.NameCode.GDplayObjects1.length = 0;
gdjs.NameCode.GDplayObjects2.length = 0;
gdjs.NameCode.GDNameObjects1.length = 0;
gdjs.NameCode.GDNameObjects2.length = 0;
gdjs.NameCode.GDTCCObjects1.length = 0;
gdjs.NameCode.GDTCCObjects2.length = 0;
gdjs.NameCode.GDEDUCObjects1.length = 0;
gdjs.NameCode.GDEDUCObjects2.length = 0;
gdjs.NameCode.GDaceObjects1.length = 0;
gdjs.NameCode.GDaceObjects2.length = 0;
gdjs.NameCode.GDbunObjects1.length = 0;
gdjs.NameCode.GDbunObjects2.length = 0;
gdjs.NameCode.GDHollyObjects1.length = 0;
gdjs.NameCode.GDHollyObjects2.length = 0;
gdjs.NameCode.GDHolly2Objects1.length = 0;
gdjs.NameCode.GDHolly2Objects2.length = 0;


return;

}

gdjs['NameCode'] = gdjs.NameCode;
