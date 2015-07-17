/**
 * Created by sony on 2015/7/17.
 */
var PlayLayer = cc.Layer.extend({
    bg: null,
    ball: null,
    frame: 0,
    deltaX: 1,
    size: null,

    init: function() {
        this._super();
        this.size = cc.winSize;

        //bg
        this.bg = new cc.DrawNode();
        this.addChild(this.bg, 0);

        //ball
        this.ball = new cc.Sprite(res.ball_png);
        this.ball.attr({
            x: 20,
            y: this.size.height / 2,
            anchorX: 0.5,
            anchorY: 0.5,
            scale: 40 / this.ball.width
        });
        this.addChild(this.ball, 1);

        this.scheduleUpdate();
        return true;
    },
    update: function(delta) {
        this.ball.x += this.deltaX;
        if(this.ball.x + 20 > this.size.width || this.ball.x <= 20) {
            this.deltaX *= -1;
        }
        this.ball.y = Math.sin(this.frame / 20)*50 + this.size.height / 2;

        this.bg.drawDot(new cc.Point(this.ball.x, this.ball.y), 2, cc.color(255, 0, 0));
        this.frame ++;
    }
});

var PlayScene = cc.Scene.extend({
   onEnter: function() {
       this._super();

       var layer = new PlayLayer();
       this.addChild(layer);
       layer.init();
   }
});