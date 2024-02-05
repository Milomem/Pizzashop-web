import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination'

interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function PaginationOrder({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className=" flex items-center justify-between">
      <span className=" text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className=" w-full text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button variant="outline" className="h-8 w-8 p-0">
                <ChevronsLeft className="h-4 w-4" />
                <span className="sr-only">Primeira página</span>
              </Button>
            </PaginationItem>

            <PaginationItem>
              <Button variant="outline" className="h-8 w-8 p-0">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Página anterior</span>
              </Button>
            </PaginationItem>

            <PaginationItem>
              <Button variant="outline" className="h-8 w-8 p-0">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Próxima página</span>
              </Button>
            </PaginationItem>

            <PaginationItem>
              <Button variant="outline" className="h-8 w-8 p-0">
                <ChevronsRight className="h-4 w-4" />
                <span className="sr-only">Última página</span>
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
