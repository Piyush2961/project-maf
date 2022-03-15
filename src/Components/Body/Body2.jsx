import React from 'react'
import './Body2.css'
function Body2() {
    const obj = [{
  src:"https://visionplusmag.com/wp-content/uploads/sites/2/2020/03/Safilo-Group-Introduces-a-New-Eyewear-Collection-with-Levis-2.jpg",
  logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Levis-logo-quer.svg/1200px-Levis-logo-quer.svg.png",
  type:"Levis's",
    },{
        src:"https://s3.amazonaws.com/nikeinc/assets/94175/2020_RTT_Sustainability_Zero-Collection_RN_GROUP_06539_R2_native_1000.jpg?1581355371",
        logo:"https://cdn.weartesters.com/wp-content/uploads/2015/12/nike-logo-2015-e1450897999194.jpg",
        type:"Nike",
          },{
            src:"https://www.adidas-group.com/media/filer_public_thumbnails/filer_public/04/06/0406fa27-0fe6-4b8a-ab03-2dd27f3b8eca/18_02_2021_partnershipapproach.jpg__800x900_q85_crop-smart_subsampling-2.jpg",
            logo:"https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
            type:"Adidas",
              },{
                src:"https://www.businessinsider.in/thumb/msid-66092742,width-700,resizemode-4,imgsize-140531/Zara-is-part-of-the-biggest-fashion-company-in-the-world-Meet-the-other-brands-it-owns-.jpg",
                logo:"https://static.dezeen.com/uploads/2019/02/new-zara-logo-col-2.jpg",
                type:"Zara",
                  },{
                    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2qo6yX0AVAjmuRjE6TX-vJ4ZMJePVpS2pKQ&usqp=CAU",
                    logo:"https://www.theindustry.fashion/wp-content/uploads/2021/07/hmsign-1.jpg",
                    type:"H&M",
                      }]
  return (<>
    <div className='header__div'><p className='header__div__p'>Explore Top Brands</p></div>
    <div className='brands__div'>
    {
        obj.map((cur)=>{
            return <> <div className='brand__outer' style={{gap:"5px",width:"300px",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
<img src={cur.src} className='brand__img' style={{width:"200px",height:"350px",objectFit:"cover",borderRadius:"15px"}}></img>
<img src={cur.logo} style={{width:"100px"}}></img>
<p className='brand__name'>{cur.type}</p>
  </div></>
        })
    }
 
    
   
 
   

 
   
    </div>
    </>
  )
}

export default Body2