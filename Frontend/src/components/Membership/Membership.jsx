import React from 'react'
import './Membership.css'
import {useNavigate} from 'react-router-dom'

export default function Membership() {
  const navigate=useNavigate()
  function Corporatehandle(){
    navigate('/corporate')

  }
  function Personalhandle(){
    navigate('/personal')
  }
  function Visitorhandle(){
    navigate('/visitors')
  }
  function Relocatehandle(){
    navigate('/relocate')
  }
  return (
    <div className='membership'>
        <div className="content">
        <div className='header'><h1 className='heading'>Membership</h1></div>
        <div className="membership-content">
            <div className="item">
              <div className='item-name'> <h1 className='item-heading'>Corporate</h1> </div>
              <div className='item-content'><p> , labore blanditiis cum voluptates distinctio voluptas asperiores molestiae quae vero officiis? Est libero rerum maiores quisquam iusto eius deleniti animi, placeat quaerat quam recusandae provident exercitationem omnis blanditiis.</p></div>
           <div className="button"><button onClick={Corporatehandle}>Explore
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg></button></div>
           </div>
           <div className="item">
            <div className='item-name'> <h1 className='item-heading'>Personal</h1> </div>
            <div className='item-content'><p> labore blanditiis cum voluptates distinctio voluptas asperiores molestiae quae vero officiis? Est libero rerum maiores quisquam iusto eius deleniti animi, placeat quaerat quam recusandae provident exercitationem omnis blanditiis.</p></div>
            <div className="button"><button onClick={Personalhandle}>Explore 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg></button></div>
            </div>
            <div className="item">
            <div className='item-name'>  <h1 className='item-heading'>Relocation </h1> </div>
            <div className='item-content'><p> labore blanditiis cum voluptates distinctio voluptas asperiores molestiae quae vero officiis? Est libero rerum maiores quisquam iusto eius deleniti animi, placeat quaerat quam recusandae provident exercitationem omnis blanditiis.</p></div>
            <div className="button"><button onClick={Relocatehandle}>Explore 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg></button></div>
            </div>
            <div className="item">
            <div className='item-name'> <h1 className='item-heading'>Elite Explorer</h1> </div>
            <div className='item-content'><p> labore blanditiis cum voluptates distinctio voluptas asperiores molestiae quae vero officiis? Est libero rerum maiores quisquam iusto eius deleniti animi, placeat quaerat quam recusandae provident exercitationem omnis blanditiis.</p></div>
            <div className="button"><button onClick={Visitorhandle}>Explore 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg></button></div>
            </div>
            
            
          </div>
        </div>
        <div className="crypto-tag">
          <div className="heading">
           <h1> We also accept <span>Crypto</span> payments</h1>
          </div>
        </div>
        </div>
  
  )
}
