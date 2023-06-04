<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnswerChoice",
  methods: {
    selectAnswer(e: Event) {
      // console.log(
      // 	(e.target as HTMLInputElement).value,
      // 	this.value,
      // 	typeof this.value
      // );

      this.$emit("selectAnswer", this.value);
    },
    selectExtraAnswer(e: Event) {
      if (!this.extraQuestion) return;

      this.checked = !this.checked;

      if (this.inputAnswer) return;

      this.$emit("selectExtraAnswer", (e.target as HTMLInputElement).value);
    },
    setInput() {
      this.$emit("setInput", this.input);
    },
    reset() {
      this.value = null;
      this.checked = false;
      this.input = "";
    },
  },
  props: {
    questionIndex: Number,
    answerIndex: Number,
    text: String,
    selected: Boolean,
    extraQuestion: Boolean,
    inputAnswer: Boolean,
  },
  data() {
    return {
      value: null,
      checked: false,
      input: "",
    };
  },
  // created() {
  // 	console.log("create");
  // },
  // updated() {
  // 	console.log("updated");
  // },
  // mounted() {
  // 	console.log("mounted");
  // },
  watch: {
    questionIndex() {
      this.reset();
    },
    answerIndex() {
      this.reset();
    },
  },
});
</script>

<template>
  <label
    :for="'choice-' + answerIndex"
    class="cursor-pointer block mt-4 border border-black rounded-3xl py-5 px-6 text-base font-medium text-answer"
    :class="{
      'bg-[#F57C4A]': selected || checked,
    }"
  >
    {{ text }}
    <input
      type="radio"
      :name="'answer_' + questionIndex"
      class="hidden"
      :id="'choice-' + answerIndex"
      :value="answerIndex"
      v-model="value"
      @change="selectAnswer($event)"
      v-if="!extraQuestion"
    />

    <input
      type="checkbox"
      :name="'answer_' + questionIndex"
      class="hidden"
      :id="'choice-' + answerIndex"
      :value="answerIndex"
      v-model="value"
      @change="selectExtraAnswer($event)"
      v-else
    />
  </label>

  <input
    type="text"
    class="w-full border-b border-black mx-auto mt-6 text-base font-medium text-[#BDBDBD] outline-none"
    v-if="inputAnswer && checked && extraQuestion"
    v-model="input"
    @input="setInput"
  />
</template>
