export interface Answers {
  answer: string;
  point?: number;
  inputAnswer?: boolean;
}

interface Quiz {
  question: string;
  answers: Answers[];
  extraQuestion?: boolean;
}

const quiz: Quiz[] = [
  {
    question: "ถ้าวันนี้เป็นวันหยุดคุณจะ...",
    answers: [
      {
        answer: "นอนเล่น พักผ่อน",
        point: 10,
      },
      {
        answer: "ดูหนัง ดูซีรี่ส์ เล่นเกม",
        point: 20,
      },
      {
        answer: "เรียนรู้อะไรใหม่ๆ",
        point: 30,
      },
    ],
  },
  {
    question: "คุณต้องการพัฒนาภาษาอังกฤษเพื่ออะไร?",
    answers: [
      {
        answer: "การทำงาน",
        point: 30,
      },
      {
        answer: "เที่ยวต่างประเทศ",
        point: 10,
      },
      {
        answer: "ใช้ในชีวิตประจำวัน",
        point: 20,
      },
    ],
  },
  {
    question: "สไตล์การเรียนภาษาอังกฤษของคุณ เป็นแบบไหน?",
    answers: [
      {
        answer: "เรียนคอร์สออนไลน์ / โรงเรียนสอนภาษา",
        point: 30,
      },
      {
        answer: "เรียนด้วยตนเอง เช่น อ่านหนังสือ ดูหนัง ฟังเพลง",
        point: 20,
      },
      {
        answer: "คุยกับเพื่อนต่างชาติ / ไปเที่ยวต่างประเทศ",
        point: 10,
      },
    ],
  },
  {
    question: "คุณใช้ภาษาอังกฤษบ่อยแค่ไหน?",
    answers: [
      {
        answer: "เป็นประจำทุกวัน",
        point: 30,
      },
      {
        answer: "เป็นบางครั้ง",
        point: 10,
      },
      {
        answer: "นาน ๆ ที / ไม่ได้ใช้เลย",
        point: 20,
      },
    ],
  },
  {
    question: "คุณอยากพัฒนาสกิลภาษาอังกฤษ สกิลไหนมากที่สุด?",
    answers: [
      {
        answer: "การฟัง",
        point: 20,
      },
      {
        answer: "การพูด",
        point: 10,
      },
      {
        answer: "การเขียน",
        point: 30,
      },
    ],
  },
  {
    question: "อยากเรียนภาษาอังกฤษ แต่...",
    answers: [
      {
        answer: "ไม่มีเวลา",
        point: 20,
      },
      {
        answer: "เนื้อหาไม่น่าสนใจ / สอนไม่สนุก",
        point: 10,
      },
      {
        answer: "ไม่มั่นใจ",
        point: 30,
      },
    ],
  },
  {
    question: "คุณรู้จัก Globish ผ่านช่องทางใด (เลือกได้มากกว่า 1 ข้อ)",
    answers: [
      {
        answer: "Instagram",
      },
      {
        answer: "Facebook",
      },
      {
        answer: "อื่นๆ (โปรดระบุ)",
        inputAnswer: true,
      },
    ],
    extraQuestion: true,
  },
];

export default quiz;
