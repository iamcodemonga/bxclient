"use server"

import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const api = process.env.API_ROOT;
const client = process.env.CLIENT_ROOT;

export const getErrorMessage = (error: unknown): string => {
    let message: string;

    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message)
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "something went wrong";
    }

    return message;
}

export async function newPassword({ email }: { email: string }) {
    try {
        // const { data } = await axios.post(`${api}/withdrawals/request/${userid}`, { wallet, method, amount })
        const response = await fetch(`${api}/password/reset/`, {
            method: "PUT",
            body: JSON.stringify({ email }),
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store"
        })
        const data = await response.json();
        // console.log(data);
        if (data.error) {
            throw new Error(data.message);
        }
        const sendmail = await axios.post(`${client}/api/send/password`, { email, validationcode: data.password })
        console.log(sendmail.data)
        if (sendmail.data.status == "failed") {
            throw new Error("could not generate password");
        }
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    // revalidatePath("/account/withdrawals");
}

export async function placeRequest({ wallet, method, amount, userid }: { wallet: string, method: string, amount: string, userid: number }) {
    try {
        // const { data } = await axios.post(`${api}/withdrawals/request/${userid}`, { wallet, method, amount })
        const response = await fetch(`${api}/withdrawals/request/${userid}`, {
            method: "POST",
            body: JSON.stringify({ wallet, method, amount }),
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store"
        })
        const data = await response.json();
        // console.log(data);
        if (data.error) {
            throw new Error(data.message);
        }
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    revalidatePath("/account/withdrawals");
}

export async function addDeposit({ email, username, plan, method, amount, userid }: { email: string, username: string, plan: string, method: string, amount: string, userid: number }) {
    try {
        // const { data } = await axios.post(`${api}/withdrawals/request/${userid}`, { wallet, method, amount })
        const response = await fetch(`${api}/deposits/add/${userid}`, {
            method: "POST",
            body: JSON.stringify({ plan, method, amount }),
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store"
        })
        const data = await response.json();
        // console.log(data);
        if (data.error) {
            throw new Error(data.message);
        }
        const sendmail = await axios.post(`${client}/api/send/deposit`, { email, username, plan, method, amount })
        console.log(sendmail.data)
        if (sendmail.data.status == "failed") {
            throw new Error("Error sending mail message!");
        }
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    revalidatePath("/account/deposits");
}

export async function updateUserBalance({ balance, profit, userid }: { balance: string, profit: string, userid: number }) {
    try {
        // const { data } = await axios.post(`${api}/withdrawals/request/${userid}`, { wallet, method, amount })
        const response = await fetch(`${api}/wallet/edit/${userid}`, {
            method: "PUT",
            body: JSON.stringify({ balance, profit, userid }),
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store"
        })
        const data = await response.json();
        // console.log(data);
        if (data.error) {
            throw new Error(data.message);
        }
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    revalidatePath("/admin");
}

export async function approveWithdrawal({ id }: { id: number }) {
    try {
        // const { data } = await axios.post(`${api}/withdrawals/request/${userid}`, { wallet, method, amount })
        const response = await fetch(`${api}/withdrawals/approve/${id}`, {
            method: "PUT",
            body: JSON.stringify({ id }),
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store"
        })
        const data = await response.json();
        // console.log(data);
        if (data.error) {
            throw new Error(data.message);
        }
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    revalidatePath("/admin");
}

export async function approveDeposits({ id }: { id: number }) {
    try {
        // const { data } = await axios.post(`${api}/withdrawals/request/${userid}`, { wallet, method, amount })
        const response = await fetch(`${api}/deposits/approve/${id}`, {
            method: "PUT",
            body: JSON.stringify({ id }),
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store"
        })
        const data = await response.json();
        if (data.error) {
            throw new Error(data.message);
        }
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    revalidatePath("/admin/deposits");
}

export async function topupfunds() {
    try {
        // const { data } = await axios.post(`${api}/withdrawals/request/${userid}`, { wallet, method, amount })
        const topupresponse = await fetch(`${api}/wallet/topup`, {
            method: "PUT",
            body: JSON.stringify({ }),
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store"
        })
        const topupdata = await topupresponse.json();
        if (topupdata.error) {
            throw new Error(topupdata.message);
        }
        const payresponse = await fetch(`${api}/wallet/payday`, {
            method: "PUT",
            body: JSON.stringify({ }),
            headers: {
                "content-type": "application/json",
            },
            cache: "no-store"
        })
        await payresponse.json();
        // const result = await axios.put(`${api}/wallet/topup`)
        // if (result.data.status == 200) {
        //     console.log(result.data.message);
        //     // payroll clearance runs
        //     const data = await axios.put(`${api}/wallet/payday`)
        //     console.log(data.data.message)
        // }
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    revalidatePath("/admin");
    // redirect('/admin')
}
