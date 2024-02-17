import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ReactElement } from "react";
import DepositEmail from "@/components/emails/Deposit";

const resend:Resend = new Resend(process.env.RESEND_APIKEY);

export async function POST(req: NextRequest) {
    const { username, email, plan, method, amount }: { username: string, email: string, plan: string, method: string, amount: number } = await req.json();

    const sendMail = async(username: string, email: string, subject: string) => {
        try {
            const { data, error } = await resend.emails.send({
                from: 'botexfinance <admin@botexfinance.com>',
                to: [email],
                subject,
                react: DepositEmail({ username, plan, method, amount }) as ReactElement,
            });
            console.log(data)
            if (error) {
                return NextResponse.json({ status: "failed", message: `An error occured`});
            }
        } catch (error) {
            console.log(error)
        }
    }

    await sendMail(username, email, `Deposit Request Received!`);
    return NextResponse.json({ status: "ok", message: `successful!`});
}