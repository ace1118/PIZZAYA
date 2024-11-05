gdjs.LeaderBoardCode = {};
gdjs.LeaderBoardCode.localVariables = [];
gdjs.LeaderBoardCode.GDbunObjects1= [];
gdjs.LeaderBoardCode.GDbunObjects2= [];
gdjs.LeaderBoardCode.GDHollyObjects1= [];
gdjs.LeaderBoardCode.GDHollyObjects2= [];
gdjs.LeaderBoardCode.GDHolly2Objects1= [];
gdjs.LeaderBoardCode.GDHolly2Objects2= [];


gdjs.LeaderBoardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "fa1cf690-a09d-4a84-9165-b8df7614e703", false);
}}

}


};

gdjs.LeaderBoardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderBoardCode.GDbunObjects1.length = 0;
gdjs.LeaderBoardCode.GDbunObjects2.length = 0;
gdjs.LeaderBoardCode.GDHollyObjects1.length = 0;
gdjs.LeaderBoardCode.GDHollyObjects2.length = 0;
gdjs.LeaderBoardCode.GDHolly2Objects1.length = 0;
gdjs.LeaderBoardCode.GDHolly2Objects2.length = 0;

gdjs.LeaderBoardCode.eventsList0(runtimeScene);
gdjs.LeaderBoardCode.GDbunObjects1.length = 0;
gdjs.LeaderBoardCode.GDbunObjects2.length = 0;
gdjs.LeaderBoardCode.GDHollyObjects1.length = 0;
gdjs.LeaderBoardCode.GDHollyObjects2.length = 0;
gdjs.LeaderBoardCode.GDHolly2Objects1.length = 0;
gdjs.LeaderBoardCode.GDHolly2Objects2.length = 0;


return;

}

gdjs['LeaderBoardCode'] = gdjs.LeaderBoardCode;
