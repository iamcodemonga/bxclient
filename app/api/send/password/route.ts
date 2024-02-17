import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ReactElement } from "react";
import PasswordEmail from "@/components/emails/Password";

const resend:Resend = new Resend(process.env.RESEND_APIKEY);

export async function POST(req: NextRequest) {
    const { email, validationcode }: { email: string, validationcode: string } = await req.json();

    const sendMail = async( email: string, subject: string) => {
        try {
            const { data, error } = await resend.emails.send({
                from: 'botexfinance <admin@botexfinance.com>',
                to: [email],
                subject,
                react: PasswordEmail({ validationcode }) as ReactElement,
            });
            console.log(data)
            if (error) {
                return NextResponse.json({ status: "failed", message: `An error occured`});
            }
        } catch (error) {
            console.log(error)
        }
    }

    await sendMail( email, `New Password Generated!`);
    return NextResponse.json({ status: "ok", message: `successful!`});
}