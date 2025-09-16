import { useState } from "react";
import type { Category } from "../types";

export default function BudgetPlanner() {
    const [income, setIncome] = useState<string>("");
    const [categories, setCategories] = useState<Category[]>([]);

    const addCategory = () => {
        const id = Date.now()+Math.random();
        const newCat: Category = {id, name: "", percentage: 0, isEditing: true};
        setCategories((prev) => [newCat, ...prev]);
    }

    const updateCategory = (id: number, patch: Partial<Category>)  => {
        setCategories((prev) => prev.map((c) => (c.id === id ? {...c, ...patch } : c)));
    }

    const saveCategory = (id: number) => {
        setCategories((prev) => prev.map((c) => (c.id === id ? { ...c, isEditing: false} : c)));
    }

    const editCategory = (id: number) => {
        setCategories((prev) => prev.map((c) => (c.id === id ? {...c, isEditing: true} : c)));
    }

    const deleteCategory = (id: number) => {
        setCategories((prev) => prev.filter((c) => c.id !== id));
    }

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