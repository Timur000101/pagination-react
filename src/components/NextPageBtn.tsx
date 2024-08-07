import BaseBtn from "./BaseBtn"
import { ArrowRight } from "../assets/ArrowRight"
import { BtnProps } from "./BaseBtn"

export default function NextPageBtn({ ...props }: BtnProps) {
    return (
        <BaseBtn {...props}>
            <ArrowRight />
        </BaseBtn>
    )
}