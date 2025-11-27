
import { useState } from 'react'


export default function ProductForm({ product, onSave, onCancel }) {
  const [formData, setFormData] = useState(
    product || { id: null, icon: '', productName: '', status: 'Aktywne', price: '', totalBought: 0 }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.productName.trim()) {
      alert("Nazwa produktu jest wymagana");
      return;
    }
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 w-[400px] shadow-lg"
      >
        <h2 className="text-xl mb-4">{product ? 'Edytuj produkt' : 'Dodaj produkt'}</h2>

        <label className="block mb-2">
          Nazwa produktu
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-2 py-1"
          />
        </label>

        <label className="block mb-2">
          Status
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-2 py-1"
          >
            <option value="Aktywne">Aktywne</option>
            <option value="Nieopublikowane">Nieopublikowane</option>
          </select>
        </label>

        <label className="block mb-2">
          Cena
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="np. 100 PLN"
            className="w-full border border-gray-300 rounded px-2 py-1"
          />
        </label>

        <label className="block mb-4">
          Łączna liczba kupionych
          <input
            type="number"
            name="totalBought"
            value={formData.totalBought}
            onChange={handleChange}
            min="0"
            className="w-full border border-gray-300 rounded px-2 py-1"
          />
        </label>

        {/* Для простоты иконка - текстовое поле */}
        <label className="block mb-4">
          Ikona (ścieżka)
          <input
            type="text"
            name="icon"
            value={formData.icon}
            onChange={handleChange}
            placeholder="np. path/to/icon.svg"
            className="w-full border border-gray-300 rounded px-2 py-1"
          />
        </label>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded border border-gray-400"
          >
            Anuluj
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-[#22FEFF] text-black"
          >
            Zapisz
          </button>
        </div>
      </form>
    </div>
  );
}