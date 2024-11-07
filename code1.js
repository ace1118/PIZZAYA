gdjs.GameplayCode = {};
gdjs.GameplayCode.localVariables = [];
gdjs.GameplayCode.GDTile_95951Objects1= [];
gdjs.GameplayCode.GDTile_95951Objects2= [];
gdjs.GameplayCode.GDTile_95951Objects3= [];
gdjs.GameplayCode.GDtile_95952Objects1= [];
gdjs.GameplayCode.GDtile_95952Objects2= [];
gdjs.GameplayCode.GDtile_95952Objects3= [];
gdjs.GameplayCode.GDSkeletObjects1= [];
gdjs.GameplayCode.GDSkeletObjects2= [];
gdjs.GameplayCode.GDSkeletObjects3= [];
gdjs.GameplayCode.GDNewTiledSpriteObjects1= [];
gdjs.GameplayCode.GDNewTiledSpriteObjects2= [];
gdjs.GameplayCode.GDNewTiledSpriteObjects3= [];
gdjs.GameplayCode.GDright_9595arrowObjects1= [];
gdjs.GameplayCode.GDright_9595arrowObjects2= [];
gdjs.GameplayCode.GDright_9595arrowObjects3= [];
gdjs.GameplayCode.GDLeft_9595arrowObjects1= [];
gdjs.GameplayCode.GDLeft_9595arrowObjects2= [];
gdjs.GameplayCode.GDLeft_9595arrowObjects3= [];
gdjs.GameplayCode.GDCoinObjects1= [];
gdjs.GameplayCode.GDCoinObjects2= [];
gdjs.GameplayCode.GDCoinObjects3= [];
gdjs.GameplayCode.GDbackgroundObjects1= [];
gdjs.GameplayCode.GDbackgroundObjects2= [];
gdjs.GameplayCode.GDbackgroundObjects3= [];
gdjs.GameplayCode.GDCoin2Objects1= [];
gdjs.GameplayCode.GDCoin2Objects2= [];
gdjs.GameplayCode.GDCoin2Objects3= [];
gdjs.GameplayCode.GDcoin_9595counterObjects1= [];
gdjs.GameplayCode.GDcoin_9595counterObjects2= [];
gdjs.GameplayCode.GDcoin_9595counterObjects3= [];
gdjs.GameplayCode.GDtimerObjects1= [];
gdjs.GameplayCode.GDtimerObjects2= [];
gdjs.GameplayCode.GDtimerObjects3= [];
gdjs.GameplayCode.GDtimer_9595iconObjects1= [];
gdjs.GameplayCode.GDtimer_9595iconObjects2= [];
gdjs.GameplayCode.GDtimer_9595iconObjects3= [];
gdjs.GameplayCode.GDtimer_9595icon2Objects1= [];
gdjs.GameplayCode.GDtimer_9595icon2Objects2= [];
gdjs.GameplayCode.GDtimer_9595icon2Objects3= [];
gdjs.GameplayCode.GDplayObjects1= [];
gdjs.GameplayCode.GDplayObjects2= [];
gdjs.GameplayCode.GDplayObjects3= [];
gdjs.GameplayCode.GDbunObjects1= [];
gdjs.GameplayCode.GDbunObjects2= [];
gdjs.GameplayCode.GDbunObjects3= [];
gdjs.GameplayCode.GDHollyObjects1= [];
gdjs.GameplayCode.GDHollyObjects2= [];
gdjs.GameplayCode.GDHollyObjects3= [];
gdjs.GameplayCode.GDHolly2Objects1= [];
gdjs.GameplayCode.GDHolly2Objects2= [];
gdjs.GameplayCode.GDHolly2Objects3= [];


gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.GameplayCode.GDCoinObjects1});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDHollyObjects1Objects = Hashtable.newFrom({"Holly": gdjs.GameplayCode.GDHollyObjects1});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.GameplayCode.GDCoinObjects1});
gdjs.GameplayCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12017708);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}}

}


};gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.GameplayCode.GDCoinObjects1});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDCoin2Objects1Objects = Hashtable.newFrom({"Coin2": gdjs.GameplayCode.GDCoin2Objects1});
gdjs.GameplayCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.GameplayCode.GDCoinObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameplayCode.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDCoinObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameplayCode.GDCoinObjects1[k] = gdjs.GameplayCode.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDCoinObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDright_95959595arrowObjects1Objects = Hashtable.newFrom({"right_arrow": gdjs.GameplayCode.GDright_9595arrowObjects1});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDLeft_95959595arrowObjects1Objects = Hashtable.newFrom({"Left_arrow": gdjs.GameplayCode.GDLeft_9595arrowObjects1});
gdjs.GameplayCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11122588);
}
if (isConditionTrue_0) {
{gdjs.deviceVibration.startVibration(50);
}}

}


};gdjs.GameplayCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Left_arrow"), gdjs.GameplayCode.GDLeft_9595arrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDLeft_95959595arrowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDHollyObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHollyObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHollyObjects1[i].getBehavior("Animation").setAnimationName("Running");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHollyObjects1[i].getBehavior("Flippable").flipX(true);
}
}
{ //Subevents
gdjs.GameplayCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameplayCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12195036);
}
if (isConditionTrue_0) {
{gdjs.deviceVibration.startVibration(50);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameplayCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameplayCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("right_arrow"), gdjs.GameplayCode.GDright_9595arrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDright_95959595arrowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.GameplayCode.GDHollyObjects1);
{for(var i = 0, len = gdjs.GameplayCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHollyObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHollyObjects1[i].getBehavior("Animation").setAnimationName("Running");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHollyObjects1[i].getBehavior("Flippable").flipX(false);
}
}
{ //Subevents
gdjs.GameplayCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDLeft_95959595arrowObjects1Objects = Hashtable.newFrom({"Left_arrow": gdjs.GameplayCode.GDLeft_9595arrowObjects1});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDright_95959595arrowObjects1Objects = Hashtable.newFrom({"right_arrow": gdjs.GameplayCode.GDright_9595arrowObjects1});
gdjs.GameplayCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12329060);
}
if (isConditionTrue_0) {
{gdjs.deviceVibration.startVibration(50);
}}

}


};gdjs.GameplayCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("right_arrow"), gdjs.GameplayCode.GDright_9595arrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDright_95959595arrowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDHollyObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHollyObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHollyObjects1[i].getBehavior("Animation").setAnimationName("Running");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHollyObjects1[i].getBehavior("Flippable").flipX(false);
}
}
{ //Subevents
gdjs.GameplayCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.GameplayCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11201156);
}
if (isConditionTrue_0) {
{gdjs.deviceVibration.startVibration(50);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameplayCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.GameplayCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Left_arrow"), gdjs.GameplayCode.GDLeft_9595arrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDLeft_95959595arrowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.GameplayCode.GDHollyObjects1);
{for(var i = 0, len = gdjs.GameplayCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHollyObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHollyObjects1[i].getBehavior("Animation").setAnimationName("Running");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHollyObjects1[i].getBehavior("Flippable").flipX(true);
}
}
{ //Subevents
gdjs.GameplayCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.GameplayCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "bg_music.mp3", false, 50, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameplayCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.GameplayCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("coin_counter"), gdjs.GameplayCode.GDcoin_9595counterObjects1);
gdjs.copyArray(runtimeScene.getObjects("tile_2"), gdjs.GameplayCode.GDtile_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.GameplayCode.GDtimerObjects1);
{for(var i = 0, len = gdjs.GameplayCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDNewTiledSpriteObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.GameplayCode.GDtile_95952Objects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDtile_95952Objects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.GameplayCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDCoinObjects1[i].getBehavior("Resizable").setSize(50, 50);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDCoinObjects1Objects, gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), -(1000), "");
}{for(var i = 0, len = gdjs.GameplayCode.GDcoin_9595counterObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDcoin_9595counterObjects1[i].getBehavior("Text").setText(": " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.GameplayCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDtimerObjects1[i].getBehavior("Text").setText(": " + gdjs.evtTools.common.toString(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "timer") - 60))) + " sec");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDCoinObjects1[i].rotate(gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)) + gdjs.randomInRange(0, 5), runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 60;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Score", false);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fa1cf690-a09d-4a84-9165-b8df7614e703", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameplayCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.GameplayCode.GDHollyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDHollyObjects1Objects, gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Coin2"), gdjs.GameplayCode.GDCoin2Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.GameplayCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDCoinObjects1[i].getBehavior("Tween").addObjectOpacityTween2("opacity", 0, "linear", 0.5, false);
}
}{for(var i = 0, len = gdjs.GameplayCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDCoinObjects1[i].getBehavior("Tween").addObjectPositionTween2("recorded", (( gdjs.GameplayCode.GDCoin2Objects1.length === 0 ) ? 0 :gdjs.GameplayCode.GDCoin2Objects1[0].getPointX("")), (( gdjs.GameplayCode.GDCoin2Objects1.length === 0 ) ? 0 :gdjs.GameplayCode.GDCoin2Objects1[0].getPointY("")), "linear", 0.5, false);
}
}{for(var i = 0, len = gdjs.GameplayCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDCoinObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.GameplayCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameplayCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Coin2"), gdjs.GameplayCode.GDCoin2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDCoinObjects1Objects, gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDCoin2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameplayCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameplayCode.GDCoinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameplayCode.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDCoinObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameplayCode.GDCoinObjects1[k] = gdjs.GameplayCode.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDCoinObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.GameplayCode.GDHollyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameplayCode.GDHollyObjects1.length;i<l;++i) {
    if ( !(gdjs.GameplayCode.GDHollyObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.GameplayCode.GDHollyObjects1[k] = gdjs.GameplayCode.GDHollyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDHollyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDHollyObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHollyObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameplayCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameplayCode.eventsList9(runtimeScene);} //End of subevents
}

}


};

gdjs.GameplayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameplayCode.GDTile_95951Objects1.length = 0;
gdjs.GameplayCode.GDTile_95951Objects2.length = 0;
gdjs.GameplayCode.GDTile_95951Objects3.length = 0;
gdjs.GameplayCode.GDtile_95952Objects1.length = 0;
gdjs.GameplayCode.GDtile_95952Objects2.length = 0;
gdjs.GameplayCode.GDtile_95952Objects3.length = 0;
gdjs.GameplayCode.GDSkeletObjects1.length = 0;
gdjs.GameplayCode.GDSkeletObjects2.length = 0;
gdjs.GameplayCode.GDSkeletObjects3.length = 0;
gdjs.GameplayCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameplayCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameplayCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.GameplayCode.GDright_9595arrowObjects1.length = 0;
gdjs.GameplayCode.GDright_9595arrowObjects2.length = 0;
gdjs.GameplayCode.GDright_9595arrowObjects3.length = 0;
gdjs.GameplayCode.GDLeft_9595arrowObjects1.length = 0;
gdjs.GameplayCode.GDLeft_9595arrowObjects2.length = 0;
gdjs.GameplayCode.GDLeft_9595arrowObjects3.length = 0;
gdjs.GameplayCode.GDCoinObjects1.length = 0;
gdjs.GameplayCode.GDCoinObjects2.length = 0;
gdjs.GameplayCode.GDCoinObjects3.length = 0;
gdjs.GameplayCode.GDbackgroundObjects1.length = 0;
gdjs.GameplayCode.GDbackgroundObjects2.length = 0;
gdjs.GameplayCode.GDbackgroundObjects3.length = 0;
gdjs.GameplayCode.GDCoin2Objects1.length = 0;
gdjs.GameplayCode.GDCoin2Objects2.length = 0;
gdjs.GameplayCode.GDCoin2Objects3.length = 0;
gdjs.GameplayCode.GDcoin_9595counterObjects1.length = 0;
gdjs.GameplayCode.GDcoin_9595counterObjects2.length = 0;
gdjs.GameplayCode.GDcoin_9595counterObjects3.length = 0;
gdjs.GameplayCode.GDtimerObjects1.length = 0;
gdjs.GameplayCode.GDtimerObjects2.length = 0;
gdjs.GameplayCode.GDtimerObjects3.length = 0;
gdjs.GameplayCode.GDtimer_9595iconObjects1.length = 0;
gdjs.GameplayCode.GDtimer_9595iconObjects2.length = 0;
gdjs.GameplayCode.GDtimer_9595iconObjects3.length = 0;
gdjs.GameplayCode.GDtimer_9595icon2Objects1.length = 0;
gdjs.GameplayCode.GDtimer_9595icon2Objects2.length = 0;
gdjs.GameplayCode.GDtimer_9595icon2Objects3.length = 0;
gdjs.GameplayCode.GDplayObjects1.length = 0;
gdjs.GameplayCode.GDplayObjects2.length = 0;
gdjs.GameplayCode.GDplayObjects3.length = 0;
gdjs.GameplayCode.GDbunObjects1.length = 0;
gdjs.GameplayCode.GDbunObjects2.length = 0;
gdjs.GameplayCode.GDbunObjects3.length = 0;
gdjs.GameplayCode.GDHollyObjects1.length = 0;
gdjs.GameplayCode.GDHollyObjects2.length = 0;
gdjs.GameplayCode.GDHollyObjects3.length = 0;
gdjs.GameplayCode.GDHolly2Objects1.length = 0;
gdjs.GameplayCode.GDHolly2Objects2.length = 0;
gdjs.GameplayCode.GDHolly2Objects3.length = 0;

gdjs.GameplayCode.eventsList10(runtimeScene);
gdjs.GameplayCode.GDTile_95951Objects1.length = 0;
gdjs.GameplayCode.GDTile_95951Objects2.length = 0;
gdjs.GameplayCode.GDTile_95951Objects3.length = 0;
gdjs.GameplayCode.GDtile_95952Objects1.length = 0;
gdjs.GameplayCode.GDtile_95952Objects2.length = 0;
gdjs.GameplayCode.GDtile_95952Objects3.length = 0;
gdjs.GameplayCode.GDSkeletObjects1.length = 0;
gdjs.GameplayCode.GDSkeletObjects2.length = 0;
gdjs.GameplayCode.GDSkeletObjects3.length = 0;
gdjs.GameplayCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameplayCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameplayCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.GameplayCode.GDright_9595arrowObjects1.length = 0;
gdjs.GameplayCode.GDright_9595arrowObjects2.length = 0;
gdjs.GameplayCode.GDright_9595arrowObjects3.length = 0;
gdjs.GameplayCode.GDLeft_9595arrowObjects1.length = 0;
gdjs.GameplayCode.GDLeft_9595arrowObjects2.length = 0;
gdjs.GameplayCode.GDLeft_9595arrowObjects3.length = 0;
gdjs.GameplayCode.GDCoinObjects1.length = 0;
gdjs.GameplayCode.GDCoinObjects2.length = 0;
gdjs.GameplayCode.GDCoinObjects3.length = 0;
gdjs.GameplayCode.GDbackgroundObjects1.length = 0;
gdjs.GameplayCode.GDbackgroundObjects2.length = 0;
gdjs.GameplayCode.GDbackgroundObjects3.length = 0;
gdjs.GameplayCode.GDCoin2Objects1.length = 0;
gdjs.GameplayCode.GDCoin2Objects2.length = 0;
gdjs.GameplayCode.GDCoin2Objects3.length = 0;
gdjs.GameplayCode.GDcoin_9595counterObjects1.length = 0;
gdjs.GameplayCode.GDcoin_9595counterObjects2.length = 0;
gdjs.GameplayCode.GDcoin_9595counterObjects3.length = 0;
gdjs.GameplayCode.GDtimerObjects1.length = 0;
gdjs.GameplayCode.GDtimerObjects2.length = 0;
gdjs.GameplayCode.GDtimerObjects3.length = 0;
gdjs.GameplayCode.GDtimer_9595iconObjects1.length = 0;
gdjs.GameplayCode.GDtimer_9595iconObjects2.length = 0;
gdjs.GameplayCode.GDtimer_9595iconObjects3.length = 0;
gdjs.GameplayCode.GDtimer_9595icon2Objects1.length = 0;
gdjs.GameplayCode.GDtimer_9595icon2Objects2.length = 0;
gdjs.GameplayCode.GDtimer_9595icon2Objects3.length = 0;
gdjs.GameplayCode.GDplayObjects1.length = 0;
gdjs.GameplayCode.GDplayObjects2.length = 0;
gdjs.GameplayCode.GDplayObjects3.length = 0;
gdjs.GameplayCode.GDbunObjects1.length = 0;
gdjs.GameplayCode.GDbunObjects2.length = 0;
gdjs.GameplayCode.GDbunObjects3.length = 0;
gdjs.GameplayCode.GDHollyObjects1.length = 0;
gdjs.GameplayCode.GDHollyObjects2.length = 0;
gdjs.GameplayCode.GDHollyObjects3.length = 0;
gdjs.GameplayCode.GDHolly2Objects1.length = 0;
gdjs.GameplayCode.GDHolly2Objects2.length = 0;
gdjs.GameplayCode.GDHolly2Objects3.length = 0;


return;

}

gdjs['GameplayCode'] = gdjs.GameplayCode;
