var TreasureDemo = cc.Class({
    name : "灵宝模板",
    properties : {
        name : cc.String,
        treasureId : cc.Integer,
        type : cc.Integer,//门派
        minPower : cc.Integer,
        maxPower : cc.Integer,
        minDefend: cc.Integer,
        maxDefend: cc.Integer,
        minHP : cc.Integer,
        maxHP : cc.Integer,
        quality : cc.Integer,
        minCosttTime : cc.Integer, //修炼获得时所需时间
        maxCostTime : cc.Integer, //跨界修炼时获取所需时间

    }
})

cc.Class({
    extends: cc.Component,

    properties: {
      treasures :{
          default : [],
          type : [TreasureDemo]
      }
    },

    getMonsterNum(){
        return this.treasures.length;
    },

    start () {

    },

    // update (dt) {},
});
