"use client";
import { useState } from "react";

export default function BentoShareApp() {
  const [meals, setMeals] = useState([]);
  const [form, setForm] = useState({
    image: "",
    name: "",
    time: "",
    contact: "",
    description: ""
  });

  function handlePost() {
    setMeals([form, ...meals]);
    setForm({ image: "", name: "", time: "", contact: "", description: "" });
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold">🍱 分享你的便當</h1>

      <div className="space-y-2 p-4 bg-gray-900 rounded-xl">
        <input
          className="w-full p-2 rounded bg-gray-800 text-white"
          placeholder="圖片網址（可先貼 imgur 連結）"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <input
          className="w-full p-2 rounded bg-gray-800 text-white"
          placeholder="便當名稱"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full p-2 rounded bg-gray-800 text-white"
          placeholder="可取餐時間（例如：18:00-19:00）"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />
        <input
          className="w-full p-2 rounded bg-gray-800 text-white"
          placeholder="聯絡方式（例如：Line ID 或手機）"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
        />
        <textarea
          className="w-full p-2 rounded bg-gray-800 text-white"
          placeholder="簡單介紹你的便當內容（可選）"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button
          className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
          onClick={handlePost}
        >
          發布便當
        </button>
      </div>

      <h2 className="text-xl font-semibold mt-6">🍽️ 鄰近的便當列表</h2>
      <div className="space-y-4">
        {meals.map((meal, index) => (
          <div key={index} className="p-4 bg-gray-900 rounded-xl">
            {meal.image && <img src={meal.image} alt="bento" className="w-full rounded-xl mb-2" />}
            <p className="font-bold">{meal.name}</p>
            <p>取餐時間：{meal.time}</p>
            <p>聯絡方式：{meal.contact}</p>
            <p className="text-sm text-gray-400">{meal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
