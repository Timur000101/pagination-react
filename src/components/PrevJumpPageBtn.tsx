import BaseBtn from "./BaseBtn"
import { ArrowDoubleLeft } from "../assets/ArrowDoubleLeft"
import { BtnProps } from "./BaseBtn"

export default function PrevJumpPageBtn({ ...props }: BtnProps) {
    return (
        <BaseBtn {...props}>
            <ArrowDoubleLeft />
        </BaseBtn>
    )
}