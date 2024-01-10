import { createContext } from "react";

const initState = [
  {
    id: "*",
    subject: [0, 0, 0, 0, 0],
    major: [0, 0],
    advanced: [0, 0],
    doubleIn: [0, 0],
    doubleOut: [0, 0],
    minor: [0, 0],
    sum: [0],
  },
  {
    id: "y1_u1_g1",
    subject: [13, 0, 12, 6, 26],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 36],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u1_g2",
    subject: [13, 0, 12, 6, 31],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 0],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u1_g3",
    subject: [13, 0, 12, 6, 31],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 0],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u1_g4",
    subject: [19, 0, 12, 6, 37],
    major: [6, 45],
    advanced: [6, 66],
    doubleIn: [0, 36],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u2_g1",
    subject: [13, 0, 15, 0, 28],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 36],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u2_g2",
    subject: [13, 0, 15, 0, 28],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 0],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u2_g3",
    subject: [13, 0, 15, 0, 28],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 0],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u2_g4",
    subject: [13, 0, 15, 0, 28],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 0],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  // {
  //   id: "y1_u2_g5",
  //   subject: [13, 0, 15, 0, 28],
  //   major: [6, 60],
  //   advanced: [6, 60],
  //   doubleIn: [0, 0],
  //   doubleOut: [6, 36],
  //   minor: [3, 21],
  //   sum: [130],
  // },
  {
    id: "y1_u3_g1",
    subject: [13, 0, 15, 0, 28],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 0],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u3_g2",
    subject: [13, 0, 15, 0, 28],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 0],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u3_g3",
    subject: [13, 0, 15, 0, 28],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 36],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u3_g4",
    subject: [13, 0, 15, 0, 28],
    major: [6, 45],
    advanced: [6, 66],
    doubleIn: [0, 0],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u4_g1",
    subject: [13, 0, 12, 0, 25],
    major: [6, 45],
    advanced: [6, 66],
    doubleIn: [0, 36],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u4_g2",
    subject: [13, 0, 12, 0, 25],
    major: [6, 45],
    advanced: [6, 66],
    doubleIn: [0, 0],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u4_g3",
    subject: [13, 0, 12, 0, 25],
    major: [6, 45],
    advanced: [6, 66],
    doubleIn: [0, 36],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u4_g4",
    subject: [13, 0, 12, 0, 25],
    major: [6, 45],
    advanced: [6, 66],
    doubleIn: [0, 36],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u5_g1",
    subject: [13, 0, 12, 0, 25],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 0],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u5_g2",
    subject: [13, 0, 12, 0, 25],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 0],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u5_g3",
    subject: [13, 0, 12, 0, 25],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 0],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  {
    id: "y1_u5_g4",
    subject: [13, 0, 12, 0, 25],
    major: [6, 45],
    advanced: [6, 60],
    doubleIn: [0, 0],
    doubleOut: [6, 36],
    minor: [3, 21],
    sum: [130],
  },
  // {
  //   id: "y1_u5_g5",
  //   subject: [0, 0, 0, 0, 0],
  //   major: [0, 0],
  //   advanced: [0, 0],
  //   doubleIn: [0, 0],
  //   doubleOut: [0, 0],
  //   minor: [0, 0],
  //   sum: [0],
  // },
  {
    id: "y2_u1_g1",
    subject: [14, 0, 15, 0, 28],
    major: [0, 51],
    advanced: [0, 66],
    doubleIn: [0, 36],
    doubleOut: [0, 36],
    minor: [0, 21],
    sum: [130],
  },
  {
    id: "y2_u1_g2",
    subject: [14, 0, 15, 0, 29],
    major: [0, 51],
    advanced: [0, 66],
    doubleIn: [0, 36],
    doubleOut: [0, 36],
    minor: [0, 21],
    sum: [130],
  },
  {
    id: "y2_u1_g3",
    subject: [14, 0, 15, 0, 29],
    major: [0, 57],
    advanced: [0, 72],
    doubleIn: [0, 36],
    doubleOut: [0, 36],
    minor: [0, 21],
    sum: [130],
  },
  {
    id: "y2_u2_g1",
    subject: [14, 0, 15, 0, 29],
    major: [0, 51],
    advanced: [0, 66],
    doubleIn: [0, 36],
    doubleOut: [0, 36],
    minor: [0, 21],
    sum: [130],
  },
  {
    id: "y2_u2_g2",
    subject: [14, 0, 15, 0, 29],
    major: [0, 51],
    advanced: [0, 66],
    doubleIn: [0, 36],
    doubleOut: [0, 36],
    minor: [0, 21],
    sum: [130],
  },
  {
    id: "y2_u3_g1",
    subject: [14, 0, 15, 0, 29],
    major: [0, 51],
    advanced: [0, 66],
    doubleIn: [0, 36],
    doubleOut: [0, 36],
    minor: [0, 21],
    sum: [130],
  },
  {
    id: "y2_u3_g2",
    subject: [14, 0, 15, 0, 29],
    major: [0, 51],
    advanced: [0, 66],
    doubleIn: [0, 36],
    doubleOut: [0, 36],
    minor: [0, 21],
    sum: [130],
  },
  {
    id: "y2_u4_g1",
    subject: [17, 0, 15, 0, 32],
    major: [0, 57],
    advanced: [0, 72],
    doubleIn: [0, 36],
    doubleOut: [0, 36],
    minor: [0, 21],
    sum: [130],
  },
  {
    id: "y2_u4_g2",
    subject: [17, 0, 15, 0, 32],
    major: [0, 57],
    advanced: [0, 72],
    doubleIn: [0, 36],
    doubleOut: [0, 36],
    minor: [0, 21],
    sum: [130],
  },
  {
    id: "y2_u4_g3",
    subject: [17, 0, 15, 0, 32],
    major: [0, 57],
    advanced: [0, 72],
    doubleIn: [0, 36],
    doubleOut: [0, 36],
    minor: [0, 21],
    sum: [130],
  },
  {
    id: "y2_u5_g1",
    subject: [14, 0, 15, 0, 29],
    major: [0, 51],
    advanced: [0, 66],
    doubleIn: [0, 36],
    doubleOut: [0, 36],
    minor: [0, 21],
    sum: [130],
  },
  {
    id: "y2_u5_g2",
    subject: [14, 0, 15, 0, 29],
    major: [0, 51],
    advanced: [0, 66],
    doubleIn: [0, 36],
    doubleOut: [0, 36],
    minor: [0, 21],
    sum: [130],
  },
  {
    id: "y2_u5_g3",
    subject: [14, 0, 15, 0, 29],
    major: [0, 51],
    advanced: [0, 66],
    doubleIn: [0, 36],
    doubleOut: [0, 36],
    minor: [0, 21],
    sum: [130],
  },
  {
    id: "y2_u5_g4",
    subject: [14, 0, 15, 0, 29],
    major: [0, 51],
    advanced: [0, 66],
    doubleIn: [0, 36],
    doubleOut: [0, 36],
    minor: [0, 21],
    sum: [130],
  },
  // {
  //   id: "y2_u5_g5",
  //   subject: [0, 0, 0, 0, 0],
  //   major: [0, 0],
  //   advanced: [0, 0],
  //   doubleIn: [0, 0],
  //   doubleOut: [0, 0],
  //   minor: [0, 0],
  //   sum: [0],
  // },
];

const INIT = { ...initState.filter((credit) => credit.id === "*")[0] };
const sum = (arr) => arr.reduce((prev, cur) => prev + cur);
const creditSum = (credit) => {
  return Number(
    Number(credit.subject[4]) +
      credit.major[0] +
      credit.major[1] +
      credit.addMajor[0] +
      credit.addMajor[1] +
      Number(credit.other)
  );
};
const convertCreditToObject = ({ selectCredit, majorType, other = [0] }) => ({
  subject: [...selectCredit.subject],
  major: [...selectCredit[majorType.major]],
  addMajor:
    majorType.addMajor === "*" ? [0, 0] : [...selectCredit[majorType.addMajor]],
  other: [other[0]],
  sum: [...selectCredit.sum],
});

const CreditContext = createContext({
  creditState: initState,
  creditDispatch: (state, action) => {
    switch (action.type) {
      case "GET_CREDIT":
        const findInfo = initState.filter((credit) => credit.id === state)[0];
        return findInfo ? findInfo : INIT;
      case "CREDIT_CONVERT_USER":
        return convertCreditToObject(state);
      case "INIT":
        return INIT;
      case "INIT_USER":
        return convertCreditToObject({
          selectCredit: INIT,
          other: [0],
          majorType: { major: "advanced", addMajor: "*" },
        });
      case "ARRAY_SUM":
        return sum(state);
      case "CREDIT_SUM":
        return creditSum(state);
      default:
        return INIT;
    }
  },
});

export default CreditContext;
