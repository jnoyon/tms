const Timedistribute = () => {
    return(
        <section className="timebox">
            <div className="container mx-auto w-11/12">
            <div className="card bg-white rounded-md text-center p-3 shadow-md mb-5">
                    <div className="remaing">
                        <h2 className="font-bold text-3xl mb-1"> বরাদ্দকৃত সময় </h2>
                        <h1 className="font-bold"> ১৬৮ ঘন্টা </h1>  
                    </div>
                </div>

            
                <div className="card bg-white rounded-md text-center p-3 shadow-md">
                    <div className="remaing">
                        <form action="#" className="grid grid-cols-3 gap-2">
                            <input type="text" name="taskname" id="taskname" className="mt-1 block col-span-3 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" placeholder="কাজের নাম" />
                            <input type="number" name="taskname" id="taskname" className="mt-1 block col-span-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" placeholder="সময়" />
                            <input type="number" name="taskname" id="taskname" className="mt-1 block col-span-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" placeholder="দিন" />
                            <input type="submit" value="যুক্ত করুন" className="bg-green-600 rounded-md text-white font-bold" />
                        </form>
                        
                    </div>
                    
                </div>
                <div className="bg-white shadow-md p-3 mt-5">
                        <table className="border-collapse border border-slate-400 w-full mt-4">
                        <thead className="text-sm">
                            <tr>
                            <th className="border border-slate-300 py-2">কাজ</th>
                            <th className="border border-slate-300 py-2">সময়</th>
                            <th className="border border-slate-300 py-2">দিন</th>
                            <th className="border border-slate-300 py-2">মোট সময়</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                        </table>
                    </div>
            </div>
        </section>
    );
}
export default Timedistribute;