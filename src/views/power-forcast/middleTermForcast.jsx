import React from 'react';
import TypingCard from '@/components/TypingCard'
const MiddleTermForcast = () => {
  const cardContent = `中期功率预测`
  return ( 
    <div className="app-container">
      <TypingCard title='中期功率预测' source={cardContent}/>
    </div>
  );
}
 
export default MiddleTermForcast;