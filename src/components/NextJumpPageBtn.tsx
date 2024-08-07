import BaseBtn from "./BaseBtn"
import { ArrowDoubleRight } from "../assets/ArrowDoubleRight"
import { BtnProps } from "./BaseBtn"

export default function NextJumpPageBtn({ ...props }: BtnProps) {
    return (
        <BaseBtn {...props}>
            <ArrowDoubleRight />
        </BaseBtn>
    )
}