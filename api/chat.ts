// バックエンドのURLを環境変数から取得
const url:string = process.env.BACKEND_URL || "http://127.0.0.1:5000";

// API呼出しの型を定義
import {components} from "./types"

type ChatRequest = components["schemas"]["ChatRequest"];
type ChatResponse = components["schemas"]["ChatResponse"];

// バックエンドにリクエストを投げる関数
export default async function chat(req: ChatRequest): Promise<ChatResponse> {

    // バックエンド(Azure OpenAI)にリクエストを投げる
    const response = await fetch(url + "/api/chat", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
      
    return await response.json(); 
}
