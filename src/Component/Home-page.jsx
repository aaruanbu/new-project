// import React from "react";
import { Box, Container } from "@mui/material"
import img1 from "./Img/logo_2.png"
import { ImFacebook2 } from "react-icons/im";
import { FaSquareTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import img2 from "./Img/g20-logo.png"
import img3 from "./Img/incredible-india.jpg"
import img4 from "./Img/know-school-banner.jpg"
import img5 from "./Img/modi.jpg"
import img6 from "./Img/ppc24-1.jpg"
import national from "./Img/national.png"
import yrs150 from "./Img/150-yrs.png"
import chakram from "./Img/chakram.png"
import glass from "./Img/glass.png"
import year75 from "./Img/year75.png"
import fit from "./Img/fit.png"
import lion from "./Img/5lion.png"
import mano from "./Img/manodarpan1.png"
import { FaCaretDown } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import imgedu from "./Img/higher_edu.png"
import imgschool from "./Img/school_edu.png"
import qr from "./Img/qr.png"
import nic from "./Img/nic-logo.png"
import minster from "./Img/minister_new.png"

export const Homes = () => {
    const [update, setupdate] = useState(true)
    const [circular, setcircular] = useState(false)
    const [circular2, setcircular2] = useState(false)
    const updt = () => {
        setupdate(true)
        setcircular(false)
        setcircular2(false)
    }
    let circlr = () => {
        setupdate(false)
        setcircular(true)
        setcircular2(false)
    }
    let circl2 = () => {
        setupdate(false)
        setcircular(false)
        setcircular2(true)
    }
    let setss = [{ imgs: yrs150, cht: <h5>150 Years of <br></br>Celebrating The<br></br> Mahatma</h5> },
    {
        imgs: chakram, cht: <h5>
            Ek Bharat <br></br>Shreshtha<br></br> </h5>
    },
    {
        imgs: lion, cht: <h5>

            Nagrik Kartavya <br></br>Paalan Abhiyan </h5>
    },
    { imgs: glass, cht: <h5>      Swachh Bharat <br></br>Swachh <br></br>Vidyalaya</h5> },
    { imgs: fit, cht: <h5>FIT INDIA</h5> },
    { imgs: mano, cht: <h5></h5> },
    ]
    const Carousels = function Responsive() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            button: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Box className="slider-container">
                <Slider {...settings}>
                    <Box>
                        <Box component="img" src={img3} sx={{ width: "100%", height: "100%" }} />
                    </Box>
                    <Box>
                        <Box component="img" src={img4} sx={{ width: "100%", height: "100%" }} />
                    </Box>
                    <Box>
                        <Box component="img" src={img5} sx={{ width: "100%", height: "100%" }} />
                    </Box>
                    <Box>
                        <Box component="img" src={img6} sx={{ width: "100%", height: "100%" }} />
                    </Box>

                </Slider>
            </Box>
        );
    }



    let sets = []

    return (
        <>
            <Box className="flexs" sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
                <Box>
                    <Box component="img" src={img1} />
                </Box>
                <Box>
                    <Box component="img" src={img2} width={100} />
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "blue", padding: "0% 5%" }}>
                <Box className="ulss" sx={{ backgroundColor: "blue", color: "white", padding: "1px" }}>
                    <ul style={{ textDecoration: "none", display: "flex", padding: "2px", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }} >
                        <li style={{ listStyleType: "none" }}>ABOUT US <FaCaretDown className="icn" /></li>
                        <li>MINISTER</li>
                        <li>DEPARTMENTS <FaCaretDown className="icn" /></li>
                        <li>DOCUMENTS & REPORTS</li>
                        <li>STATISTICS <FaCaretDown className="icn" /></li>
                        <li>INSTITUTION <FaCaretDown className="icn" /></li>
                        <li>BOARDS <FaCaretDown className="icn" /></li>
                        <li>MULTIMEDIA <FaCaretDown className="icn" /></li>
                        <li>DASHBOARD <FaCaretDown className="icn" /></li>
                        <li>RTI</li>
                    </ul>
                </Box>
            </Box>
            <Box>
                <Carousels />
            </Box>
            <Box className="flexs" sx={{ flexWrap: "wrap", backgroundColor: "blue" }}>
                <Box sx={{ width: { xs: "100%", md: "50", sm: "50%", xl: "50%" } }}>
                    <Box sx={{ backgroundColor: "red", }}>
                        <Box component="img" src={imgschool} />
                        <Box component="img" src={imgedu} />
                    </Box>
                </Box>
                <Box className="flexs" sx={{ justifyContent: "center", height: "100%", width: { xs: "100%", md: "50", sm: "50%", xl: "50%" }, backgroundColor: "blue" }}>
                    <Box s={{ height: "100%" }} >
                        <Box component="img" src={minster} />
                    </Box>
                </Box>
            </Box>
            <Box >
                <Box sx={{ overflow: "hidden" }}>
                    <p className="infinite-paragraph" style={{ display: "inline-block", width: "100%", overflow: "hidden" }}>Register on Prerana Portal to participate in PRERANA - An Experiential Learning Program - Click Here :<span style={{ color: "blue" }}>https://prerana.education.gov.in</span> </p>
                </Box>
            </Box>
            <Box sx={{ textAlign: "center" }}>
                <Box >
                    <Box component="img" src={national} sx={{
                        width: {
                            xs: "200px", md: "400px", sm: "250px", xl: "270px"
                        }
                    }} />
                </Box>
                <Box>
                    <Box component="img" src={year75} sx={{
                        width: {
                            xs: "200px", md: "400px", sm: "250px", xl: "270px"
                        }
                    }} />
                </Box>
            </Box>
            <Box sxx={{ textAlign: "center" }}>
                <h2 style={{ textAlign: "center", padding: "2%" }}>major Initiatives</h2>
                <Container sx={{ borderTop: "1px solid gray", paddingTop: "1%" }}>
                    <Box className="flexs" sx={{ textAlign: "center", flexWrap: "wrap", justifyContent: "center" }}>
                        {
                            setss.map((v, i) => {
                                return (
                                    <Box sx={{ padding: "1%", margin: ".3%", height: "150px", borderRight: "1px solid gray", display: "inline" }}>
                                        <Box component="img" src={v.imgs} sx={{ width: "auto" }} />
                                        {v.cht}
                                    </Box>
                                )
                            })
                        }

                    </Box>
                </Container>
            </Box>
            <Box sx={{ backgroundColor: "blue", padding: "20px 0px", textAlign: "center" }}>
                <Container >
                    <Box className="flexs" sx={{ flexWrap: "wrap" }}>
                        <Box sx={{
                            width: {
                                xs: "100%", md: "45%", sm: "50%", xl: "50%"
                            }, margin: "1%"
                        }}>
                            <Box sx={{ backgroundColor: "lightblue", width: "50%", padding: "1%", lineheight: "2" }}>
                                <h2 style={{ color: "red" }}>InFocus</h2>
                                <p> Ministry of Education congratulates recipients of the Shanti Swarup Bhatnagar Prize 2022 for pioneering work in Science and Tec</p>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: {
                                xs: "100%", md: "50%", sm: "50%", xl: "50%"
                            }
                        }}  >
                            <Box sx={{ backgroundColor: "lightblue", padding: "1%", lineheight: "2" }}>
                                <Box sx={{ padding: "1%", margin: "1%" }}>
                                    <span onClick={updt} style={{ padding: "4px", cursor: "pointer", boxShadow: "0px 0px 2px black", margin: "5px", borderTop: update ? "1px solid gear" : "", borderLeft: update ? "1px solid gray" : "", borderRight: update ? "1px solid gray" : "" }}>Update</span>
                                    <span onClick={circlr} style={{ padding: "4px", cursor: "pointer", boxShadow: "0px 0px 2px black", margin: "5px", borderTop: circular ? "1px solid gear" : "", borderLeft: circular ? "1px solid gray" : "", borderRight: circular ? "1px solid gray" : "" }}>Circular</span>
                                    <span onClick={circl2} style={{ padding: "4px", cursor: "pointer", boxShadow: "0px 0px 2px black", margin: "5px", borderTop: circular2 ? "1px solid gear" : "", borderLeft: circular2 ? "1px solid gray" : "", borderRight: circular2 ? "1px solid gray" : "" }}>Press Releses</span>
                                </Box>
                                <Box sx={{ height: "200px", padding: "1%", overflow: "scroll" }}>
                                    {update ? <Box>
                                        <h3>Advertisement</h3>
                                        <Box>
                                            <h4>Achievement</h4>
                                            <a class="pdfIcon" href="https://www.education.gov.in/sites/upload_files/mhrd/files/Notification_2.pdf " target="_blank">Notification No. 9-1/2024-U.3(A) dated 11.03.2024 declaring Velagapudi Ramkrishna Siddhartha Engineering College, Vasantha Nagar, Kanuru, Vijayawada,Andhra Pradesh as an Institution deemed to be University under general category  (Friday,15-March-2024 ) - (11.21 MB) </a>
                                        </Box>
                                    </Box> : ""}
                                    {circular ? <Box><a href="https://www.education.gov.in/sites/upload_files/mhrd/files/cvo_moe.pdf" title="Documents will open in English Version | दस्तावेज़ अंग्रेजी संस्करण में खुलेगा" class="pdfIcon" target="_blank">Extension of tenure of Ms. Neeta Prasad, Joint Secretary as part time CVO, Ministry of Education&nbsp;&nbsp; - (219.87 KB)</a></Box> : ""}
                                    {circular2 ? <Box><a href="https://www.education.gov.in/sites/upload_files/mhrd/files/PIB2013949.pdf" title="Documents will open in English Version | दस्तावेज़ अंग्रेजी संस्करण में खुलेगा" class="pdfIcon" target="_blank">PM to address youth of India via video conference on the occasion of ‘India’s Techade: Chips for Viksit Bharat’&nbsp;&nbsp; (Tuesday,12-March-2024) - (62.66 KB)</a></Box> : ""}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>

            </Box>
            <Box sx={{ backgroundColor: "#3c3c3c", color: "white", padding: "10px" }}>
                <Container sx={{ backgroundColor: "#3c3c3c", color: "white", padding: "1%" }}>
                    <Box className="flexs" sx={{ flexWrap: "wrap" }}>
                        <Box sx={{
                            width: {
                                xs: "100%", sm: "100%", md: "70%", xl: "70%"
                            }, color: "white", flexWrap: "wrap"
                        }} className="flexs" >
                            <Box>
                                <h2>About Moe</h2>
                                <Box>
                                    <ul><li ><a href="/about-moe" title="About MHRD">Overview</a></li>
                                        <li ><a href="/constitutional-provision" title="Constitutional Provision">Constitutional Provision</a></li>
                                        <li ><a href="/allocation-business" title="Allocation of Business Rules">Allocation of Business Rules</a></li>
                                        <li ><a href="/citizens-charter" title="Citizen's Charter">Citizen's Charter</a></li>
                                        <li ><a href="/policy_initiatives" title="Policy Initiatives">Policy Initiatives</a></li>
                                        <li ><a href="/cabe" title="Advisory Bodies">Advisory Bodies</a></li>
                                        <li ><a href="/organisation_chart_mhrd" title="Organogram">Organogram</a></li>
                                        <li ><a href="/schemes" title="Schemes">Schemes</a></li>
                                        <li ><a href="/minister-page" title="Who's Who">Who's Who</a></li>
                                        <li ><a href="https://www.education.gov.in/sites/upload_files/mhrd/files/upload_document/Directory_130722.pdf" title="Telephone Directory" target="_blank">Telephone Directory</a></li>
                                        <li ><a href="https://services.india.gov.in" title="Government Services" target="_blank" class="ext">Government Services<span class="ext"><span class="element-invisible"> (link is external)</span></span></a></li>
                                    </ul>
                                </Box>
                            </Box>
                            <Box>
                                <Box>
                                    <h2>institutions</h2>
                                    <li>School Education & Literacy
                                        Higher Education</li>
                                </Box>
                                <Box>
                                    <h2>Multimedia</h2>
                                    <li>Covid-19 Campaign</li>
                                    <li>YouTube Channel (link is external)</li>
                                    <li>Audio</li>
                                    <li>Photo Gallery</li>
                                    <li>Archived Photo Gallery</li>
                                </Box>
                            </Box>
                            <Box sx={{ paddingTop: "5%" }}>
                                <ul><li ><a href="/terms-condition" title="Terms &amp; Condition">Terms &amp; Conditions</a></li>
                                    <li ><a href="/privacy-policy" title="Privacy Policy">Privacy Policy</a></li>
                                    <li ><a href="/copyright_policy" title="Copyright Policy">Copyright Policy</a></li>
                                    <li ><a href="/hyperlink-policy" title="Hyperlink Policy">Hyperlink Policy</a></li>
                                    <li ><a href="/disclaimer" title="Disclaimer">Disclaimer</a></li>
                                    <li ><a href="/related-links" title="Related Link">Related Link</a></li>
                                    <li ><a href="/accessibility-statement" title="Accessibility Statement">Accessibility Statement</a></li>
                                    <li ><a href="/sitemap" title="Sitemap">Sitemap</a></li>
                                    <li ><a href="https://datastudio.google.com/reporting/9b2c28b1-746b-4ed8-9453-2871419f2b88" title="Web Analytics" target="_blank" class="ext">Web Analytics<span class="ext"><span class="element-invisible"> (link is external)</span></span></a></li>
                                    <li ><a href="https://www.education.gov.in/sites/upload_files/mhrd/files/upload_document/Directory_130722.pdf" title="Contact Us" target="_blank">Contact Us</a></li>
                                    <li ><a href="/help" title="Help">Help</a></li>
                                    <li ><a href="/web_information_manager" title="Web Information Manager">Web Information Manager</a></li>
                                    <li ><a href="https://www.india.gov.in" title="National Portal" target="_blank" class="ext">National Portal<span class="ext"><span class="element-invisible"> (link is external)</span></span></a></li>
                                    <li ><a href="https://pgportal.gov.in/Registration" target="_blank" class="ext">Public Grievances<span class="ext"><span class="element-invisible"> (link is external)</span></span></a></li>
                                    <li ><a href="https://pgportal.gov.in/Registration" title="Feedback" target="_blank" class="ext">Feedback<span class="ext"><span class="element-invisible"> (link is external)</span></span></a></li>
                                </ul>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: {
                                xs: "100%", sm: "100%", md: "30%", xl: "30%"
                            }
                        }}>
                            <Box>
                                <Box>
                                    <Box component="img" src={qr} />
                                    <Box component="img" src={nic} />
                                    <Box>Content of this website is owned and managed by D/o Higher Education, Ministry of Education. This site is designed, developed, hosted and maintained by National Informatics Centre (NIC), Ministry of Electronics & Information Technology, Government of India. Copyright 2021. All Rights Reserved.</Box>
                                </Box>
                                <Box className="flexs" sx={{ marginTop: "3%", flexWrap: "wrap" }}>
                                    <Box>
                                        <h2>Follow us on:</h2>
                                        <span style={{ color: "white", fontSize: "20px", paddingRight: "10px" }}><ImFacebook2 /></span>
                                        <span style={{ color: "white", fontSize: "20px", paddingRight: "10px" }}><FaSquareTwitter /></span>
                                        <span style={{ color: "white", fontSize: "20px", paddingRight: "10px" }}><TfiYoutube /></span>
                                    </Box>
                                    <Box>
                                        <Box component="img" src="https://www.education.gov.in/sites/upload_files/mhrd/files/nep/images/award_dia.png" />
                                        <Box component="img" src="https://www.education.gov.in/sites/upload_files/mhrd/files/nep/images/stqc.png" />
                                        <Box component="img" src="https://www.w3.org/Icons/valid-xhtml10" />
                                        <Box component="img" src="https://jigsaw.w3.org/css-validator/images/vcss" />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}