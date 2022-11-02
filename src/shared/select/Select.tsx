import { useState, useEffect, useRef } from 'react'
import { DropDownCont, DropDownHeader, DropDownListContainer, DropDownList, ItemText, ListItem, ListItemText } from './style'
import DownIcon from 'assets/icons/down.svg'
import GreyDownIcon from 'assets/icons/down_grey_icon.svg'

const Select = (props: any) => {
    const dropdownRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
    const { options, handleSelect, iconColor, defaultValue, value } = props

    useEffect(() => {
        if(iconColor == "grey" && value !== undefined){
            // console.log("select default value inside useEffect", defaultValue, value)
            handleSelect(value)
            setSelectedOptionIndex(value)
        }
        
        const handleClickOutside = () => {
            setIsOpen(false)
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [defaultValue, value])

    const toggling = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsOpen(!isOpen)
        event.stopPropagation()
    }

    const onOptionClicked = (selectedIndex: number) => () => {
        setSelectedOptionIndex(selectedIndex)
        handleSelect(options[selectedIndex].value)
        setIsOpen(false)
    }

    return (
        <DropDownCont isOpen={isOpen} >
            <DropDownHeader onClick={toggling} isActive={isOpen} iconColor={iconColor}>
                <ItemText>{options[selectedOptionIndex].label}</ItemText>
                { iconColor == "grey" ? 
                <img className='GreyDownIcon' src={GreyDownIcon} alt="" /> :
                <img src={DownIcon} alt="" />
                }
            </DropDownHeader>
            <DropDownListContainer>
                <DropDownList ref={dropdownRef}>
                    {options.map((option: any, index: number) =>
                        index !== selectedOptionIndex ? (
                            <ListItem onClick={onOptionClicked(index)} key={option.label}>
                                <ListItemText>{option.label}</ListItemText>
                            </ListItem>
                        ) : null,
                    )}
                </DropDownList>
            </DropDownListContainer>
        </DropDownCont>
    );
};

export default Select;