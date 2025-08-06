"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { motion } from "framer-motion"

const data = [
  { name: "Before Aura", value: 100 },
  { name: "With Aura", value: 138 },
]

const ProofSection = () => {
  return (
    <section className="py-20 sm:py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Unified Performance. Unprecedented Growth.
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Aura doesn't just simplify—it amplifies. Based on an analysis of 50+ campaigns, clients saw an average ROI uplift of 38% within the first quarter by reallocating budget based on our AI recommendations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-16 sm:mt-24 w-full max-w-2xl mx-auto"
        >
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
                  tickFormatter={(value) => `${value}%`}
                />
                <Bar dataKey="value" fill="url(#colorUv)" radius={[4, 4, 0, 0]} />
                 <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2}/>
                    </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProofSection;