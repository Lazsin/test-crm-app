import { useState } from 'react'
import { tableData as initialData } from '../mock/tableData'
import FilterTabs from './FiltersTabs'
import SearchBar from './SearchBar'
import Pagination from './Pagination'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'  // компонент с формой добавления/редактирования
import { icons } from '../assets/icons'

export default function MainBar() {
  const [products, setProducts] = useState(initialData)
  const [filter, setFilter] = useState("Wszystkie")
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const pageSize = 5

  const handleDeleteProduct = (id) => {
  setProducts(prev => prev.filter(p => p.id !== id));
}

const handleEditProduct = (product) => {
  setEditingProduct(product);
  setShowForm(true);
}

  // Модалка
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)

  // Подсчёты для табов (учитываем текущий searchTerm и фильтр)
  const filteredByStatus = filter === "Wszystkie" ? products : products.filter(p => p.status === filter)
  const filteredData = filteredByStatus.filter(p =>
    p.productName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const allCount = products.length
  const activeCount = products.filter(item => item.status === "Aktywne").length
  const unpublishedCount = products.filter(item => item.status === "Nieopublikowane").length

  // Пагинация
  const totalPages = Math.ceil(filteredData.length / pageSize)
  const paginatedData = filteredData.slice((page - 1) * pageSize, page * pageSize)

  // Обработчики
  const goPrev = () => { if (page > 1) setPage(page - 1) }
  const goNext = () => { if (page < totalPages) setPage(page + 1) }
  const goToPage = (p) => { setPage(p) }

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
    setPage(1)
  }

  const handleSearchChange = (term) => {
    setSearchTerm(term)
    setPage(1)
  }

  const openAddForm = () => {
    setEditingProduct(null)
    setShowForm(true)
  }

  const openEditForm = (product) => {
    setEditingProduct(product)
    setShowForm(true)
  }

  const handleSaveProduct = (productData) => {
    if (productData.id) {
      // Обновление существующего продукта
      setProducts(prev =>
        prev.map(p => (p.id === productData.id ? productData : p))
      )
    } else {
      // Добавление нового продукта с новым id
      const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1
      setProducts(prev => [...prev, { ...productData, id: newId }])
    }
    setShowForm(false)
  }

  const handleCancelForm = () => {
    setShowForm(false)
  }

  return (
    <div className='main bg-[#FFFFFF] rounded-[10px] h-full'>
      <div className='navbar flex justify-between items-center px-4 py-6'>
        <FilterTabs filter={filter} setFilter={handleFilterChange} counts={{ all: allCount, active: activeCount, unpublished: unpublishedCount }} />
        <div className=" font-normal text-[12px] leading-[100%]" style={{ fontFamily: '"Days One", sans-serif', letterSpacing: '0' }}> 
          <button onClick={openAddForm} className='addproduct flex items-center justify-center gap-4 px-4 py-2 rounded-[30px] border border-[#22FEFF] text-white' style={{background: 'radial-gradient(83.55% 73.47% at 50.21% 26.53%, #08293A 0%, #05212E 99.48%)',}}> 
            Utwórz produkt {icons.plus_button} 
          </button> </div>
      </div>

      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <ProductTable
        data={paginatedData}
        onDelete={handleDeleteProduct}
        onEdit={handleEditProduct}
      />

      <Pagination page={page} totalPages={totalPages} goPrev={goPrev} goNext={goNext} goToPage={goToPage} />

      {showForm && (
        <ProductForm
          product={editingProduct}
          onSave={handleSaveProduct}
          onCancel={handleCancelForm}
        />
      )}
    </div>
  )
}
