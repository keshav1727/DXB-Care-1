import React from 'react'
import './Content.css'

export default function Content(props) {
  return (
    <div className='middle-content-company'>
        <div className="header">
        <h2 className='heading'>
            {props.type}
        </h2>
        </div>
      <div className="content-company">
          <p>Time Efficiency:</p><p> We understand the demands on your plate: meeting deadlines, upskilling, and more. Your focus must be on what truly matters. Let us handle the rest. Our commitment is to optimise your time, ensuring you achieve your goals efficiently. 
Promoting Wellness and Well-Being: Amid your busy schedule, health often gets neglected. At dxb.care, we prioritise your well-being by assisting you in monitoring your health and offering personalised diet plans from top nutritionists, carefully selected supplement suggestions, and adequate sleep solutions. Our goal is to help you maintain your best health every step of the way. 
Broad Service Accessibility: Think of visiting multiple stores for your favourite dish's ingredients; then there is one shop with everything under one roof with the highest quality. Similarly, why hire different assistants for personal and professional tasks
when you can work with us? We handle every task with the highest quality, making the process more affordable and effortless. What would you choose? 
(Why visit multiple stores for ingredients when one shop has everything? Similarly, why hire different assistants for personal and professional tasks when you can work with us? We handle every task with top quality, making the process affordable and effortless. What would you choose?) 
Client-Centric Relationships: 
Pursuing your dreams is empowering, and with us as your dedicated partner, you'll have unwavering support throughout the journey. We cultivate deep, personalized relationships, proactively anticipating needs every step of the way. Consider us your steadfast ally. 
Chasing your dreams can feel lonely, but you don't have to do it alone. We build deep, personalised relationships, anticipating your needs and supporting you without being a disturbance. We're here as your reliable ally every step of the way. </p>
      </div>
    </div>
  )
}
