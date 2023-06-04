<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import AnswerChoice from "./AnswerChoice.vue";
import Quiz, { Answers } from "@/quiz";
import { useResultStore } from "@/stores/result";

export default defineComponent({
  name: "QuizBox",
  components: {
    AnswerChoice,
  },
  // props: {
  // 	// quizNo: String,
  // 	// question: String,
  // 	// answers: Array as PropType<Answers[]>,
  // },
  methods: {
    selectAnswer(value: number) {
      this.selectAnswerIndex = value;
    },
    selectExtraAnswer(value: number) {
      if (!this.quiz[this.answers.length].extraQuestion) return;

      const answer = this.quiz[this.answers.length].answers[value].answer;

      if (this.extraAnswers.includes(answer)) {
        this.extraAnswers = this.extraAnswers.filter(
          (_answer) => _answer !== answer
        );
      } else {
        this.extraAnswers.push(answer);
      }

      // console.log(this.extraAnswers);
    },
    setInput(value: string) {
      this.extraAnswersInput = value;
    },
    finishQuiz() {
      if (this.extraAnswersInput !== "")
        this.extraAnswers.push(this.extraAnswersInput);

      if (this.extraAnswers.length === 0) return;

      this.result.setKnow(this.extraAnswers.join(", "));

      for (let index = 0; index < this.answers.length; index++) {
        const answer = this.answers[index];

        this.result.incrementPoint(this.quiz[index].answers[answer].point!);
      }

      this.$emit("end");
    },
    nextQuestion() {
      if (
        (this.selectAnswerIndex === -1 || this.selectAnswerIndex === null) &&
        !this.quiz[this.answers.length].extraQuestion
      )
        return;

      if (this.answers.length + 1 === this.quiz.length) {
        this.finishQuiz();
        return;
      }

      this.answers.push(this.selectAnswerIndex);
      this.resetAnswer();

      // console.log("next", this.answers);
    },
    backQuestion() {
      if (this.answers.length === 0) return;

      this.answers.pop();
      this.resetAnswer();

      // console.log("back", this.answers);
    },
    resetAnswer() {
      this.selectAnswerIndex = -1;

      if (this.quiz[this.answers.length].extraQuestion) {
        this.extraAnswersInput = "";
        this.extraAnswers = [];
      }
    },
  },
  data: () => ({
    result: useResultStore(),
    quiz: Quiz,
    answers: [] as number[],
    selectAnswerIndex: -1,
    extraAnswers: [] as string[],
    extraAnswersInput: "",
  }),
});
</script>

<template>
  <div class="h-full flex items-center justify-center flex-col gap-10">
    <div class="w-full flex justify-center gap-[2px] px-4">
      <div
        v-for="(n, index) in quiz.length"
        class="w-11 h-2 rounded-[4px]"
        :key="index"
        :class="{
          'bg-[#333333]': answers.length >= index,
          'bg-white': !(answers.length >= index),
        }"
      ></div>
    </div>
    <div class="w-4/5 bg-white rounded-3xl border border-black px-5 pt-5 pb-16">
      <h1 class="font-gloria text-3xl font-normal text-quiz">
        Q{{ answers.length + 1 }}
      </h1>
      <h2 class="mt-9 text-base font-bold">
        {{ quiz[answers.length].question }}
      </h2>
      <div class="mt-11 w-full">
        <AnswerChoice
          v-for="(option, index) in quiz[answers.length].answers"
          :key="index"
          :questionIndex="answers.length"
          :answerIndex="index"
          :text="option.answer"
          :selected="selectAnswerIndex === index"
          :extraQuestion="quiz[answers.length].extraQuestion"
          :inputAnswer="option.inputAnswer"
          @selectAnswer="selectAnswer"
          @selectExtraAnswer="selectExtraAnswer"
          @setInput="setInput"
        />
      </div>
    </div>
    <div class="flex justify-center gap-5">
      <button
        @click="backQuestion"
        class="px-7 py-1 border border-black rounded-3xl bg-white text-xl font-medium"
      >
        กลับ
      </button>
      <button
        @click="nextQuestion"
        class="px-16 py-1 border border-black rounded-3xl bg-[#F7C116] text-xl font-medium"
      >
        {{ answers.length + 1 === quiz.length ? "ดูผลลัพธ์" : "ต่อไป" }}
      </button>
    </div>
  </div>
</template>
