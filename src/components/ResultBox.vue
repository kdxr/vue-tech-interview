<script lang="ts">
import { defineComponent } from "vue";
import { useResultStore } from "@/stores/result";

export default defineComponent({
  name: "ResultBox",
  data: () => ({
    result: useResultStore(),
    criteria: "",
  }),
  mounted() {
    const point = this.result.point;

    if (point >= 60 && point <= 90) {
      this.criteria = "hobbyist";
    } else if (point >= 91 && point <= 130) {
      this.criteria = "enthusiastic";
    } else if (point >= 131) {
      this.criteria = "gradual_learner";
    }
  },
});
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-11/12 border border-black rounded-2xl bg-white">
      <h1
        class="text-center pt-10 pb-4 text-2xl text-[#333333] font-bold xs:text-4xl"
      >
        ผลลัพธ์ของคุณคือ
      </h1>
      <img
        :src="'./images/' + criteria + `.png`"
        class="object-cover object-center mx-auto drop-shadow-md"
      />
      <div
        class="mt-8 pb-24 text-[#333333] font-bold text-1xl xs:text-2xl text-center"
      >
        <p>คุณรู้จัก Globish ผ่าน</p>
        <p>{{ result.know }}</p>
      </div>
    </div>
  </div>
</template>
