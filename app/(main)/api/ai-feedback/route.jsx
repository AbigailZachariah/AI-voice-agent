import { FEEDBACK_PROMPT } from "@/services/Constants";

export async function POST(req){
    const {conversation}=await req.json();
    const FINAL_PROMPT=FEEDBACK_PROMPT.replace('{{conversation}}',JSON.stringify(conversation))
}