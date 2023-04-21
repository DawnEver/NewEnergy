import React,{ useState } from 'react';
import TypingCard from '@/components/TypingCard'
import LineChart from "@/components/LineChart";

const ShortTermForcast = () => {
  const cardContent = `短期功率预测`
  const lineChartDefaultData = {
    "New Visits": {
      expectedData: [100, 120, 161, 134, 105, 160, 165],
      actualData: [120, 82, 91, 154, 162, 140, 145],
    },}
    const [lineChartData] = useState(
      lineChartDefaultData["New Visits"]
    );
  return ( 
    <div className="app-container">
      <TypingCard title='短期功率预测' source={cardContent}/>
      
      <LineChart
        chartData={lineChartData}
        styles={{
          padding: 12,
          backgroundColor: "#fff",
          marginBottom: "25px",
        }}
      />
    </div>
  );
}
 
export default ShortTermForcast;