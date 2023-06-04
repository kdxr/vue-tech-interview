<script lang="ts">
import { defineComponent } from "vue";
import WelcomeBox from "@/components/WelcomeBox.vue";
import QuizBox from "@/components/QuizBox.vue";
import ResultBox from "@/components/ResultBox.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    WelcomeBox,
    QuizBox,
    ResultBox,
  },
  methods: {
    handlerStart() {
      this.startQuiz = true;
    },
    handlerEnd() {
      this.endQuiz = true;
    },
  },
  data: () => ({
    startQuiz: false,
    endQuiz: false,
  }),
});
</script>

<template>
  <div class="flex w-full h-screen justify-center items-center">
    <div class="w-full max-w-[720px] h-full">
      <WelcomeBox v-if="!startQuiz" @start="handlerStart" />
      <QuizBox v-else-if="startQuiz && !endQuiz" @end="handlerEnd" />
      <ResultBox v-else-if="endQuiz" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.welcome {
  background-image: url(../assets/bg.png);
}
</style>
