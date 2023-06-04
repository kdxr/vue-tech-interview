<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WelcomeBox",
  methods: {
    startQuiz(e: MouseEvent) {
      e.preventDefault();
      this.$emit("start");
    },
  },
});
</script>

<template>
  <div
    class="welcome w-full h-full pb-20 flex items-end justify-center bg-center bg-no-repeat bg-cover md:bg-contain"
  >
    <button
      class="rounded-[20px] text-xl font-medium px-32 py-1 bg-[#F7C116] text-black border border-solid border-black transition-transform duration-75 hover:scale-105"
      @click="startQuiz"
    >
      เริ่มเลย
    </button>
  </div>
</template>

<style lang="scss" scoped>
.welcome {
  background-image: url(../assets/bg.png);
}
</style>
