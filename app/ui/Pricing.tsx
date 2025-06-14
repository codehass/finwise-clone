import { ChartNoAxesColumn, Target, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function Pricing() {
  return (
    <section id="pricing" className="flex flex-col items-center justify-start gap-4 w-full pt-20">
      <p className="font-medium">Trusted by <span className="text-blue-600 ">2000+ </span>customers worldwide</p>
      <div>
        <div className="flex justify-around items-center text-gray-400">
          <Image src="/notion.svg" alt="notion logo" width={40} height={40} className="mx-auto text-gray-400" />
          <p className="font-extrabold text-3xl">Notion</p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <Image src="/mockup-1.webp" alt="pricing" width={500} height={300} />
        <div className="flex flex-col items-center justify-center gap-8">
          <h3 className="text-3xl font-bold text-center">
            Smart Budgeting
          </h3>
          <p className="text-center text-gray-700">Take the guesswork out of managing your money. Our AI-powered budgeting tool adapts to your lifestyle and helps you stay on track.</p>

          <div className="flex flex-col justify-center items-center text-center gap-3">
            <ChartNoAxesColumn />
            <div>
              <h2 className="text-2xl font-semibold">
                Intelligent Categorization
              </h2>
              <p>
                Automatically sorts your transactions for crystal-clear insights.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center gap-3">
            <Target />
            <div>
              <h2 className="text-2xl font-semibold">Customizable Goals
              </h2>
              <p>Set and track financial objectives that matter to you.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center gap-3">
            <TrendingUp />
            <div>
              <h2 className="text-2xl font-semibold">Predictive Analysis
              </h2>
              <p>Get ahead of your finances with spending forecasts and alerts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
//COMMENT