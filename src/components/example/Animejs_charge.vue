<template>
  <div class="overall">
    <div id="box">
      <div class="box">
        <div class="text">
          99
          <span>%</span>
        </div>
        <div class="top_ball one"></div>
        <div class="top_ball two"></div>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>

    <svg style="width: 0; height: 0;">
      <defs>
        <filter id="shadowed-goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
          <feColorMatrix
            in="shadow"
            mode="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
            result="shadow"
          />
          <feOffset in="shadow" dx="1" dy="1" result="shadow" />
          <feBlend in2="shadow" in="goo" result="goo" />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
        </filter>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
#box {
  width: 300px;
  height: 600px;
  position: relative;
  /* 背景色 */
  /* background: #f7f6f6; */
  overflow: hidden;
  padding: 50px 0;
  box-sizing: border-box;
  --c: rgb(47, 224, 100);
}

.box {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  /* 此处尽量不要设置背景色,可以选择在父标签上设置背景色，否则没有黏黏的效果 */
  filter: url("#goo");
}

/* 电量文字 */
.text {
  font-weight: 200;
  font-size: 30px;
  margin-top: 100px;
}

/* 电量文字 */
.text span {
  font-size: 15px;
}

/* 顶部的两个旋转小球 */
.top_ball {
  width: 200px;
  height: 200px;
  border-radius: 35%;
  opacity: 0.5;
  position: absolute;
  top: 20px;
  z-index: 10;
  /* 从中心向外剪切圆，相当于掏空 */
  -webkit-mask: radial-gradient(transparent 95px, white 0px);
}

/* 顶部的两个旋转小球 */
.top_ball.one {
  background: var(--c);
  animation: ballZhuan 5s linear infinite;
}

/* 顶部的两个旋转小球 */
.top_ball.two {
  background: var(--c);
  animation: ballZhuan 8s linear infinite;
}

@keyframes ballZhuan {
  100% {
    transform: rotate(360deg);
  }
}

/* 底部的小球 */
.dot {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--c);
  position: absolute;
  z-index: -1;
  bottom: -50px;
}

.dot:nth-of-type(1) {
  width: 40px;
  height: 40px;
  right: 100px;
  animation: dotMove 5s linear infinite;
}

.dot:nth-of-type(2) {
  width: 50px;
  height: 50px;
  left: 100px;
  animation: dotMove 6s linear infinite;
}

.dot:nth-of-type(3) {
  animation: dotMove 3s linear infinite;
}

.dot:nth-of-type(4) {
  width: 15px;
  height: 15px;
  left: 100px;
  animation: dotMove 2s linear infinite;
}

.dot:nth-of-type(5) {
  width: 30px;
  height: 30px;
  animation: dotMove 4s linear infinite;
}

@keyframes dotMove {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }

  98% {
    opacity: 1;
  }

  100% {
    transform: translateY(-410px);
    opacity: 0;
  }
}
</style>