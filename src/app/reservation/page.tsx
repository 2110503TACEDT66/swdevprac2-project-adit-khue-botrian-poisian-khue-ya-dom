import { TextField } from "@mui/material"

export default function reservation() {
    return (
        <main className="w-[100%] flex flex-col space-y-4 items-center">
            <div className="text-xl font-medium flex justify-center">Restaurant Booking</div>
            <div className="grid w-fit place-items-center">
            <div className="text-md w-full text-gray-600">Book Date and Location</div>
            <div className="bg-slate-100 rounded-lg w-fit px-3 py-5
                            " >
                <div className="w-fit space-y-2 grid place-items-center">
                    <div className="space-x-2">
                        <TextField className='' variant="standard" name="Name-Lastname" label="Name-Lastname" />
                        <TextField className='' variant="standard" name="Citizen ID" label="Citizen ID" />
                    </div>
                </div>
            </div>
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            text-white shadow-small" name="Book Vaccine">
                Book
            </button>
        </main>
    )
}
