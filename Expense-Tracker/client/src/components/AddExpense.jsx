import React, { useState } from "react";

const AddExpense = () => {
    const [expense, setExpense] = useState({
        _id: "",
        title: "",
        amount: "",
        amountType: "expense",
        category: "Food",
        desc: "",
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setExpense({
            ...expense,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Expense:", expense);

        // We'll add the expense to an array here
        // in the next step.
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">

            {/* Header */}
            <div className="max-w-5xl mx-auto mb-8">
                <h1 className="text-3xl font-bold">Expense Tracker</h1>
                <p className="text-gray-400 mt-1">
                    Track your income and expenses
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="md:col-span-1 bg-gray-800 rounded-xl p-6">

                    <h2 className="text-xl font-semibold mb-5">
                        Add Expense
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div>
                            <label className="block text-sm text-gray-300 mb-1">
                                Expense Title
                            </label>

                            <input
                                type="text"
                                name="title"
                                placeholder="e.g. Lunch"
                                value={expense.title}
                                onChange={handleOnChange}
                                className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-300 mb-1">
                                Amount
                            </label>

                            <input
                                type="number"
                                name="amount"
                                placeholder="e.g. 250"
                                value={expense.amount}
                                onChange={handleOnChange}
                                className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-300 mb-1">
                                Category
                            </label>

                            <select
                                name="category"
                                value={expense.category}
                                onChange={handleOnChange}
                                className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 outline-none"
                            >
                                <option value="Food">Food</option>
                                <option value="Travel">Travel</option>
                                <option value="Shopping">Shopping</option>
                                <option value="Bills">Bills</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm text-gray-300 mb-1">
                                Description
                            </label>

                            <textarea
                                name="desc"
                                placeholder="Add description..."
                                value={expense.desc}
                                onChange={handleOnChange}
                                rows="3"
                                className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 outline-none resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold"
                        >
                            Add Expense
                        </button>

                    </form>
                </div>

                {/* Right Side */}
                <div className="md:col-span-2 space-y-6">

                    {/* Summary */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                        <div className="bg-gray-800 rounded-xl p-5">
                            <p className="text-gray-400 text-sm">
                                Total Expense
                            </p>
                            <h2 className="text-2xl font-bold mt-2">
                                ₹0
                            </h2>
                        </div>

                        <div className="bg-gray-800 rounded-xl p-5">
                            <p className="text-gray-400 text-sm">
                                This Month
                            </p>
                            <h2 className="text-2xl font-bold mt-2">
                                ₹0
                            </h2>
                        </div>

                        <div className="bg-gray-800 rounded-xl p-5">
                            <p className="text-gray-400 text-sm">
                                Transactions
                            </p>
                            <h2 className="text-2xl font-bold mt-2">
                                0
                            </h2>
                        </div>

                    </div>

                    {/* Expense List */}
                    <div className="bg-gray-800 rounded-xl p-6">

                        <div className="flex justify-between items-center mb-5">
                            <h2 className="text-xl font-semibold">
                                Recent Expenses
                            </h2>

                            <select className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm">
                                <option>All</option>
                                <option>Food</option>
                                <option>Travel</option>
                                <option>Shopping</option>
                                <option>Bills</option>
                            </select>
                        </div>

                        {/* Empty State */}
                        <div className="text-center py-12 text-gray-400">
                            <p className="text-lg">
                                No expenses yet
                            </p>

                            <p className="text-sm mt-1">
                                Add your first expense using the form.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddExpense;