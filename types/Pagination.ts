export interface PaginationTyping {
  postsPerPage: number
  totalPosts: number | undefined
  paginateFront: () => void
  paginateBack: () => void
  currentPage: number
  isLoading: boolean
}
