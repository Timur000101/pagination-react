import BaseBtn from "./BaseBtn"
import { ArrowLeft } from "../assets/ArrowLeft"
import { BtnProps } from "./BaseBtn"

export default function PrevPageBtn({...props}: BtnProps) {
    return (
        <BaseBtn {...props}>
            <ArrowLeft />
        </BaseBtn>
    )
}