import { StartGetSubjectFile } from "./utils.js";

class Page {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

const pageList = [
  new Page(
    "사회사업학전공",
    "https://knusw.kangnam.ac.kr/menu/d53e834ceae9fef9ebad6f9f4c5e7e8d.do"
  ),
  new Page(
    "사회서비스정책학전공",
    "https://knusw.kangnam.ac.kr/menu/92d470801a5203952b07a56b2217daf1.do"
  ),
  new Page(
    "실버산업학과",
    "https://senior-industry.kangnam.ac.kr/menu/08144c73e005d0a8b420fde4fbb96d2b.do"
  ),
  new Page(
    "유니버설아트디자인학과",
    "https://uad.kangnam.ac.kr/menu/7e9c4115b1fcd60b17d18fadc6182fa9.do"
  ),
  new Page(
    "스포츠복지학과",
    "https://ksps.kangnam.ac.kr/menu/71c8c3bb96255c1e3add147e2c8ba30a.do"
  ),
  new Page(
    "음악학과",
    "https://musicdpt.kangnam.ac.kr/menu/0fdb19dd625425c10da7e250715e317f.do"
  ),
  new Page(
    "경영학전공",
    "https://musicdpt.kangnam.ac.kr/menu/0fdb19dd625425c10da7e250715e317f.do"
  ),
  new Page(
    "국제통상학전공",
    "https://globalbiz.kangnam.ac.kr/menu/77c1a0c60f2837155c9914b74a5974bb.do"
  ),
  new Page(
    "경제금융전공",
    "https://pet.kangnam.ac.kr/menu/e1db257c7d296628793655a8fd301124.do"
  ),
  new Page(
    "세무학전공",
    "https://pet.kangnam.ac.kr/menu/71b32e89068c1dcaebae6677d96b1695.do"
  ),
  new Page(
    "공공인재학전공",
    "https://pet.kangnam.ac.kr/menu/067a97e0c48db415c798a7a39a2854ef.do"
  ),
  new Page(
    "한영문화콘텐츠전공",
    "https://kcc.kangnam.ac.kr/menu/0ea29adb626b6dfad7c36103635c930a.do"
  ),
  new Page(
    "국제지역학전공",
    "https://kcc.kangnam.ac.kr/menu/df5fb0e97cfb3cbab0a3cfbd858464d0.do"
  ),
  new Page(
    "중국지역학전공",
    "https://kcc.kangnam.ac.kr/menu/20cb29068044b34011733f8413c9c564.do"
  ),
  new Page(
    "한국어문학전공",
    "https://kcc.kangnam.ac.kr/menu/b8c7132fef5105aeac1c76c8e0dba711.do"
  ),
  new Page(
    "소프트웨어전공",
    "https://sae.kangnam.ac.kr/menu/37a8754dcce18b873cec31b094402cdd.do"
  ),
  new Page(
    "가상현실전공",
    "https://sae.kangnam.ac.kr/menu/8235155c54376632c37a07860033bc37.do"
  ),
  new Page(
    "전자공학전공",
    "https://sae.kangnam.ac.kr/menu/7056c773a50b33fb2f67c43672f63d42.do"
  ),
  new Page(
    "교육학과",
    "https://educ.kangnam.ac.kr/menu/990a1ff8f45a8522bc903921c84c217c.do"
  ),
  new Page(
    "유아교육과",
    "https://knece.kangnam.ac.kr/menu/5271460efe080b89ed6f7135b683cc49.do"
  ),
  new Page(
    "초등특수교육학과",
    "https://sped.kangnam.ac.kr/menu/9a436de05e8595411cb3474ac1c973da.do"
  ),
  new Page(
    "중등특수교육학과",
    "https://sped.kangnam.ac.kr/menu/2f3f001885b512a29297fc119963049e.do"
  ),
];
console.log(pageList.length);
// pageList.forEach(async (page) => await StartGetSubjectFile(page.url));
// await StartGetSubjectFile(
//   "https://knusw.kangnam.ac.kr/menu/d53e834ceae9fef9ebad6f9f4c5e7e8d.do"
// );
await StartGetSubjectFile(pageList);
