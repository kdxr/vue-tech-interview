import { defineStore } from "pinia";

interface Result {
  point: number;
  know: string;
}

export const useResultStore = defineStore("result", {
  state: (): Result => ({
    point: 0,
    know: "",
  }),
  getters: {},
  actions: {
    incrementPoint(point: number) {
      this.point += point;
    },
    setPoint(point: number) {
      this.point = point;
    },
    setKnow(data: string) {
      this.know = data;
    },
  },
});
