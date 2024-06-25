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
           <div className="button"><button onClick={Corporatehandle}>Explore</button></div>
           </div>
           <div className="item">
            <div className='item-name'> <h1 className='item-heading'>Personal</h1> </div>
            <div className='item-content'><p> labore blanditiis cum voluptates distinctio voluptas asperiores molestiae quae vero officiis? Est libero rerum maiores quisquam iusto eius deleniti animi, placeat quaerat quam recusandae provident exercitationem omnis blanditiis.</p></div>
            <div className="button"><button onClick={Personalhandle}>Explore</button></div>
            </div>
            <div className="item">
            <div className='item-name'>  <h1 className='item-heading'>Relocation </h1> </div>
            <div className='item-content'><p> labore blanditiis cum voluptates distinctio voluptas asperiores molestiae quae vero officiis? Est libero rerum maiores quisquam iusto eius deleniti animi, placeat quaerat quam recusandae provident exercitationem omnis blanditiis.</p></div>
            <div className="button"><button onClick={Relocatehandle}>Explore </button></div>
            </div>
            <div className="item">
            <div className='item-name'> <h1 className='item-heading'>Elite Explorer</h1> </div>
            <div className='item-content'><p> labore blanditiis cum voluptates distinctio voluptas asperiores molestiae quae vero officiis? Est libero rerum maiores quisquam iusto eius deleniti animi, placeat quaerat quam recusandae provident exercitationem omnis blanditiis.</p></div>
            <div className="button"><button onClick={Visitorhandle}>Explore </button></div>
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
