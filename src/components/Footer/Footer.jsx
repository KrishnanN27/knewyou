import React,{useState,useEffect} from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp} from "@fortawesome/free-solid-svg-icons"

export default function Footer() {

        const faArrowUpIcon = <FontAwesomeIcon icon={faArrowUp} />;

        //state
        const [isVisible,setIsVisible]=useState(false);

        const scrollToTop=()=>{
                window.scrollTo({
                        top:0,
                        behavior:"smooth"
                })
        }
         
        const listenToScroll=()=>{
                let heightToHidden=250;
                const windowScroll=document.body.scrollTop || document.documentElement.scrollTop;

                (windowScroll > heightToHidden) ? setIsVisible(true) : setIsVisible(false);
        }

        useEffect(()=>{
                window.addEventListener("scroll",listenToScroll);
        })

  return (
   <>
   <section className="conatainer">
        <footer className="footer">
                <p>@ All Right Reserved 2024 Designed By <a href="/">Abhinandankumarfrontenddeveloper</a></p>
        </footer>
   </section>

   {/* Scroll To Top */}
{
        isVisible && (
                <div className="scroll_top" onClick={scrollToTop} >
        {faArrowUpIcon}
   </div>
        )
}
   
   </>
  )
}
