import logo from "../../asserts/WhatsApp Image 2024-02-22 at 08.00 1.png"
import handshake from "../../asserts/Light-brown-in-Jacket10.png"
import chevron from "../../asserts/chevron-left.png"
import iconMail  from "../../asserts/icon-mail.png"
import user  from "../../asserts/icon-user.png"
import lock  from "../../asserts/lock.png"
import arrow  from "../../asserts/arrow-right Copy.png"
import info  from "../../asserts/info.png"
import styles from "./index.module.css"
import {Link} from "@mui/material";
const SignUp = ()=>{

    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>

                <img src={logo} alt={""} style={{padding: "10px 58px", marginBottom: "60px", width: "40%"}}/>
                <img src={handshake} alt={""} style={{width: "100%", height: "50px"}}/>

                <div className={styles.partneshipContent}>
                    <h2>Partnership for Business Growth</h2>
                    <p style={{opacity: 0.8}}>Partnerships are pivotal for business growth,
                        enabling companies to leverage mutual strengths,
                        share risks, and capitalize on opportunities.</p>
                </div>
            </div>
            <div style={{padding: "10px", backgroundColor: "white"}}>
                <div className={styles.topBar}>
                    <Link>
                        <div className={styles.returnHome}>
                            <img src={chevron} alt={""} style={{padding: "10px 10px"}}/>
                            <span>return home</span>
                        </div>
                    </Link>
                    <div className={styles.loginSection}>
                        <p>Already a member? <Link to="/login">LOGIN NOW</Link></p>
                    </div>
                </div>

                <div className={styles.formHeader}>
                    <div style={{padding: "10px 10px"}}>
                        <h5>BECOME AN EXCLUSIVE MEMBERS</h5>
                        <p>SIGN UP AND JOIN THE THE PARTNERSHIP </p>
                    </div>

                    <div>
                        <form className={styles.fillForm}>
                            <div className={styles.inputContainer}>
                                <img src={user} alt={""} className={styles.inputIcon}/>
                                <input type="text" id="name" name="Name"
                                       placeholder="johnson Doe"
                                       className={styles.inputBtn}></input><br/><br/>
                            </div>

                            <div className={styles.inputContainer}>
                                <img src={iconMail} alt={""} className={styles.inputIcon}/>
                                <input type="text" id="email" name="EmailAddress"
                                       placeholder="example@gmail.com"
                                       className={styles.inputBtn}></input><br/><br/>
                            </div>

                            <div className={styles.inputContainer}>
                                <img src={lock} alt={""} className={styles.inputIcon}/>
                                <input type="text" id="password" name="Password"
                                       placeholder="*********"
                                       className={styles.inputBtn}></input><br/><br/>
                            </div>
                        </form>
                        <button>Become a Member <img src={arrow} alt={""}/></button>
                    </div>
                </div>

                <div className={styles.footer}>
                    <p>&copy; 2021 - 2022 5Starcompany. All rights Reserved</p>
                    <span> <img src={info} alt={""}/> Need help? </span>
                </div>
            </div>
        </div>
    )
}
export default SignUp;