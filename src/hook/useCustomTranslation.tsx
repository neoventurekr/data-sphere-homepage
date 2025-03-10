import {useTranslation} from "next-export-i18n";
import React, {ReactNode} from "react";

export function useCustomTranslation() {
  const {t} = useTranslation();
  
  const translate = (key: string): ReactNode => {
    
    // 1. 번역된 문자열 가져오기
    const text: string = t(key);

    // 2. {common.data_sphere} 패턴을 <span>으로 변경
    const dataSphereValue: string = t('common.data_sphere');
    const parts = text.split('{common.data_sphere}'); // 구분자로 나누기
    
    
    // 3. \n을 <br/>로 변환하면서 JSX 배열로 변환
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {/* 텍스트에 \n을 <br />로 변환 */}
        {part.split("\n").map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {line}
            {lineIndex < part.split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
        
        {/* {common.data_sphere}의 텍스트는 span 안에 넣기 */}
        {index < parts.length - 1 && (
          <span className="accent_text">{dataSphereValue}</span>
        )}
      </React.Fragment>
    ));
  }
  
  return { t: translate };
}