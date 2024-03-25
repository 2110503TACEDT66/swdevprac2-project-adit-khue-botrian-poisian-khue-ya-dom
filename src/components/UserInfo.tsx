import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

export default async function UserInfo(){
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null
    const profile = await getUserProfile(session.user.token)
    // var createdAt = new Date(profile.data.createdAt)
    // console.log(session)

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="w-[80%] bg-slate-100 m-5 p-5">
                <div className='text-2xl'>{profile.data.role}</div>
                <table className='table-auto border-separate border-spacing-2'>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{profile.data.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{profile.data.email}</td>
                        </tr>
                        <tr>
                            <td>*TOKEN*</td>
                            <td>{session.user.token}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}
