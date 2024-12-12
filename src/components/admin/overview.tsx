"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "T1", posts: 400 },
  { name: "T2", posts: 300 },
  { name: "T3", posts: 200 },
  { name: "T4", posts: 278 },
  { name: "T5", posts: 189 },
  { name: "T6", posts: 239 },
  { name: "T7", posts: 349 },
  { name: "T8", posts: 430 },
  { name: "T9", posts: 291 },
  { name: "T10", posts: 322 },
  { name: "T11", posts: 319 },
  { name: "T12", posts: 420 },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Bar dataKey="posts" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

