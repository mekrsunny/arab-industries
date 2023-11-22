import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import { CgProfile } from 'react-icons/cg'
import { BsCheckAll } from 'react-icons/bs'
import { AiOutlineCloudUpload, AiOutlineMessage } from 'react-icons/ai'


import styles from './Home.module.css'

function Home() {


    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];


    return (
        <main className='main-container'>
            <div className={styles['heading-home']}>
            <h2 >Choose a plan that's just right for you!</h2>
                <div className={styles.btnContainer}>
                    <label className={`${styles.switch} ${styles.btnColorModeSwitch}`}>
                        <input value="1" id="color_mode" name="color_mode" type="checkbox" />
                        <label
                            className={styles.btnColorModeSwitchInner}
                            data-off="Montly"
                            data-on="Anually"
                            htmlFor="color_mode"
                        ></label>
                    </label>
                </div>
        </div>
            <div className={styles['pricing-cards-container']}>
                {/* Pricing Card 1: Basic Plan */}
                <div className={styles['pricing-card']}>
                    <h2 className={styles['pricing-title']}>Basic</h2>
                    <div className={styles['older-pricing']}>
                        <span className={styles['pricing-price-crossed']}>$30/month</span>
                    </div>
                    <p className={styles['pricing-price']}>$19/month</p>
                    <button style={{borderRadius:"8px",border:"none",width:"40%", padding:"10px", backgroundColor:"orange"}}>Get Started </button>
                    <hr className={styles['horizontal-line']} />
                    <h3 className={styles['section-heading']}>What You will get</h3>
                    <div className={styles['feature-list']}>
                        <div className={styles['feature-item']}>
                            <CgProfile className={styles['feature-icon']} />
                            <h4>Upto 100 User</h4>
                        </div>
                        <div className={styles['feature-item']}>
                            <AiOutlineCloudUpload className={styles['feature-icon']} />
                            <h4>Upto 100 GB</h4>
                        </div>
                        <div className={styles['feature-item']}>
                            <AiOutlineMessage className={styles['feature-icon']} />
                            <h4>Email Support</h4>
                        </div>
                    </div>
                    <h5 className={styles['explore-features']}><u>Explore Features</u></h5>
                </div>
                <div className={styles['pricing-card']}>
                    <h2 className={styles['pricing-title']}>Standard</h2>
                    <div className={styles['older-pricing']}>
                        <span className={styles['pricing-price-crossed']}>$40/month</span>
                    </div>
                    <p className={styles['pricing-price']}>$29/month</p>
                    <button style={{ borderRadius: "8px", border: "none", width: "40%", padding: "10px", backgroundColor: "red" }}>Get Started </button>
                    <hr className={styles['horizontal-line']} />
                    <h3 className={styles['section-heading']}>What You will get</h3>
                    <div className={styles['feature-list']}>
                        <div className={styles['feature-item']}>
                            <CgProfile className={styles['feature-icon']} />
                            <h4>Upto 150 User</h4>
                        </div>
                        <div className={styles['feature-item']}>
                            <AiOutlineCloudUpload className={styles['feature-icon']} />
                            <h4>Upto 150 GB</h4>
                        </div>
                        <div className={styles['feature-item']}>
                            <AiOutlineMessage className={styles['feature-icon']} />
                            <h4>Email+msg Support</h4>
                        </div>
                    </div>
                    <h5 className={styles['explore-features']}><u>Explore Features</u></h5>
                </div>
                <div className={styles['pricing-card']}>
                    <h2 className={styles['pricing-title']}>Premium</h2>
                    <div className={styles['older-pricing']}>
                        <span className={styles['pricing-price-crossed']}>$50/month</span>
                    </div>
                    <p className={styles['pricing-price']}>$39/month</p>
                    <button style={{ borderRadius: "8px", border: "none", width: "40%", padding: "10px", backgroundColor: "purple" }}>Get Started </button>
                    <hr className={styles['horizontal-line']} />
                    <h3 className={styles['section-heading']}>What You will get</h3>
                    <div className={styles['feature-list']}>
                        <div className={styles['feature-item']}>
                            <CgProfile className={styles['feature-icon']} />
                            <h4>Upto 200 User</h4>
                        </div>
                        <div className={styles['feature-item']}>
                            <AiOutlineCloudUpload className={styles['feature-icon']} />
                            <h4>Upto 200 GB</h4>
                        </div>
                        <div className={styles['feature-item']}>
                            <AiOutlineMessage className={styles['feature-icon']} />
                            <h4>Email+msg+chat ai Support</h4>
                        </div>
                    </div>
                    <h5 className={styles['explore-features']}><u>Explore Features</u></h5>
                </div>
            </div>
            <div className={styles['pricing-cards-container']}>
                {/* Pricing Card 1: Horizontal Plan 1 */}
                <div className={styles['pricing-card-horizontal']}>
                    <div className={styles['left-side']}>
                        <button style={{ borderRadius: "8px", border: "none", width: "40%", padding: "6px", backgroundColor: "lightgreen" }} className={`${styles['pricing-button']} ${styles['orange-button']}`}>
                            Top Button
                        </button>
                        <h2 className={styles['pricing-title-bold']}>Free Starter</h2>
                        <button style={{ borderRadius: "8px", border: "none", width: "60%", padding: "15px", backgroundColor: "lightgreen" }} className={`${styles['pricing-button']} ${styles['big-button']}`}>
                            Get Started
                        </button>
                    </div>
                    <div className={styles['right-side']}>
                        <span className={styles['span-text']}>What you'll get</span>
                        <div className={styles['feature-list']}>
                            <div className={styles['feature-item']}>
                                <CgProfile className={styles['feature-icon']} />
                                <h4>upto 8 user</h4>
                            </div>
                            <div className={styles['feature-item']}>
                                <AiOutlineCloudUpload className={styles['feature-icon']} />
                                <h4>3 GB Storage</h4>
                            </div>
                            <div className={styles['feature-item']}>
                                <AiOutlineMessage className={styles['feature-icon']} />
                                <h4>Email Support</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing Card 2: Horizontal Plan 2 */}
                <div className={styles['pricing-card-horizontal']}>
                    <div className={styles['left-side']}>
                        <button style={{ borderRadius: "8px", border: "none", width: "40%", padding: "6px", backgroundColor: "lightblue" }} className={`${styles['pricing-button']} ${styles['orange-button']}`}>
                            Let's Connect
                        </button>
                        <h2 className={styles['pricing-title-bold']}>Enterprise Plan</h2>
                        <button style={{ borderRadius: "8px", border: "none", width: "60%", padding: "15px", backgroundColor: "lightblue" }} className={`${styles['pricing-button']} ${styles['big-button']}`}>
                            Contact Us
                        </button>
                    </div>
                    <div className={styles['right-side']}>
                        <span className={styles['span-text']}>What you'll get</span>
                        <div className={styles['feature-list']}>
                            <div className={styles['feature-item']}>
                                <CgProfile className={styles['feature-icon']} />
                                <h4>Upto 75 Users</h4>
                            </div>
                            <div className={styles['feature-item']}>
                                <BsCheckAll className={styles['feature-icon']} />
                                <h4>Customization features</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>

            </div>
        </main>
    )
}

export default Home