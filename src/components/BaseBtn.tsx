import React from 'react'

export interface BaseBtnProps {
    children: React.ReactNode
    isActive: boolean
    disabled: boolean
    onClick?: () => void
}

export interface BtnProps extends Omit<BaseBtnProps, 'children'> {}

export default function BaseBtn(
    { children, onClick, isActive, disabled }: BaseBtnProps
) {
    return (
        <button
            type="button"
            className={'p-btn' + (isActive ? 'p-btn--active' : '')}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}