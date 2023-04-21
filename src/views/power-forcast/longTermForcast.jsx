import React from 'react';
import TypingCard from '@/components/TypingCard'
import LineChart from "@/components/LineChart";
const LongTermForcast = () => {
  const cardContent = `长期功率预测`
  return ( 
    <div className="app-container">
      <TypingCard title='长期功率预测' source={cardContent}/>
    </div>
  );
}
 
export default LongTermForcast;