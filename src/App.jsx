import { useEffect, useState } from "react"
import ProductList from "./ProductList"
import SearchArea from "./SearchArea"
import Paging from "./Paging"

function App() {
  const [products, setProducts] = useState([])
  const [curPage, setCurPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [input, setInput] = useState('')
  const [searchText, setSearchText] = useState('')
  const rowList = 12;
  const fetchData = async (page, search) => {
    let url = ""
    !search
      ? url = `https://dummyjson.com/products?limit=${rowList}&skip=${(page - 1) * rowList}`
      : url = `https://dummyjson.com/products/search?q=${search}&limit=${rowList}&skip=${(page - 1) * rowList}`
    const resp = await fetch(url)
    const data = await resp.json()
    setProducts(data.products)
    const pages = Math.ceil(data.total / rowList)
    pages == 0
      ? setTotalPage(1)
      : setTotalPage(pages)
  }
  useEffect(() => {
    fetchData(curPage)
  }, [])

  useEffect(() => {
    fetchData(curPage, searchText)
  }, [curPage])
  const hdlPage = (v) => {
    if (curPage + v > totalPage || curPage + v < 1) { return }
    setCurPage(prv => prv + v)
  }
  useEffect(() => {
    fetchData(1, searchText)
    setCurPage(1)
  }, [searchText])
  useEffect(() => {
    let sto = setTimeout(() => {
      setSearchText(input)
    }, 1000)
    return () => {
      clearTimeout(sto)
    }
  }, [input])
  const hdlInputChange = async e => {
    setInput(e.target.value.toLowerCase())
  }

  return (
    <>
      <div className="flex flex-col gap-4 p-10 bg-slate-200 w-6/12 mx-auto border min-h-screen items-center">
        <SearchArea hdlInputChange={hdlInputChange} />
        <ProductList products={products} />
        <Paging curPage={curPage} totalPage={totalPage} hdlPage={hdlPage} />
      </div>
    </>
  )
}

export default App
