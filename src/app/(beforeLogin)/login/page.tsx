"use client";

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}

/* 
📌 결과는 같지만 뒤로가기했을 때 차이가 나타남

1️⃣ router.push
localhost:3000 → localhost:3000/login → localhost:3000/i/flow/login
뒤로가기 시 바로 전 단계로 👉 localhost:3000/i/flow/login → localhost:3000/login

2️⃣ router.replace
localhost:3000 → localhost:3000/login → localhost:3000/i/flow/login
뒤로가기 시 초기 단계로 👉 localhost:3000/i/flow/login → localhost:3000


이 상황에서 replace를 사용해야 하는 이유는 intercept routing 때문에 push를 사용할 경우
뒤로가기 시 계속 무한루프처럼 주소를 벗어날 수 없음

*/
