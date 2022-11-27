import React from "react";
import background from "../../img/Vector.png";
import karzina from '../../img/karzina.png'
import Vector from '../../img/Vector.png'
import Vector_1 from '../../img/Vector (1).png'
import Vector_2 from '../../img/Vector (2).png'
import Vector_3 from '../../img/Vector (3).png'
import Vector_4 from '../../img/Vector (4).png'

import Vector_5 from '../../img/Vector (5).png'
import Vector_6 from '../../img/Vector (6).png'
import ginger_1 from '../../img/ginger (1).png'
import ginger from '../../img/ginger.png'
import Lemon from "../../img/Lemon.png"
import nootris_1 from "../../img/nootris.png"
import nootris_2 from "../../img/nootris_2.png"
import text from "../../img/text.png"
import text_2 from "../../img/text_2.png"
import text_3 from "../../img/text_3.png"
import text_4 from "../../img/text_4.png"
import text_5 from "../../img/text_5.png"
import text_6 from "../../img/text_6.png"
import text_7 from "../../img/text_7.png"
import text_8 from "../../img/text_8.png"
import text_9 from "../../img/text_9.png"
import A750 from "../../img/750.png"
import Rectangle from "../../img/Rectangle 3.png"
import A690 from "../../img/690.png"
import Vorus from "../../img/vorus.png"

import logo from "../../img/Logo.png"
import "./style.scss"
const HeaderComponet = () => {

    return <div>

        <div>
            <div className="G-center P-header G-flex-space-between ">
                {/* <img src={logo} alt=""  /> */}
                <li>
                    <img src={logo} alt="#" />
                </li>
                <ul className="G-flex ">

                    <li>
                        FAQ
                    </li>
                    <li>
                        оплата и доставка
                    </li>
                    <li>
                        возврат
                    </li>
                    <li>
                        Исследования
                    </li>
                    <li>
                        Личный кабинет
                    </li>
                    <li>
                        8 8(800) 600-09-90
                    </li>
                    <li>
                        <div className="G-img G-relative" >
                            <img src={karzina} alt="#" />
                            <h2 className="G-absolute P-absolute-box ">1</h2>
                        </div>
                        {/* <img src={karzina} alt="#" /> */}

                    </li>
                </ul>

            </div>

            <div className="G-img G-relative" style={{ backgroundColor: "yellow", width: "100vw", height: '100vh' }}>
                <img src={Vector_1} alt="#" style={{ width: "100vw" }} />
                <img className="G-absolute" src={Vector_2} alt="#" style={{ width: "100vw", top: "0", right: "0" }} />
                <img className="G-absolute" src={Vector_6} alt="#" style={{ top: '0px', left: "0px", width: " 30vw" }} />
                <img className="G-absolute P-text" src={text} alt="#" />
                <img className="G-absolute P-ginger_1" src={ginger_1} alt="#" />
                <img className="G-absolute P-nootris_1" src={nootris_1} alt="#" />
                <img className=" G-absolute P-Lemon" src={Lemon} alt="#" />
                <img className=" G-absolute " src={Vector_3} alt="#" style={{ bottom: '0px', right: "0px", width: " 100vw" }} />
                <img className=" G-absolute " src={Vector} alt="#" style={{ bottom: '0px', left: "0px", width: " 60vw" }} />
                <img className=" G-absolute " src={Vector_4} alt="#" style={{ bottom: '0px', right: "0px", width: " 60vw", height: "100vh", zIndex: "19" }} />
                <img className=" G-absolute " src={Vector_5} alt="#" style={{ bottom: '0px', right: "0px", width: " 60vw", height: "100vh" }} />
                <img className=" G-absolute  " src={text_2} alt="#"  style={{ bottom: '15vw', left: "7vw", width: " 35vw", zIndex: "19" }}/>
                <img className=" G-absolute  " src={text_3} alt="#"  style={{ bottom: '7vw', left: "7vw", width: " 17vw", zIndex: "19" }}/>
                <img className=" G-absolute  " src={text_4} alt="#"  style={{ bottom: '4vw', left: "7vw", width: " 17vw", zIndex: "19" }}/>
            </div>

            <div className="G-img G-relative" style={{ backgroundColor: "black", width: "100vw", height: '130vh' }}>

                <img className=" G-absolute  " src={text_5} alt="#" style={{top:"9vw",left:"30vw",width:'40vw'}}/>
                <img className=" G-absolute  " src={A750} alt="#" style={{top:"20vw",left:"40vw",width:'10vw'}}/>
                <img className=" G-absolute  " src={Rectangle} alt="#" style={{top:"21vw",left:"40vw",width:'10vw',zIndex:"20"}}/>
                <img className=" G-absolute  " src={A690} alt="#" style={{top:"20vw",right:"35vw",width:'10vw'}}/>
                <img className=" G-absolute  " src={ginger} alt="#" style={{top:"25vw",left:"20vw",width:'10vw'}}/>
                <img className=" G-absolute  " src={text_6} alt="#" style={{top:"40vw",left:"20vw",width:'10vw'}}/>
                <img className=" G-absolute  " src={nootris_2} alt="#" style={{top:"25vw",left:"35vw",width:'35vw'}}/>
                <img className=" G-absolute  " src={text_7} alt="#" style={{top:"40vw",left:"42vw",width:'20vw'}}/>
                <img className=" G-absolute  " src={text_8} alt="#" style={{top:"43vw",left:"44vw",width:'15vw'}}/>
                <img className=" G-absolute  " src={Vorus} alt="#" style={{top:"25vw",left:"70vw",width:'15vw'}}/>
                <img className=" G-absolute  " src={text_9} alt="#" style={{top:"43vw",left:"73vw",width:'10vw'}}/>
                <button  className=" G-absolute P-button "  style={{bottom:"5vw",left:"43vw",width:'20vw'}}>Оформить заказ</button>

            </div>
        </div>



    </div>
}
export default HeaderComponet