<template>
  <div class="spiner-wrapper">
    <div class="spiner">
      <div class="item-spiner item-1"></div>
      <div class="item-spiner item-2"></div>
      <div class="item-spiner item-3"></div>
      <div class="item-spiner item-4"></div>
    </div>
  </div>
</template>

<style>
.spiner-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
}

.spiner {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 30%;
  left: 50%;
  margin: auto;
  transform: translateX(-50%);
}

.item-spiner {
  width: 10px;
  height: 10px;
  position: absolute;
}

.item-1 {
  background-color: #fa5667;
  top: 0;
  left: 0;
  z-index: 1;
  animation: item-1_move 1.8s cubic-bezier(0.6, 0.01, 0.4, 1) infinite;
}

.item-2 {
  background-color: #7a45e5;
  top: 0;
  right: 0;
  animation: item-2_move 1.8s cubic-bezier(0.6, 0.01, 0.4, 1) infinite;
}

.item-3 {
  background-color: #1b91f7;
  bottom: 0;
  right: 0;
  z-index: 1;
  animation: item-3_move 1.8s cubic-bezier(0.6, 0.01, 0.4, 1) infinite;
}

.item-4 {
  background-color: #fac24c;
  bottom: 0;
  left: 0;
  animation: item-4_move 1.8s cubic-bezier(0.6, 0.01, 0.4, 1) infinite;
}

@keyframes item-1_move {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, 100px);
  }
  50% {
    transform: translate(100px, 100px);
  }
  75% {
    transform: translate(100px, 0);
  }
}

@keyframes item-2_move {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-100px, 0);
  }
  50% {
    transform: translate(-100px, 100px);
  }
  75% {
    transform: translate(0, 100px);
  }
}

@keyframes item-3_move {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, -100px);
  }
  50% {
    transform: translate(-100px, -100px);
  }
  75% {
    transform: translate(-100px, 0);
  }
}

@keyframes item-4_move {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(100px, 0);
  }
  50% {
    transform: translate(100px, -100px);
  }
  75% {
    transform: translate(0, -100px);
  }
}
</style>

<script>
export default {};
</script>
