import React from 'react';
import Icon from './Icon';
import './styles.css';

type Props = {
    text: string;
    width: string;
    border?: string;
    isBackgroundRed: boolean;
    textColor: string;
    iconColor: string;
    textSize: string;
    className?: string;
    onClick: () => void;
    iconName: 'chevronRight';

};

function CustomButton({ text, width, border, isBackgroundRed, textColor, iconColor, textSize, className, onClick, iconName }: Props) {
    return (
        <button
            className={`btn-2 ${width} p-2 rounded-lg ${border} ${textColor} ${isBackgroundRed ? 'bg-[#f01f2b]' : 'bg-transparent'} ${className}`}
            onClick={onClick}
        >
            <div className={`sm:font-semibold ms-8 me-4 ${textSize}`}>{text}</div>
            <Icon iconName={iconName} iconColor={iconColor} width={30} height={30} className="icon icon-tabler icon-tabler-chevron-right "  />
        </button>
    );
}


export default CustomButton;