
export default function Welcomepage(){

    return (
        <>
            <div className="homepage" >
            <h3>Wellcome in our store</h3>
            
            <p> 
            Welcome to our online store! We're thrilled you're here and hope you 
            find something you love. Explore our selection and enjoy your shopping experience! 
            </p>

            <div className="colectie">
                <img src="clothes2.jpg" alt="" />
                <img src="clothes1.jpg" alt="" />
                <img src="colectie-minerale.jpg"  alt=""/>
                <img src="florinadesk.jpg" alt="" />
                <img src="grocery1.jpg" alt="" />
                <img src="grocery2.jpg" alt="" />
            </div>
            <div className="contact">Contact: &nbsp;<a href="mailto: petrudem@yahoo.com" style={{color:'blue'}}>petrudem@yahoo.com</a>
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target = '_blank'>
                    <div className="lin">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
                    </div>
                </a> 
            </div>
            <footer>©2025  PetruD  Webdesign</footer>
            </div>
        </>
    )
}
