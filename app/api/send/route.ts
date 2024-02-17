import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ReactElement } from "react";
import RegisterEmail from "@/components/emails/Register";

const resend:Resend = new Resend(process.env.RESEND_APIKEY);

export async function POST(req: NextRequest) {
    const { username, email }: { username: string, email: string } = await req.json();

    const welcomeMail = async(username: string, email: string, subject: string) => {
        try {
            const { data, error } = await resend.emails.send({
                from: 'botexfinance <admin@botexfinance.com>',
                to: [email],
                subject,
                react: RegisterEmail({ username }) as ReactElement,
            });
            console.log(data)
            if (error) {
                return NextResponse.json({ status: "failed", message: `An error occured`});
            }
        } catch (error) {
            console.log(error)
        }
    }

    await welcomeMail(username, email, `Registration successful!`);
    return NextResponse.json({ status: "ok", message: `successful!`});
}