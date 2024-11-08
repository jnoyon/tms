import toast, { Toaster } from 'react-hot-toast';
const Newstask = () => {
    const homeTaskAdded = () => toast.success('টাস্ক যুক্ত করা হয়েছে');
    return(
        <section className="timebox">
            <div className="container mx-auto w-11/12">
                <div className="card bg-white rounded-md text-center p-3 shadow-md">
                    <div className="remaing">
                        <form action="#" className="grid grid-cols-3 gap-2">
                            <input type="text" name="taskname" id="taskname" className="mt-1 block col-span-3 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" placeholder="কাজের নাম" />
                            <input type="number" name="taskname" id="taskname" className="mt-1 block col-span-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" placeholder="মিনিট" />
                            <select name="status" id="tasktaus" className="rounded-md text-center font-bold">
                                <option value=""> প্রয়োজনীয় </option>
                                <option value=""> অপ্রয়োজনীয় </option>
                            </select>
                            <input type="submit" value="যুক্ত করুন" className="bg-lime-600 rounded-md text-white font-bold" onClick={homeTaskAdded} />
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Newstask;