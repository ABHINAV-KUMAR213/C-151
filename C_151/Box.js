AFRAME.registerComponent("move-box", {
    schema: {
      moveX: { type: "number", default: 1 },
      moveY: { type: "number", default: 1 },
    },
  
    tick: function () {
  
      this.data.moveX = this.data.moveX + 0.1;
      this.data.moveY = this.data.moveY + 0.1;
  
      var pos = this.el.getAttribute("position");
  
      pos.x = this.data.moveX;
      pos.y = this.data.moveY;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
  });
  AFRAME.registerComponent("rotate-box", {
    schema: {
      moveX: { type: "number", default: 1 }
    },
    tick: function () {
        this.data.moveX = this.data.moveX + 5;
        var rotate = this.el.getAttribute("rotation");
        rotate.x = this.data.moveX;
        rotate.y = this.data.moveY;
        this.el.setAttribute("rotation", {x: rotate.x, y: rotate.y, z: rotate.z});
    }
});