type PaginationType = 'loop' | 'base'

export class Pagination {
    public currentPage: number
    public totalPages: number
    public paginationType: PaginationType


    constructor(currentPage: number, totalPages: number, paginationType: PaginationType = 'base') {
        this.currentPage = currentPage
        this.totalPages = totalPages
        this.paginationType = paginationType
    }

    public getCurrentPage() {
        return this.currentPage
    }

    public increasePage() {
        this.currentPage++
    }

    public decreasePage() {
        this.currentPage--
    }

    private isLoop() {
        return this.paginationType === 'loop'
    }

    private checkState() {
        if (this.isLoop()) {
            if (this.currentPage >= this.totalPages) {
                this.currentPage = 0
            }
        } else {
            if (this.currentPage >= this.totalPages) {
                this.currentPage = this.totalPages
            }
        }
    }
}