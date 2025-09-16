import { useState } from "react";

export default function BudgetPlanner() {
    const [income, setIncome] = useState<string>("");

    return (
        <div className="min-h-screen p-8 bg-slate-500">
            <h1 className="text-2xl text-white-500 font-bold mb-6">Budget Planner</h1>
            <section className="flex flex-col w-md">
                <label>Income</label>
                <div>
                <input 
                className="bg-white mr-4 p-1"
                type="number"
                placeholder=" Enter income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                />
                </div>    
            </section>
        
        </div>
    )


}