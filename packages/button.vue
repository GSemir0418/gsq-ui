<template>
  <button
    class="gsq-button"
    :class="[
      `gsq-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-if="icon" :class="`gsq-icon-${icon}`"></i>
    <!-- 如果没有传入文本插槽，则不显示span内容 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "gsqButton",
  methods: {
    handleClick(e) {
      // 定义一个点击事件，这个点击事件的作用是调用父组件中的点击事件，并且回调
      this.$emit("click", e);
    },
  },
  //需要对props进行校验，只接收string类型的type值
  props: {
    type: {
      type: String,
      //如果没指定type属性，那么使用default
      default: "default",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    console.log(this.type); //default primary success info danger warning
  },
};
</script>

<style lang="scss" scoped>
//默认父样式
.gsq-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 10px;
  /* 盒子阴影 */
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2),
    -3px -3px 5px rgba(255, 255, 255, 1);
  /* 过渡时间 ease-out是指先快后慢 */
  transition: all 0.1s ease-out;
  &:hover,
  &:hover {
    color: #40ff96;
    border-color: #fdfffe;
    background-color: #ecfff8;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(255, 255, 255, 0.8),
      inset 3px 3px 5px rgba(0, 0, 0, 0.1),
      inset -3px -3px 5px rgba(255, 255, 255, 1);
  }
}
//type属性样式
.gsq-button-success {
  color: #fff;
  background-color: #409eff;
  border-color: #d8e7f7;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.gsq-button-primary {
  color: #fff;
  background-color: #67c23a;
  border-color: #c2d1bb;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.gsq-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #c1c2c5;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.gsq-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #d4cec4;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.gsq-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #fae4e4;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}
// 朴素按钮样式
.gsq-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #e5fce5;
    color: #40ff4a;
  }
}
.gsq-button-success.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #e9f2fc;
    color: #fff;
  }
}
.gsq-button-primary.is-plain {
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #eefae8;
    color: #fff;
  }
}
.gsq-button-info.is-plain {
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #e9eef8;
    color: #fff;
  }
}
.gsq-button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #f8f2e8;
    color: #fff;
  }
}
.gsq-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #faefef;
    color: #fff;
  }
}
//round样式
.gsq-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
//circle样式
.gsq-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
//icon配套样式
.gsq-button [class*="gsq-icon-"] + span {
  margin-left: 5px;
}
//disable样式
.gsq-button.is-disabled {
  cursor: no-drop;
}
</style>