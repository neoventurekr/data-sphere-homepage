import { useState, useRef, useEffect } from "react";
import styled from '@emotion/styled';
import {LanguageSwitcher} from "next-export-i18n";
import {useCustomTranslation} from "@/hook/useCustomTranslation";

const Wrapper = styled.div`
    position: relative;

    button {
        display: flex;
        min-width: 80px;
        padding: 3px 20px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        background: #8C44FF;
        color: #FFF;
        font-size: 18px;
    }
    
    .dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        background: rgba(13, 2, 54, 0.8);
        backdrop-filter: blur(2px);
        
        span {
            padding: 8px;
            font-size: 16px;
            text-align: center;
            cursor: pointer;
        }
    }
`

const LanguageSwitcherDropdown = () => {
  const { t } = useCustomTranslation();
  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  return (
    <Wrapper ref={dropdownRef}>
      <button onClick={toggleDropdown} style={{padding: "8px 16px", cursor: "pointer"}}>
        {t('common.menu_button')}
      </button>
      
      {isOpen && (
        <div className={'dropdown'}>
          <LanguageSwitcher lang={'ko'}>한국어</LanguageSwitcher>
          <LanguageSwitcher lang={'en'}>English</LanguageSwitcher>
        </div>
      )}
    </Wrapper>
  );
};

export default LanguageSwitcherDropdown;