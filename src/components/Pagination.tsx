
import NextPageBtn from "./NextPageBtn"
import NextJumpPageBtn from "./NextJumpPageBtn"
import PrevPageBtn from "./PrevPageBtn"
import PrevJumpPageBtn from "./PrevJumpPageBtn"
import PageLinks from "./PageLinks"

export default function Pagination() {
    return (
        <div className="p-pagination">
            <PrevPageBtn isActive={false} disabled={false} onClick={() => {}} />
            <PrevJumpPageBtn isActive={false} disabled={false} onClick={() => {}} />
            <PageLinks />
            <NextJumpPageBtn isActive={false} disabled={false} onClick={() => {}} />
            <NextPageBtn isActive={false} disabled={false} onClick={() => {}} />
        </div>
    )
}